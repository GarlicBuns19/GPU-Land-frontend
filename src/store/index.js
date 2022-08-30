import {
  createStore
} from "vuex";

export default createStore({
  state: {
    graphics: null,
    singleGraphic: null,
    user: null || JSON.parse(localStorage.getItem('user')),
    msg: null,
    admin: false,
  },
  getters: {},
  mutations: {
    stateGraphics(state, graphics) {
      state.graphics = graphics;
    },
    stateSingleGraphic(state, singlegraphic) {
      state.singleGraphic = singlegraphic;
    },
    stateUser(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user))
    },
  },
  actions: {
    admincheck: (context) => {
      let user = context.state.user
      if (user != null) {
        if (user.userRole === "admin") {
          context.state.admin = true
        }
      }
    },
    fetchGraphics: async (context) => {
      await fetch("https://gpu-land.herokuapp.com/products")
        // await fetch("http://localhost:3001/products")
        .then((graphics) => graphics.json())
        .then((graphicsJson) =>
          context.commit("stateGraphics", graphicsJson.results)
        );
    },
    fetchSingleGraphic: async (context, id) => {
      await fetch(`https://gpu-land.herokuapp.com/products/${id}`)
        // await fetch(`http://localhost:3001/products/${id}`)
        .then((singlegraphic) => singlegraphic.json())
        .then((singlegraphicJson) =>
          context.commit("stateSingleGraphic", singlegraphicJson.results)
        );
    },
    /// Add GPU
    addGraphic: (context, payload) => {
      const {
        gpuFront_Img,
        gpuNoA,
        gpuNrAr,
        gpuGen,
        gpuChip,
        released,
        memoryGb,
        memoryType,
        memoryBit,
        gpuClock,
        memoryClock,
      } = payload;
      fetch("https://gpu-land.herokuapp.com/products", {
          // fetch("http://localhost:3001/products", {
          method: "POST",
          body: JSON.stringify({
            gpuFront_Img: gpuFront_Img,
            gpuNoA: gpuNoA,
            gpuNrAr: gpuNrAr,
            gpuGen: gpuGen,
            gpuChip: gpuChip,
            released: released,
            memoryGb: memoryGb,
            memoryType: memoryType,
            memoryBit: memoryBit,
            gpuClock: gpuClock,
            memoryClock: memoryClock,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((newGraphic) => newGraphic.json())
        // .then(window.location.reload())
        .then(() => context.dispatch("fetchGraphics"));
    },
    // Edit GPU
    editGraphic(context, graphic) {
      fetch(`https://gpu-land.herokuapp.com/products/` + graphic.gpu_id, {
          // fetch(`http://localhost:3001/products/${graphic.gpu_id}`, {
          method: "PUT",
          body: JSON.stringify(graphic),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((editedGraphic) => editedGraphic.json())
        .then((data) => {
          console.log(data);
          context.dispatch("fetchGraphics")
        });
    },
    deleteGraphic: async (context, id) => {
      fetch(`https://gpu-land.herokuapp.com/products/${id}`, {
          // fetch(`http://localhost:3001/products/${id}`, {
          method: "DELETE",
        })
        .then((graphics) => graphics.json())
        // .then(window.location.reload())
        .then((data) => {
          console.log(data);
          context.dispatch("fetchGraphics")
        })
    },
    register: async (context, data) => {
      console.log("Sup")
      await fetch('http://localhost:3001/register', {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
        .then(res => res.json())
        .then(userData => context.state.msg = userData.msg)
    },
    login: async (context, data) => {
      console.log("Hi")
      fetch("http://localhost:3001/login", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
        .then((res) => res.json())
        .then((data) => {
          let user = data.results
          console.log(user)
          context.commit("stateUser", user);
          if (user.userRole === "admin") {
            context.state.admin = true
          }
          // .then(() => console.log(context.state.user))
          //   alert('Login in success')
          // router.push("/products");
        });
    },
  },
  modules: {},
});