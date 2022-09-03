<template>
  <div class="container">
    <div v-if="graphics" class="row">
      <div
        class="col-md-6 col-lg-4"
        v-for="graphic in graphics"
        :key="graphic.gpu_id"
      >
        <div class="card my-3">
          <img :src="graphic.gpuFront_Img" alt="..." class="img-fluid" />
          <div class="card-body">
            <h3 class="card-title">
              {{ graphic.gpuNoA }} {{ graphic.gpuNrAr }} {{ graphic.gpuGen }}
              {{ graphic.gpuChip }}
            </h3>
            <h3>Year {{ graphic.released }}</h3>
            <p>
              {{ graphic.memoryGb }} GB , {{ graphic.memoryType }} ,
              {{ graphic.memoryBit }} Bit
            </p>
            <p class="card-text">
              {{ graphic.gpuClock }} mhz {{ graphic.memoryClock }} mhz
            </p>
            <router-link
              id="viewGpuBtn"
              :to="{ name: 'singleProduct', params: { id: graphic.gpu_id } }"
            >
              <button id="viewBtn">
                <span>View Gpu</span>
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <!-- <div class="loader loader--style5" title="4">
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
        </div> -->
      <div id="load">
        <img
          src="https://i.postimg.cc/fWGTjSPh/graphics-card-removebg-preview-1-removebg-preview.png"
          alt=""
          class="img-fluid"
          id="load1"
        />
        <img
          src="https://i.postimg.cc/jj1c6hh6/logo-fan.png"
          alt=""
          class="img-fluid"
          id="load2"
        />
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
/* .loader {
    margin: 0 0 2em;
    height: 100px;
    width: 20%;
    text-align: center;
    padding: 1em;
    margin: 0 auto 1em;
    display: inline-block;
    vertical-align: top;
  }
  Set the color of the icon
  svg path,
  svg rect {
    fill: var(--eletric-blue);
  } */
.card {
  background-color: rgb(252, 252, 252);
  border-radius: 30px;
}
#load {
  position: relative;
}
#load1 {
  width: 100px;
  height: 100px;
}
#load2 {
  position: absolute;
  width: 40px;
  height: 40px;
  top: 27.5px;
  left: 50.2%;
  animation: rotation 3s infinite linear;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
#viewGpuBtn {
  /* position: relative; */
  text-decoration: none;
}
#viewBtn {
    margin: 0 0 0 120px;
}
/* View Btn */
button {
  align-items: center;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 18px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s;
}
button:active,
button:hover {
  outline: 0;
}
button span {
  background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}
button:hover span {
  background: none;
}

button:active {
  transform: scale(0.9);
}
img {
  padding: 5px;
  /* height: 210px; */
  border-radius: 30px;
  /* scale: 0.5; */
  /* object-fit: cover; */
}
.card-body {
  /* padding: 50px; */
  border-radius: 5px solid;
}
</style>
