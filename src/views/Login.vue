<template>
  <div class="about">
    <h2 class="subtitle mb-4">LOGIN</h2>
    <div class="container">
      <div class="row">
        <div class="col-md"></div>
        <div class="col-md-6 d-flex justify-content-center">
          <div class="transparent-box with-shadow compact rounded-40">
            <form @submit.prevent="handleSubmit">
              <div class="form-group mb-3">
                <label for="exampleInputEmail1" class="text-left mb-0">Email</label>
                <input type="text" class="form-control rounded-40" id="exampleInputEmail1" placeholder="Enter email address" v-model="formData.email" required />
              </div>
              <div class="form-group position-relative mb-3">
                <label for="exampleInputPassword1" class="text-left mb-0">Password</label>
                <input :type="showPassword ? 'text' : 'password'" class="form-control rounded-40" id="exampleInputPassword1" placeholder="Enter password" v-model="formData.password" required />
                <i @click="togglePasswordVisibility" class="toggle-password fas" :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
              </div>
              <div class="form-group form-check mb-3">
                <input type="checkbox" id="rememberMe" class="form-check-input" />
                <label for="rememberMe" class="form-check-label">Remember me</label>
                <a href="#" class="forget-password">Forgot password?</a>
              </div>
              <button type="submit" class="btn btn-primary btn-block rounded-40">LOGIN</button>
            </form>
          </div>
        </div>
        <div class="col-md"></div>
      </div>
    </div>
    <!-- Tactical Trainer is moved here -->
    <div class="row mt-4" style="position: absolute; bottom: 10px; width: 100%;">
      <div class="col-md"></div>
      <div class="col-md-6 text-center">
        <h1 class="title mb-0"><span class="blue">T</span>actical <span class="blue">T</span>rainer</h1>
      </div>
      <div class="col-md"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: '',
        password: ''
      },
      showPassword: false
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted with data:', this.formData);
      // Implement login logic here
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  }
};
</script>

<style scoped>
.about {
  position: relative;
  background-image: url('@/assets/pozadina1.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'mojFont', sans-serif;
}

.about::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.377); 
}

.title {
  font-size: 3rem;
  text-transform: uppercase;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.blue {
  color: #00adb5;
}

.subtitle {
  color: white;
  font-size: 2rem;
  margin-bottom: 10px;
  z-index: 2;
}

.transparent-box {
  background-color: rgba(128, 128, 128, 0.432);
  padding: 40px;
  border-radius: 40px; /* Dodan stil zaobljenih rubova */
}

.with-shadow {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.compact {
  max-width: 300px;
  width: 100%; /* Da bi se forma proširila u mobilnom prikazu */
}

.form-control {
  font-family: 'mojFont', sans-serif;
  font-size: 0.9rem;
}

.position-relative {
  position: relative;
}

.toggle-password {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #00adb5;
}

.toggle-password:hover {
  color: #000;
}

.btn-primary {
  background-color: #007d8a;
  border-color: #007d8a;
  margin-top: 10px;
  border-radius: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.btn-primary:hover {
  background-color: #00566b;
  border-color: #00566b;
}

.forget-password {
  color: #d4af37;
  font-size: 0.8rem;
  text-align: right;
  display: block;
  margin-top: 5px;
  text-decoration: none;
}

.forget-password:hover {
  text-decoration: underline;
}

.form-check-label {
  color: white;
  font-size: 0.9rem;
}

.text-left {
  text-align: left;
}

.rounded-40 {
  border-radius: 40px;
}

@media (max-width: 768px) {
  .compact {
    padding: 20px; /* Manji padding u mobilnom prikazu */
  }
}
</style>
