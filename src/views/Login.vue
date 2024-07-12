<template>
  <div class="about">
    <h1 class="title"><span class="blue">T</span>actical <span class="blue">T</span>rainer</h1>
    <h2 class="subtitle">LOGIN</h2>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email address" v-model="formData.email" required />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input :type="showPassword ? 'text' : 'password'" class="form-control" id="exampleInputPassword1" placeholder="Enter password" v-model="formData.password" required />
              <small class="form-text text-muted forget-password">
                <a href="#">Forget password?</a>
              </small>
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="showPassword" v-model="showPassword">
              <label class="form-check-label" for="showPassword">Show password</label>
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="rememberMe" v-model="formData.rememberMe">
              <label class="form-check-label" for="rememberMe">Remember me</label>
            </div>
            <button type="submit" class="btn btn-primary">LOGIN</button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: '',
        password: '',
        rememberMe: false
      },
      showPassword: false
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted with data:', this.formData);
    }
  }
};
</script>

<style scoped>
.about {
  background-image: url('@/assets/pozadina1.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.8; 
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'mojFont', sans-serif;
}

.title {
  font-size: 3rem;
  text-transform: uppercase;
}

.blue {
  color: #00adb5;
}

.subtitle {
  color: white;
  font-size: 2rem;
  margin-bottom: 30px;
}

.form-control {
  font-family: 'mojFont', sans-serif; 
}
</style>
