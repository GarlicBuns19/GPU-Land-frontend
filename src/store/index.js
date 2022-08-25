import { createStore } from 'vuex'

export default createStore({
  state: {
    products : null,
    singleProduct : null,
  },
  getters: {
  },
  mutations: {
    stateProducts(state,products){
      state.products = products
    },
    stateSingleProduct(state,singleProduct){
      state.singleProduct = singleProduct
    }
  },
  actions: {
    fetchProducts: async (context) => {
      await fetch('https://gpu-land.herokuapp.com/products')
      .then(products => products.json())
      .then(productsJson => context.commit('stateProducts',productsJson.results))
    },
    fetchSingleProduct: async (context,id) => {
      await fetch(`https://gpu-land.herokuapp.com/products/${id}`)
      .then(singleProduct => singleProduct.json())
      .then(singleProductJson => context.commit('stateSingleProduct',singleProductJson.results))
    }
  },
  modules: {
  }
})
