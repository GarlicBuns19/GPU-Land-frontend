<template>
  <h1>GPU Land</h1>
  <!-- <img src="https://i.postimg.cc/CxHXhbJw/graphics-card-removebg-preview.png" alt="" class="img-fluid"> -->
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://i.postimg.cc/63ZSjQFc/c3.jpg"
          class="carouselImg"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://i.postimg.cc/d0LgC6Bz/c4.jpg"
          class="carouselImg"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://i.postimg.cc/VLmTgmg9/c2.png"
          class="carouselImg"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <section id="products">
    <div v-if="graphics">
      <h2>Check out our Graphic Cards</h2>
      <h3>While Stock last !</h3>
    </div>
    <div class="container">
      <div v-if="graphics" class="row">
        <div
          class="col-md-6 col-lg-4"
          v-for="graphic in graphics"
          :key="graphic.gpu_id"
        >
          <div class="card my-3">
            <div class="card-body">
              <router-link
                id="viewGpuBtn"
                :to="{ name: 'singleProduct', params: { id: graphic.gpu_id } }"
              >
                <img :src="graphic.gpuFront_Img" alt="..." class="img-fluid" />
              </router-link>
              <h3 class="card-title">
                {{ graphic.gpuNoA }} {{ graphic.gpuNrAr }} {{ graphic.gpuGen }}
              </h3>
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
        <h1>Loading...</h1>
      </div>
    </div>
  </section>
  <section id="about">
    <h2>What we do</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit minus
      veniam facere molestiae libero repudiandae officiis maxime quam fugiat
      eius consectetur id deleniti sit quibusdam enim, a veritatis omnis ipsam.
    </p>
  </section>
</template>
<script>
import products from "@/views/ProductsView.vue";

export default {
  components: {
    products,
  },
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
h1 {
  color: #efefef;
  margin: 10px 0;
}
h2 {
  color: #efefef;
  margin: 10px 0;
}
h3 {
  color: #efefef;
  margin: 10px 0;
}
.carouselImg {
  width: 75%;
  height: 500px;
  aspect-ratio: 2;
}
img {
  padding: 5px;
  height: 210px;
  border-radius: 30px;
  aspect-ratio: 2;
}
.card-body {
  /* padding: 50px; */
  border-radius: 5px solid;
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
.card {
  background: rgba(0, 0, 0, 0.144);
  color: #efefef;
  border: 2px solid;
  border-radius: 20px;
  animation: rgb 7s infinite;
}
.card-title {
  margin: 10px 0;
}
@keyframes rgb {
  /* 0%  { color: #efefef; } */
  13.3% {
    border: 2px solid #df40ff;
  }
  33.6% {
    border: 2px solid #5b42f3;
  }
  54% {
    border: 2px solid #00ddeb;
  }
}
</style>
