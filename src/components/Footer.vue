<template>
  <div class="container" id="footer">
    <div class="row">
      <div class="col-md-4">
        <h4>About GPU Land</h4>
        <p>Cape Town WareHouse</p>
        <p>
          We pride ourselves on customer loyalty as a result of great pre & post
          sale service. All products are covered with warranty. Customer service
          is our goal.
        </p>
      </div>
      <div class="col-md-4">
        <h4>Social</h4>
        <p>
          Follow us and be the first to hear about exciting new Graphic Cards &
          promotions.
        </p>
        <a href="https://github.com/GarlicBuns19" target="_blank">
          <ion-icon name="logo-github" class="icon-size" id="icon"></ion-icon>
        </a>
        <a
          href="https://www.linkedin.com/in/ra-ees-benny-a915a923a/"
          target="_blank"
        >
          <ion-icon name="logo-linkedin" class="icon-size" id="icon"></ion-icon>
        </a>
        <a href="">
          <ion-icon name="logo-twitter" class="icon-size" id="icon"></ion-icon>
        </a>
        <a href="">
          <ion-icon name="logo-facebook" class="icon-size" id="icon"></ion-icon>
        </a>
      </div>
      <div class="col-md-4">
        <h4>Information</h4>
        <div id="info">
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Contact Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#footer {
  padding: 0 0 10px 0;
  color: hsl(0, 0%, 70%);
  text-align: left;
}
h4 {
  font-weight: 600;
}
p {
  font-weight: 400;
}
.icon-size {
  font-size: 2em;
  padding: 0 10px;
}
#footer a {
  color: var(--eletric-blue);
}
#icon {
  transition: 0.6s;
}
#icon:hover {
  transform: scale(1.3);
}
#info {
  display: block;
}
ul {
  margin: 0;
  padding: 0;
  display: block;
  list-style: none;
}
li {
  float: left;
  width: 40%;
  margin: 7px 0;
}
</style>