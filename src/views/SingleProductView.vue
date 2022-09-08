<template>
  <div v-if="singleGraphic">
    <div class="container py-5">
      <div class="row">
        <div class="col-md-6">
          <img :src="singleGraphic[0].gpuFront_Img" alt="" class="img-fluid" />
          <div class="row">
            <div class="col" v-if="singleGraphic[0].gpuTop">
              <img :src="singleGraphic[0].gpuTop" alt="" class="img-fluid" />
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
        <div class="col-md-6" id="info">
          <!-- Graphic Name -->
          <div class="row">
            <div class="col-6 col-md-6">
              <h2>Graphic Card :</h2>
            </div>
            <div class="col-6 col-md-6">
              <h2>
                {{ singleGraphic[0].gpuNoA }} {{ singleGraphic[0].gpuNrAr }}
                {{ singleGraphic[0].gpuGen }}
              </h2>
            </div>
          </div>
          <!-- Video Ram -->
          <div class="row">
            <div class="col-6 col-md-6">
              <h2>Video Ram :</h2>
            </div>
            <div class="col-6 col-md-6">
              <h2>
                {{ singleGraphic[0].gpuNoA }} {{ singleGraphic[0].gpuNrAr }}
                {{ singleGraphic[0].gpuGen }}
              </h2>
            </div>
          </div>
          <!-- Bus Size -->
          <div class="row">
            <div class="col-6 col-md-6">
              <h2>Bus Size :</h2>
            </div>
            <div class="col-6 col-md-6">
              <h2>{{ singleGraphic[0].memoryBit }} Bit</h2>
            </div>
          </div>
          <!-- Chip -->
          <div class="row">
            <div class="col-6 col-md-6">
              <h2>Chip :</h2>
            </div>
            <div class="col-6 col-md-6">
              <h2>{{ singleGraphic[0].gpuChip }} Chip</h2>
            </div>
          </div>
          <!-- MHZ GPU CLOCK -->
          <div class="row">
            <div class="col-6 col-md-6">
              <h2>GPU Clock :</h2>
            </div>
            <div class="col-6 col-md-6">
              <h2>{{ singleGraphic[0].gpuClock }} mhz</h2>
            </div>
          </div>
          <!-- MHZ Memory CLOCK -->
          <div class="row">
            <div class="col-6 col-md-6">
              <h2>GPU Clock :</h2>
            </div>
            <div class="col-6 col-md-6">
              <h2>{{ singleGraphic[0].memoryClock }} mhz</h2>
            </div>
          </div>
          <!-- Released -->
          <div class="row">
            <div class="col-6 col-md-6">
              <h2>Year :</h2>
            </div>
            <div class="col-6 col-md-6">
              <h2>Released in {{ singleGraphic[0].released }}</h2>
            </div>
          </div>
          <!-- price -->
          <div class="row">
            <div class="col-6 col-md-6">
              <h2>Price :</h2>
            </div>
            <div class="col-6 col-md-6">
              <h2>R {{ singleGraphic[0].price }}</h2>
            </div>
          </div>
      <button
        class="btn btn-primary"
        type="button"
        @click="this.$store.dispatch('addCart', singleGraphic[0])"
        id="addCartBtn"
      >
        Add to cart
      </button>
        </div>
      </div>
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
.size {
  width: 150px;
  height: 150px;
}
.col {
  flex: 1 0 0%;
  padding: 2rem 0 0 1rem;
  display: flex;
  flex-wrap: nowrap;
}
#info {
  margin: 20px 0 0 0;
  color: #efefef;
}
/* #info .row {
  border-bottom: 2px solid;
  animation: rgb 7s infinite;
}
@keyframes rgb {
  13.3% {
    border-bottom: 2px solid #df40ff;
  }
  33.6% {
    border-bottom: 2px solid #5b42f3;
  }
  54% {
    border-bottom: 2px solid #00ddeb;
  }
} */
#addCartBtn {
  margin: 30px 0 0;
  background-image: linear-gradient(144deg, #df40ff, #5b42f3 50%, #00ddeb);
  color: #efefef;
  transition: linear 0.6s;
}
#addCartBtn:hover {
  transform: scale(1.07);
}
</style>
