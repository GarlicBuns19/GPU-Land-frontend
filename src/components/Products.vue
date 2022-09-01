<template>
  <div class="container">
    <div v-if="graphics" class="row">
      <div class="col-md-3" v-for="graphic in graphics" :key="graphic.gpu_id">
        <div class="card" style="width: 18rem">
          <img :src="graphic.gpuFront_Img" class="card-img-top" alt="..." />
          <div class="card-body">
            <h3 class="card-title">
              {{ graphic.gpuNoA }} {{ graphic.gpuNrAr }} {{ graphic.gpuGen }}
              {{ graphic.gpuChip }}
            </h3>
            <h3>Year {{ graphic.released }}</h3>
            <h3>
              {{ graphic.memoryGb }} GB , {{ graphic.memoryType }} ,
              {{ graphic.memoryBit }} Bit
            </h3>
            <p class="card-text">
              {{ graphic.gpuClock }} mhz {{ graphic.memoryClock }} mhz
            </p>
            <router-link
              :to="{ name: 'singleProduct', params: { id: graphic.gpu_id } }"
            >
              <button>View Gpu</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="loader loader--style5" title="4">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="24px"
          height="30px"
          viewBox="0 0 24 30"
          style="enable-background: new 0 0 50 50"
          xml:space="preserve"
        >
          <rect x="0" y="0" width="4" height="10" fill="#333">
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="translate"
              values="0 0; 0 20; 0 0"
              begin="0"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="10" y="0" width="4" height="10" fill="#333">
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="translate"
              values="0 0; 0 20; 0 0"
              begin="0.2s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="20" y="0" width="4" height="10" fill="#333">
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="translate"
              values="0 0; 0 20; 0 0"
              begin="0.4s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("fetchGraphics");
  },
  computed: {
    graphics() {
      return this.$store.state.graphics;
    },
  },
};
</script>
<style scoped>
.loader {
  margin: 0 0 2em;
  height: 100px;
  width: 20%;
  text-align: center;
  padding: 1em;
  margin: 0 auto 1em;
  display: inline-block;
  vertical-align: top;
}
/* Set the color of the icon */
svg path,
svg rect {
  fill: var(--eletric-blue);
}
</style>
