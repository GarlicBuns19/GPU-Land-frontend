<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="cart"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">Your Cart</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div v-if="gpuCart">
        <div class="card" v-for="gpu in gpuCart" :key="gpu.gpu_id">
          <div class="row mx-auto">
            <div class="col">
              <img :src="gpu.gpuFront_Img" alt="" class="img-fluid" />
            </div>
            <div class="col">
              <h1>
                {{ gpu.gpuNoA }} {{ gpu.gpuNrAr }} {{ gpu.gpuGen }}
                {{ gpu.gpuChip }}
              </h1>
            </div>
          </div>
          <button
            @click="this.$store.dispatch('deleteCart', gpu)"
            id="cartDeleteBtn"
          >
            Delete Item
          </button>
        </div>
        <div class="mt-1">
          <span>Total Price is R {{ total }}</span>
        </div>
        <button @click="this.$store.dispatch('clearCart')" id="cartClear">Clear Cart</button>
      </div>
      <div v-else>Nothing</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["gpu_id"],
  computed: {
    gpuCart() {
      return this.$store.state.cart;
    },
    total() {
      let prices = this.$store.state.cart;
      if (prices != null) {
        let sum = prices.reduce((x, cart) => {
          return x + parseInt(cart.price);
        }, 0);
        return parseInt(sum);
      }
    },
  },
};
</script>

<style>
#cart {
  background: var(--background-main);
  color: #efefef;
}
.card {
  background: var(--background-main);
  color: #efefef;
}
#cartDeleteBtn {
  background-image: linear-gradient(144deg, #df40ff, #5b42f3 50%, #00ddeb);
  color: #efefef;
  width: 150px;
  border-radius: 25px;
  align-self: center;
  transition: linear 0.6s;
}
#cartDeleteBtn:hover {
  transform: scale(1.07);
}
#cartClear{
  background-image: linear-gradient(144deg, #df40ff, #5b42f3 50%, #00ddeb);
  color: #efefef;
  width: 150px;
  border-radius: 25px;
  align-self: center;
  margin: 7px 0 0 0;
}
</style>