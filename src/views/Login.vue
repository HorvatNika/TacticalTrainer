<template>
  <div class="about">
    <h2 class="subtitle">LOGIN</h2>
    <div class="container">
      <div class="row">
        <div class="col-md"></div>
        <div class="col-md-6 d-flex justify-content-center">
          <div class="transparent-box with-shadow compact rounded-40">
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <!-- Primena stila za label za email -->
                <label for="email" class="text-left">Email</label>
                <input type="email" class="form-control rounded-40" id="email" placeholder="Enter email address" v-model="formData.email" required />
              </div>
              <div class="form-group position-relative">
                <!-- Primena stila za label za password -->
                <label for="exampleInputPassword1" class="text-left">Password</label>
                <input :type="showPassword ? 'text' : 'password'" class="form-control rounded-40" id="exampleInputPassword1" placeholder="Enter password" v-model="formData.password" required />
                <i @click="togglePasswordVisibility" class="toggle-password fas" :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
              </div>
              <div class="form-group">
                <a href="#" class="forget-password">Forgot password?</a>
              </div>
              <div class="form-group form-check d-flex align-items-center remember-me">
                <label class="form-check-label" for="rememberMe">
                  <input type="checkbox" id="rememberMe" class="form-check-input" v-model="rememberMe" />
                  <span class="checkmark"></span>
                  Remember me
                </label>
              </div>
              <button type="submit" class="btn btn-primary btn-block rounded-40">LOGIN</button>
            </form>
          </div>
        </div>
        <div class="col-md"></div>
      </div>
    </div>
    <div class="row mt-4" style="position: absolute; bottom: 10px; width: 100%;">
      <div class="col-sm"></div>
      <div class="col-sm-6 text-center">
        <h1 class="title mb-0"><span class="blue">T</span>actical <span class="blue">T</span>rainer</h1>
      </div>
      <div class="col-sm"></div>
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
      showPassword: false,
      rememberMe: false
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted with data:', this.formData);
      console.log('Remember me:', this.rememberMe);
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
  opacity: 0.7;
  min-height: 100vh;
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
  background-color: rgba(0, 0, 0, 0.37);
  padding: 40px;
  border-radius: 40px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.compact {
  max-width: 300px;
  width: 100%; 
}

.form-control {
  font-family: 'mojFont', sans-serif;
  font-size: 0.9rem;
  border-radius: 40px; /* Dodano za zaobljeni rub */
}

.position-relative {
  position: relative;
}

.toggle-password { /* NE DIRAJ OVO*/
  position: absolute;
  top: 70%;
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
  padding: 10px 30px;
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
  cursor: pointer;
  display: flex;
  align-items: center;
}

.remember-me .checkmark {
  display: inline-block;
  position: relative;
  left: -15px;
  height: 20px;
  width: 20px;
  background-color: #00adb5; /* Plava boja kružića */
  border-radius: 50%;
  margin-right: -7px; /* Razmak između kružića i teksta */
}

.form-check-label:hover .checkmark {
  background-color: #007d8a; /* Promjena boje na hover */
}

.form-check-input {
  display: none; /* Sakrij originalni checkbox */
}

.form-check-input:checked + .checkmark::after {
  content: '';
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: white;
}

.text-left {
  position: relative; /* Omogućava pomeranje pomoću 'left' */
  left: 15px; /* Pomeranje ulijevo */
  text-align: left; /* Poravnanje teksta ulijevo */
  display: block;
}
</style>
