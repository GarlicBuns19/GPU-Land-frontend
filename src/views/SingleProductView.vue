<template>
  <div v-if="singleGraphic">
    <div class="container py-5">
      <div class="row">
        <div class="col-md-6">
          <img :src="singleGraphic[0].gpuFront_Img" alt="" class="img-fluid" />
          <div class="row">
            <div class="col" v-if="singleGraphic[0].gpuTop">
              <img
                :src="singleGraphic[0].gpuTop"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="col" v-if="singleGraphic[0].gpuBack">
              <img
                :src="singleGraphic[0].gpuBack"
                alt=""
                class="img-fluid size"
              />
            </div>
            <div class="col" v-if="singleGraphic[0].gpuBottom">
              <img
                :src="singleGraphic[0].gpuBottom"
                alt=""
                class="img-fluid size"
              />
            </div>
            <div v-if="singleGraphic[0].gpuIo" class="col">
              <img
                :src="singleGraphic[0].gpuIo"
                alt=""
                class="img-fluid size"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h1>
            {{ singleGraphic[0].gpuNoA }} {{ singleGraphic[0].gpuNrAr }}
            {{ singleGraphic[0].gpuGen }}
          </h1>
          <h2>
            {{ singleGraphic[0].memoryGb }} GB ,
            {{ singleGraphic[0].memoryType }} ,
            {{ singleGraphic[0].memoryBit }} Bit
          </h2>
          <h2>{{ singleGraphic[0].gpuChip }} Chip</h2>
          <h3>{{ singleGraphic[0].gpuClock }} mhz</h3>
          <h3>{{ singleGraphic[0].memoryClock }} mhz</h3>
          <h2>Released in {{ singleGraphic[0].released }}</h2>
          <h2>R {{ singleGraphic[0].price }}</h2>
        </div>
      </div>
      <button @click="this.$store.dispatch('addCart', singleGraphic[0])">
        Add to cart
      </button>
    </div>
  </div>
  <div v-else>Nothing to look at</div>
</template>
  <script>
export default {
  mounted() {
    this.$store.dispatch("fetchSingleGraphic", this.$route.params.id);
  },
  computed: {
    singleGraphic() {
      return this.$store.state.singleGraphic;
    },
  },
};
</script>
  <style scoped>
img {
  border-radius: 10px;
  object-fit: cover;
}
.size{
  width: 150px;
  height: 150px;
}
.col {
    flex: 1 0 0%;
    padding: 2rem 0 0 1rem;
    display: flex;
    flex-wrap: nowrap;
}
</style>
