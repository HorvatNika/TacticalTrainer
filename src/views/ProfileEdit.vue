<template>
    <div class="about">
      <div class="overlay"></div>
      <h2 class="subtitle">EDIT PROFILE</h2>
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
  
                    <div class="form-group">
                      <label for="exampleInputUnit" class="text-left">Unit</label>
                      <select class="form-control rounded-40" id="exampleInputUnit" v-model="formData.unit" required>
                        <option value="">Choose unit</option>
                        <option value="armor">Armor</option>
                        <option value="aviation">Aviation</option>
                        <option value="infantry">Infantry</option>
                      </select>
                    </div>
  
                    <div class="form-group position-relative">
                      <label for="newPassword" class="text-left">New Password<span class="toggle-password" @click="togglePasswordVisibility">?</span></label>
                      <input :type="showPassword ? 'text' : 'password'" class="form-control rounded-40" id="newPassword" placeholder="Enter new password" v-model="formData.newPassword" />
                      <div v-if="showPasswordHint" class="password-hint">
                        Password must contain at least one uppercase letter, one number, and be at least 5 characters long.
                      </div>
                    </div>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary btn-block rounded-40">SAVE CHANGES</button>
              </form>
            </div>
          </div>
        </div>
  
        <div class="row mt-4 justify-content-center">
          <div class="col-lg-6 text-center">
            <h1 class="title mb-0"><span class="blue">T</span>ACTICAL <span class="blue">T</span>RAINER</h1>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { getAuth, updateProfile, updatePassword } from 'firebase/auth';
  import { doc, getDoc, updateDoc } from 'firebase/firestore';
  import db from 'src/main';
  
  export default {
    name: "ProfileEdit",
    data() {
      return {
        formData: {
          name: '',
          gender: '',
          nationality: '',
          rank: '',
          unit: '',
          newPassword: ''
        },
        showPassword: false,
        showPasswordHint: false
      };
    },
    created() {
      this.fetchProfileData();
    },
    methods: {
      async fetchProfileData() {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const data = userDoc.data();
            this.formData.name = data.name;
            this.formData.gender = data.gender;
            this.formData.nationality = data.nationality;
            this.formData.rank = data.rank;
            this.formData.unit = data.unit;
          }
        }
      },
      async handleSubmit() {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
          try {
            await updateProfile(user, { displayName: this.formData.name });
  
            await updateDoc(doc(db, 'users', user.uid), {
              name: this.formData.name,
              gender: this.formData.gender,
              nationality: this.formData.nationality,
              rank: this.formData.rank,
              unit: this.formData.unit
            });
  
            if (this.formData.newPassword) {
              await updatePassword(user, this.formData.newPassword);
            }
  
            this.$router.push('/profile');  
          } catch (error) {
            console.error("Error updating profile:", error);
          }
        }
      },
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
        this.showPasswordHint = !this.showPasswordHint;
      }
    }
  };
  </script>
  
  <style scoped>
  .about {
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
    font-size: 3rem;
    opacity: 50%;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 2; 
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
    border-radius: 100px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 2; 
  }
  
  .form-control {
    font-family: 'mojFont', sans-serif;
    font-size: 0.9rem;
    border-radius: 40px;
  }
  
  .position-relative {
    position: relative;
  }
  
  .text-left {
    position: relative;
    left: 13px;
    text-align: left;
    display: block;
  }
  
  .toggle-password {
    position: absolute;
    top: 50%;
    right: 40%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #d4af37;  
  }
  
  .toggle-password:hover {
    color: #d4af37;
  }
  
  .btn-primary {
    background-color: #007c8a64;
    border-color: #007c8a64;
    margin-top: 20px;
    border-radius: 40px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    padding: 10px 30px;
    border: none;
  }
  
  .btn-primary:hover {
    text-decoration: none;
    border: none;
    background-color: #007c8a89;
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
  
  .is-valid {
    border-color: #28a745 !important;
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 105, 0.5); 
  }
  
  .password-hint {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 20px;
    border-radius: 15px;
    font-size: 0.8rem;
    display: none;
    z-index: 2; 
  }
  
  .position-relative:hover .password-hint {
    display: block;
  }
  
  .error-message {
    color: #dc3545;
    font-size: 0.8rem;
    margin-top: 5px;
    z-index: 2; 
  }
  </style>
  