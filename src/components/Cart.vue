<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="cart"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">Offcanvas right</h5>
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
          <h1>
            {{ gpu.gpuNoA }} {{ gpu.gpuNrAr }} {{ gpu.gpuGen }}
            {{ gpu.gpuChip }}
          </h1>
          <button @click="this.$store.dispatch('deleteCart',gpu)">Delete Item</button>
        </div>
        <button @click="this.$store.dispatch('clearCart')">Clear Cart</button>
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
  },
};
</script>

<style>
</style>