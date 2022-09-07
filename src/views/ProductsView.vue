<template>
    <button @click="gb">GB</button>
    <button @click="year">Year</button>
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
  methods : {
    year() {
        let gpus = this.$store.state.graphics;
        gpus.sort((a,b) => {
            if(a.released - b.released){
                return -1
            }
        })
    },
    gb() {
        let gpus = this.$store.state.graphics;
        gpus.sort((a,b) => {
            if(a.memoryGb - b.memoryGb){
                return -1
            }
        })
    }
  }
};
</script>
  <style scoped>
.card {
  background-color: rgba(0, 0, 0, 0.144);;
  color: #efefef;
  border: 2px solid;
  border-radius: 20px;
  animation: rgb 7s infinite;
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
  width: 45px;
  height: 45px;
  top: 25.9px;
  left: 49.9%;
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
  border-radius: 10px;
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
  transition: all 0.7s;
}
button:active,
button:hover {
  outline: 0;
  transform: scale(1.1);
}
button span {
  background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}
/* button:hover span {
  background: none;
} */

button:active {
  transform: scale(0.9);
}
img {
  padding: 10px;
  height: 210px;
  border-radius: 30px;
}
.card-body {
  /* padding: 50px; */
  border-radius: 5px solid;
}
@keyframes rgb {
  /* 0%  { color: #efefef; } */
  13.3% {
    border:2px solid #df40ff;
  }
  33.6% {
    border:2px solid #5b42f3;
  }
  54% {
    border:2px solid #00ddeb;
  }
}
</style>
