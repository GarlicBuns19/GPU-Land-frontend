<template>
  <section id="contact">
    <h2>Contact Us</h2>
    <form>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <label for="name">Name</label>
            <input
              type="name"
              class="form-control"
              id="name"
              placeholder="Fullname"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="email@example.com"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="phone">Phone Number</label>
            <input
              type="number"
              class="form-control"
              id="phone"
              placeholder="000-0000-000"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="message">Your Message</label>
            <textarea
              class="form-control"
              id="message"
              placeholder="What would you like to ask us ?"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>
      <button id="submit"
      class="btn btn-primary"
      >Submit</button>
    </form>
  </section>
</template>
<style scoped>
#contact{
    background-image:url(https://i.postimg.cc/Fzp5LLtL/bg.png) ;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 54.7vh;
}
h2{
    padding: 10px 0 0 0;
    color: #efefef;
}
label{
  font-size: 25px;
}
#contact label {
  margin: 10px 0 10px 0;
  color: #efefef;
}
#submit {
  background-image: linear-gradient(144deg, #df40ff, #5b42f3 50%, #00ddeb);
  color: #efefef;
  transition: linear 0.6s;
}
#submit:hover {
  transform: scale(1.07);
}
</style>