<template>
  <div class="login">
    <div class="overlay"></div>
    <h2 class="subtitle">LOGIN</h2>
    <div class="container">
      <div class="row">
        <div class="col-md"></div>
        <div class="col-md-6 d-flex justify-content-center">
          <div class="transparent-box with-shadow compact rounded-40">
            
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="email" class="text-left">Email</label>
                <input
                  type="email"
                  class="form-control rounded-40"
                  id="email"
                  placeholder="Enter email address"
                  v-model="formData.email"
                  required
                />
              </div>
              
              <div class="form-group position-relative">
                <label for="exampleInputPassword1" class="text-left">Password</label>
                <input
                  :type="showPassword ? 'text' : 'password'"
                  class="form-control rounded-40"
                  id="exampleInputPassword1"
                  placeholder="Enter password"
                  v-model="formData.password"
                  required
                />
                <i
                  @click="togglePasswordVisibility"
                  class="toggle-password fas"
                  :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"
                ></i>
              </div>

              <div class="form-group">
                <a href="#" @click.prevent="handleForgotPassword" class="forget-password">Forgot password?</a>
              </div>

              <div class="form-group form-check d-flex align-items-center remember-me">
                <label class="form-check-label" for="rememberMe">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    class="form-check-input"
                    v-model="rememberMe"
                  />
                  <span class="checkmark"></span>
                  Remember me
                </label>
              </div>
              <button type="submit" class="btn btn-primary rounded-40">
                LOGIN
              </button>
            </form>
          </div>
        </div>
        <div class="col-md"></div>
      </div>
    </div>

    <div class="bottom-title">
      <h1 class="title mb-0">
        <span class="blue">T</span>ACTICAL <span class="blue">T</span>RAINER
      </h1>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import router from 'src/router/index';

export default {
  name: 'Login',
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
      showPassword: false,
      firebaseError: null,
    };
  },
  methods: {
    async handleSubmit() {
      this.firebaseError = null;

      signInWithEmailAndPassword(getAuth(), this.formData.email, this.formData.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('User signed in:', user);
          router.push('/menu')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Error logging in:', errorCode, errorMessage);
        });
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    async handleForgotPassword() {
      try {
        const auth = getAuth();
        await sendPasswordResetEmail(auth, this.formData.email);
        alert('Password reset email sent. Please check your inbox.');
      } catch (error) {
        console.error('Error sending password reset email:', error);
        alert('Error sending password reset email. Please try again later.');
      }
    }
  }
};
</script>


<style scoped>
.login {
  position: relative;
  background-image: url('@/assets/pozadina.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.85); 
  font-family: 'mojFont', sans-serif;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px); 
  z-index: 1;
}

.title {
  font-size: 3em;
}

.blue {
  color: #00adb5;
}

.subtitle {
  color: rgba(255, 255, 255, 0.85); 
  font-size: 2.5rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
  z-index: 2; 
}

.transparent-box {
  background-color: rgba(0, 0, 0, 0.20);
  padding: 40px;
  border-radius: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 2; 
}

.compact {
  max-width: 300px;
  width: 100%;
}

.form-control {
  font-family: 'mojFont', sans-serif;
  font-size: 0.9rem;
  border-radius: 40px;
}

.position-relative {
  position: relative;
}

.toggle-password {
  position: absolute;
  top: 70%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #007c8a64;
}

.toggle-password:hover {
  color: #007c8a89;
}

.btn-primary {
  background-color: #007c8a64;
  border-radius: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  padding: 10px 30px;
  font-size: 16px;
  text-align: center;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: background-color 0.3s;
  margin: 4px 2px;
  z-index: 2; 
  border: none;
}

.btn-primary:hover {
  text-decoration: none;
  border: none;
  background-color: #007c8a89;
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
  text-decoration: none;
  color: #d4af37; 
}

.form-check-label {
  color: rgba(255, 255, 255, 0.85); 
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
  background-color: #007c8a85;
  border-radius: 50%;
  margin-right: -7px;
}

.form-check-label:hover .checkmark {
  background-color: #007c8a85;
}

.form-check-input {
  display: none;
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
  background-color: rgba(255, 255, 255, 0.85);
}

.text-left {
  position: relative;
  left: 13px;
  text-align: left;
  display: block;
}

.bottom-title {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
  opacity: 50%;
  z-index: 2; 
}
</style>
