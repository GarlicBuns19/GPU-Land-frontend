import { createStore } from "vuex";
import router from "@/router";
export default createStore({
  state: {
    graphics: null,
    singleGraphic: null,
    user: null || JSON.parse(localStorage.getItem("user")),
    msg: null,
    admin: false,
    users: null,
    singleUser: null,
    userUser: false,
    cart: null,
    asc: false,
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
      localStorage.setItem("user", JSON.stringify(user));
    },
    stateAllUsers(state, users) {
      state.users = users;
    },
    stateSingleUser(state, user) {
      state.singleUser = user;
    },
    setCart(state, cart) {
      state.cart = cart;
      console.log(cart);
    },
  },
  actions: {
    admincheck: (context) => {
      let user = context.state.user;
      if (user != null) {
        if (user.userRole === "admin") {
          context.state.admin = true;
        }
        if (user.userRole === "user") {
          context.state.userUser = true;
        }
        context.dispatch("getCart");
      }
    },
    logout: (context) => {
      localStorage.removeItem("user");
      window.location.reload();
      console.log(context.state.user);
    },
    fetchGraphics: async (context) => {
      // await fetch("https://gpu-land.herokuapp.com/products")
      await fetch("http://localhost:3001/products")
        .then((graphics) => graphics.json())
        .then((graphicsJson) =>
          context.commit("stateGraphics", graphicsJson.results)
        );
    },
    fetchSingleGraphic: async (context, id) => {
      // await fetch(`https://gpu-land.herokuapp.com/products/${id}`)
      await fetch(`http://localhost:3001/products/${id}`)
        .then((singlegraphic) => singlegraphic.json())
        .then((singlegraphicJson) =>
          context.commit("stateSingleGraphic", singlegraphicJson.results)
        );
    },
    /// Add GPU
    addGraphic: (context, payload) => {
      const {
        gpuFront_Img,
        gpuTop,
        gpuBack,
        gpuBottom,
        gpuIo,
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
        price
      } = payload;
      // fetch("https://gpu-land.herokuapp.com/products", {
      fetch("http://localhost:3001/products", {
        method: "POST",
        body: JSON.stringify({
          gpuFront_Img: gpuFront_Img,
          gpuTop: gpuTop,
          gpuBack: gpuBack,
          gpuBottom: gpuBottom,
          gpuIo: gpuIo,
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
          price : price
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
      // fetch(`https://gpu-land.herokuapp.com/products/` + graphic.gpu_id, {
      fetch(`http://localhost:3001/products/${graphic.gpu_id}`, {
        method: "PUT",
        body: JSON.stringify(graphic),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((editedGraphic) => editedGraphic.json())
        .then((data) => {
          console.log(data);
          context.dispatch("fetchGraphics");
        });
    },
    // Delete GPU
    deleteGraphic: async (context, id) => {
      // fetch(`https://gpu-land.herokuapp.com/products/${id}`, {
      fetch(`http://localhost:3001/products/${id}`, {
        method: "DELETE",
      })
        .then((graphics) => graphics.json())
        // .then(window.location.reload())
        .then((data) => {
          console.log(data);
          context.dispatch("fetchGraphics");
        });
    },
    // Register
    register: async (context, data) => {
      console.log("Sup");
      await fetch("http://localhost:3001/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((userData) => {
          context.state.msg = userData.msg;
          router.push("/login");
          // this.$router.push('/login')
        });
    },
    // Login
    login: async (context, data) => {
      console.log("Hi");
      fetch("http://localhost:3001/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          let user = data.results;
          console.log(user);
          console.log(data.msg);
          if (data.msg === "Email doesn't exist") {
            swal({
              icon: "error",
              title: "Email doesn't exist",
              text: "Type in the proper email",
              buttons: "Try Again",
            });
          }
          if (data.msg === "The password does not match") {
            swal({
              icon: "error",
              title: "The password does not match",
              text: "Type in the proper password",
              buttons: "Try Again",
            });
          }
          if (data.msg === "login successful") {
            swal({
              icon: "success",
              title: "Loged In Boss",
              text: "U the Boss",
              buttons: "Enjoy",
            });
            if (user.userRole === "admin") {
              context.state.admin = true;
            }
            context.commit("stateUser", user);
          }
        });
    },
    // All users
    fetchUsers: async (context) => {
      // await fetch('https://gpu-land.herokuapp.com/users')
      await fetch("http://localhost:3001/users")
        .then((res) => res.json())
        .then((allUsers) => context.commit("stateAllUsers", allUsers.results));
    },
    // 1 User
    fetchSingleUser: async (context, id) => {
      await fetch(`http://localhost:3001/users/${id}`)
        .then((res) => res.json())
        .then((user) => {
          console.log(user.results);
          console.log(user.msg);
          context.commit("stateSingleUser", user.results);
        });
    },
    // Edit User
    editUser: async (context, user) => {
      // fetch("http://localhost:3000/products/" + product.id, {
      fetch("http://localhost:3001/users/" + user.user_id, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // alert(data.msg);
          console.log(data);
          context.dispatch("fetchUsers");
        });
    },
    // Delete User
    deleteUser: async (context, userid) => {
      // fetch(`https://gpu-land.herokuapp.com/users/${userid}`, {
      fetch(`http://localhost:3001/users/${userid}`, {
        method: "DELETE",
      })
        .then((users) => users.json())
        .then((data) => {
          console.log(data.msg);
          context.dispatch("fetchUsers");
        });
    },
    // Cart
    getCart: async (context, id) => {
      id = context.state.user.user_id;
      await fetch(`http://localhost:3001/users/${id}/cart`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data != null) {
            context.commit("setCart", data.results);
          }
        });
    },
    // Add to Cart
    addCart: async (context, item, id) => {
      console.log(context.state.cart);
      id = context.state.user.user_id;
      console.log(item);
      await fetch("http://localhost:3001/users/" + id + "/cart", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getCart", id);
        });
    },
    // Clear Cart
    clearCart: async (context, id) => {
      id = context.state.user.user_id;
      await fetch("http://localhost:3001/users/" + id + "/cart", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getCart", id);
        });
    },
    // Item Deleted in Cart
    deleteCart: async (context, cart, id) => {
      id = context.state.user.user_id;
      await fetch(
        "http://localhost:3001/users/" + id + "/cart/" + cart.cart_id,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getCart", id);
        });
    },
  },
  modules: {},
});
