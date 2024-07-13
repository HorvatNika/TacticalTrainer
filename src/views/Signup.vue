<template>
  <div class="about">
    <h2 class="subtitle">SIGNUP</h2>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 d-flex justify-content-center">
          <div class="transparent-box with-shadow rounded-40 expanded-width">
            <form @submit.prevent="handleSubmit">

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="exampleInputName" class="text-left">Name</label>
                    <input type="text" class="form-control rounded-40" id="exampleInputName" placeholder="Enter name" v-model="formData.name" required />
                  </div>

                  <div class="form-group">
                    <label for="exampleInputSurname" class="text-left">Surname</label>
                    <input type="text" class="form-control rounded-40" id="exampleInputSurname" placeholder="Enter surname" v-model="formData.surname" required />
                  </div>

                  <div class="form-group">
                    <label for="exampleGender" class="text-left">Gender</label>
                    <select class="form-control rounded-40" id="exampleGender" v-model="formData.gender" required>
                      <option value="">Choose gender</option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="exampleNationality" class="text-left">Nationality</label>
                    <select class="form-control rounded-40" id="exampleNationality" v-model="formData.nationality" required>
                      <option value="">Choose nationality</option>
                      <option value="american">American</option>
                      <option value="british">British</option>
                      <option value="croatian">Croatian</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label for="exampleInputPassword1" class="text-left">Password</label>
                    <input :type="showPassword ? 'text' : 'password'" class="form-control rounded-40" id="exampleInputPassword1" placeholder="Enter password" v-model="formData.password" required />
                    <i @click="togglePasswordVisibility" class="toggle-password fas" :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputPassword2" class="text-left">Confirm Password</label>
                    <input type="password" class="form-control rounded-40" id="exampleInputPassword2" placeholder="Confirm password" v-model="formData.confirmPassword" required />
                  </div>
                </div>
              </div>

              <div class="form-group form-check d-flex align-items-center">
                <input type="checkbox" class="form-check-input" id="showPassword" v-model="showPassword">
                <label class="form-check-label" for="showPassword">Show password</label>
              </div>

              <button type="submit" class="btn btn-primary btn-block rounded-40">REGISTER</button>

            </form>
          </div>
        </div>
      </div>

      <div class="row mt-4 justify-content-center">
        <div class="col-lg-6 d-flex justify-content-center">
          <div class="transparent-box with-shadow rounded-40 expanded-width">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="exampleInputRank" class="text-left">Rank</label>
                  <select class="form-control rounded-40" id="exampleInputRank" v-model="formData.rank" required>
                    <option value="">Choose rank</option>
                    <option value="captain">Captain</option>
                    <option value="corporal">Corporal</option>
                    <option value="lieutenant">Lieutenant</option>
                    <option value="private">Private</option>
                    <option value="sergeant">Sergeant</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="exampleInputUnit" class="text-left">Unit</label>
                  <select class="form-control rounded-40" id="exampleInputUnit" v-model="formData.unit" required>
                    <option value="">Choose unit</option>
                    <option value="armor">Armor</option>
                    <option value="aviation">Aviation</option>
                    <option value="infantry">Infantry</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="row mt-4 expanded-width justify-content-center">
      <div class="col-lg-6 text-center">
        <h1 class="title mb-0"><span class="blue">T</span>actical <span class="blue">T</span>rainer</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        surname: '',
        gender: '',
        nationality: '',
        rank: '',
        unit: '',
        password: '',
        confirmPassword: ''
      },
      showPassword: false
    };
  },
  methods: {
    handleSubmit() {
      if (this.formData.password !== this.formData.confirmPassword) {
        alert("Passwords do not match");
      } else {
        console.log('Form submitted with data:', this.formData);
      }
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
  margin-top: 20px; 
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
  top: 50%;
  right: 15px;
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
  margin-top: 20px;
  border-radius: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  padding: 10px 30px;
}

.btn-primary:hover {
  background-color: #00566b;
  border-color: #00566b;
}

.placeholder-text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 15px;
  color: #ced4da;
  pointer-events: none;
  transition: top 0.3s, transform 0.3s, color 0.3s;
  font-size: 0.9rem;
}

.form-control:focus + .placeholder-text,
.form-control:not(:placeholder-shown) + .placeholder-text {
  top: 0;
  transform: translateY(0);
  font-size: 0.75rem;
  color: #6c757d;
}

.expanded-width {
  width: 100%; 
  max-width: 460px; 
}
</style>