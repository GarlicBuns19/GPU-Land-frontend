import { createStore } from "vuex";

export default createStore({
  state: {
    graphics: null,
    singleGraphic: null,
  },
  getters: {},
  mutations: {
    stateGraphics(state, graphics) {
      state.graphics = graphics;
    },
    stateSingleGraphic(state, singlegraphic) {
      state.singleGraphic = singlegraphic;
    },
  },
  actions: {
    fetchGraphics: async (context) => {
      // await fetch("https://gpu-land.herokuapp.com/products")
      await fetch("http://localhost:4000/products")
        .then((graphics) => graphics.json())
        .then((graphicsJson) =>
          context.commit("stateGraphics", graphicsJson.results)
        );
    },
    fetchSingleGraphic: async (context, id) => {
      // await fetch(`https://gpu-land.herokuapp.com/products/${id}`)
      await fetch(`http://localhost:4000/products/${id}`)
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
      // fetch("https://gpu-land.herokuapp.com/products", {
      fetch("http://localhost:4000/products", {
        method: "POST",
        body: JSON.stringify({
          gpuFront_Img : gpuFront_Img,
          gpuNoA : gpuNoA,
          gpuNrAr : gpuNrAr,
          gpuGen : gpuGen,
          gpuChip : gpuChip,
          released : released,
          memoryGb : memoryGb,
          memoryType : memoryType,
          memoryBit : memoryBit,
          gpuClock : gpuClock,
          memoryClock : memoryClock,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((newGraphic) => newGraphic.json())
        .then(window.location.reload())
        .then(() => context.dispatch("fetchGraphics"));
    },
    // Edit GPU
    editGraphic(context, graphic) {
      // fetch(`https://gpu-land.herokuapp.com/products/` + graphic.gpu_id, {
        fetch(`http://localhost:4000/products/${graphic.gpu_id}`, {
        method: "PUT",
        body: JSON.stringify(graphic),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((editedGraphic) => editedGraphic.json())
        .then(() => context.dispatch("fetchGraphics"));
    },
    deleteGraphic: async (context, id) => {
      // fetch(`https://gpu-land.herokuapp.com/products/${id}`, {
      fetch(`http://localhost:4000/products/${id}`, {
        method: "DELETE",
      })
        .then((graphics) => graphics.json())
        .then(() => context.dispatch("fetchGraphics"));
    },
  },
  modules: {},
});
