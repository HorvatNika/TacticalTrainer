<template>
    <div class="about">
      <h1>TACTICAL TRAINER</h1>
      <h1>SIGNUP</h1>
      <div class="container">
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-sm">
            <form @submit.prevent="handleSubmit">
  
              <div class="form-group">
                <label for="exampleInputName">Name</label>
                <input type="text" class="form-control" id="exampleInputName" placeholder="Enter name" v-model="formData.name" required />
              </div>
  
              <div class="form-group">
                <label for="exampleInputSurname">Surname</label>
                <input type="text" class="form-control" id="exampleInputSurname" placeholder="Enter surname" v-model="formData.surname" required />
              </div>
  
              <div class="form-group">
                <label for="exampleGender">Gender</label>
                <select class="form-control" id="exampleGender" v-model="formData.gender" required>
                  <option value="">Choose gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>
  
              <div class="form-group">
                <label for="exampleNationality">Nationality</label>
                <select class="form-control" id="exampleNationality" v-model="formData.nationality" required>
                  <option value="">Choose nationality</option>
                  <option value="american">American</option>
                  <option value="british">British</option>
                  <option value="croatian">Croatian</option>
                </select>
              </div>
  
              <div class="form-group">
                <label for="exampleInputRank">Rank</label>
                <select class="form-control" id="exampleInputRank" v-model="formData.rank" required>
                  <option value="">Choose rank</option>
                  <option value="captain">Captain</option>
                  <option value="corporal">Corporal</option>
                  <option value="lieutenant">Lieutenant</option>
                  <option value="private">Private</option>
                  <option value="sergeant">Sergeant</option>
                </select>
              </div>
  
              <div class="form-group">
                <label for="exampleInputUnit">Unit</label>
                <select class="form-control" id="exampleInputUnit" v-model="formData.unit" required>
                  <option value="">Choose unit</option>
                  <option value="armor">Armor</option>
                  <option value="aviation">Aviation</option>
                  <option value="infantry">Infantry</option>
                </select>
              </div>
  
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email address" v-model="formData.email" required />
              </div>
  
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input :type="showPassword ? 'text' : 'password'" class="form-control" id="exampleInputPassword1" placeholder="Enter password" v-model="formData.password" required />
              </div>
  
              <div class="form-group">
                <label for="exampleInputPassword2">Confirm Password</label>
                <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Confirm password" v-model="formData.confirmPassword" required />
              </div>
  
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="showPassword" v-model="showPassword">
                <label class="form-check-label" for="showPassword">Show password</label>
              </div>
  
              <button type="submit" class="btn btn-primary">REGISTER</button>
  
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
          name: '',
          surname: '',
          gender: '',
          nationality: '',
          rank: '',
          unit: '',
          email: '',
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
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  