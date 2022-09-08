<template>
  <div id="about">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src="https://i.postimg.cc/D0wMC1XV/Raees.jpg" alt="raees" class="img-fluid"/>
        </div>
        <div class="col-md-6 pt-3">
          <h2>Ra'ees Benny</h2>
          <h3><span>Aspring Web Developer</span></h3>
          <p>Because I am passionate about computers, I decided to start an ecommerce store concerning Graphics Cards.</p>
          <p>A graphics card serves as a gaming system's eyes.</p>
          <p>It allows you to view excellent images with great performance.</p>
          <p>The Graphic Cards I sell are among the best—if not the very best—Graphic Cards that are currently available.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#about{
  color: #efefef;
}
span{
  animation: rgb 7s infinite;
}
.row{
  margin: 30px 0 0;
}
img {
  width: 350px;
  height: 500px;
  object-fit: cover;
  border-radius: 20px;
}
p{
  font-size: 22.6px;
}
@keyframes rgb {
  /* 0%  { color: #efefef; } */
  13.3% {
    color:#df40ff;
  }
  33.6% {
    color:#5b42f3;
  }
  54% {
    color:#00ddeb;
  }
}
</style>