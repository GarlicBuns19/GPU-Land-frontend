import { createStore } from 'vuex'

export default createStore({
  state: {
    products : null,
    singleProducts : null,
  },
  getters: {
  },
  mutations: {
    stateProducts(state,products){
      state.products = products
    },
    stateSingleProducts(state,singleProducts){
      state.singleProducts = singleProducts
    }
  },
  actions: {
    fetchProducts: async (context) => {
      await fetch('https://gpu-land.herokuapp.com/products')
      .then(products => products.json())
      .then(productsJson => context.commit('stateProducts',productsJson.results))
    },
    fetchSingleProducts: async (context,id) => {
      await fetch(`https://gpu-land.herokuapp.com/products/${id}`)
      .then(singleProducts => singleProducts.json())
      .then(singleProductsJson => context.commit('stateSingleProducts',singleProductsJson.results))
    }
  },
  modules: {
  }
})
