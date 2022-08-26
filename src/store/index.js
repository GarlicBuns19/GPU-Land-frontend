import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    products: null,
    singleProduct: null,
  },
  getters: {},
  mutations: {
    stateProducts(state, products) {
      state.products = products
    },
    stateSingleProduct(state, singleProduct) {
      state.singleProduct = singleProduct
    },
  },
  actions: {
    fetchProducts: async (context) => {
      await fetch('https://gpu-land.herokuapp.com/products')
        .then(products => products.json())
        .then(productsJson => context.commit('stateProducts', productsJson.results))
    },
    fetchSingleProduct: async (context, id) => {
      await fetch(`https://gpu-land.herokuapp.com/products/${id}`)
        .then(singleProduct => singleProduct.json())
        .then(singleProductJson => context.commit('stateSingleProduct', singleProductJson.results))
    },
    editProduct(context,id) {
      fetch(`https://gpu-land.herokuapp.com/products/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            gpuNoA : document.getElementById('gpuNoA').value,
            gpuNrAr : document.getElementById('gpuNrAr').value,
            gpuGen : document.getElementById('gpuGen').value,
            gpuChip : document.getElementById('gpuChip').value,
            released : document.getElementById('released').value,
            memoryGb : document.getElementById('memoryGb').value,
            memoryType : document.getElementById('memoryType').value,
            memoryBit : document.getElementById('memoryBit').value,
            gpuClock : document.getElementById('gpuClock').value,
            memoryClock : document.getElementById('memoryClock').value,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((editedProduct) => editedProduct.json())
        .then(() => context.dispatch('fetchProducts'));
    },
    deleteProduct: async(context, id) => {
      fetch(`https://gpu-land.herokuapp.com/products/${id}`, {
          method: 'DELETE',
        })
        .then((products) => products.json())
        .then(() => context.dispatch('fetchProducts'))
    },
  },
  modules: {}
})