<template>
  <div class="profile">
    <div class="overlay"></div>
    <h2 class="subtitle">PROFILE - {{ profileName }}</h2>
    <div class="container">
      <div class="row">
        <div class="col-md d-flex justify-content-center align-items-center position-relative">
          <div 
            class="circle" 
            @click="openOptions" 
            :style="{ backgroundImage: profileImage ? `url(${profileImage})` : 'none' }"
          >
            <input 
              type="file" 
              ref="fileInput" 
              style="display: none" 
              @change="handleFileChange" 
              accept="image/*"
            />
            <div v-if="profileImage || showOptions" class="options-menu" v-show="showOptions">
              <button v-if="profileImage" @click="triggerFileInput">Change Image</button>
              <button @click="removeImage">Remove Image</button>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex justify-content-center">
          <div class="transparent-box">
            <p>Name: {{ profileName }}</p>
            <p>Email: {{ profileEmail }}</p>
            <hr>
            <p>Gender: {{ profileGender }}</p>
            <p>Nationality: {{ profileNationality }}</p>
            <hr>
            <p>Rank: {{ profileRank }}</p>
            <p>Unit: {{ profileUnit }}</p>
            <button class="edit-profile-btn" @click="editProfile">EDIT PROFILE</button>
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
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import db from '@/main';

export default {
  name: 'Profile',
  data() {
    return {
      profileImage: '', 
      profileEmail: '',
      profileName: '',
      profileGender: '',
      profileNationality: '',
      profileRank: '',
      profileUnit: '',
      showOptions: false,
    };
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.profileEmail = user.email;
        this.fetchProfileData(user.uid);
      } else {
        console.log("User is signed out");
      }
    });
  },
  methods: {
    async fetchProfileData(uid) {
      try {
        const userDocRef = doc(db, 'users', uid);
        const userDoc = await getDoc(userDocRef);
        
        if (userDoc.exists()) {
          const userData = userDoc.data();
          this.profileName = userData.name;
          this.profileImage = userData.profileImage;
          this.profileGender = userData.gender;
          this.profileNationality = userData.nationality;
          this.profileRank = userData.rank;
          this.profileUnit = userData.unit;
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    async handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = async (e) => {
          this.profileImage = e.target.result;
          await this.uploadImage(file);
        };
        reader.readAsDataURL(file);
        this.showOptions = false;
      }
    },
    async uploadImage(file) {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        const storage = getStorage();
        const storageRef = ref(storage, `users/${user.uid}/profile.jpg`);

        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        this.profileImage = downloadURL;

        await this.updateProfileImage(downloadURL);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    },
    async updateProfileImage(imageUrl) {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        const userDocRef = doc(db, 'users', user.uid);
        await setDoc(userDocRef, { profileImage: imageUrl }, { merge: true });
      } catch (error) {
        console.error('Error updating profile image:', error);
      }
    },
    removeImage() {
      this.profileImage = '';
      this.showOptions = false;
    },
    openOptions() {
      if (this.profileImage) {
        this.showOptions = !this.showOptions;
        console.log("HAPPENED X1")
      } else {
        this.triggerFileInput();
        console.log("HAPPENED X2")
      }
    },
    editProfile() {
      this.$router.push('/ProfileEdit');
    }
  }
} 
</script>

<style scoped>
.profile {
  position: relative;
  background-image: url('@/assets/profilePozadina.jpg');
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

.title {
  font-size: 3rem;
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
  border-radius: 120px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 500px;
  height: 400px;
  z-index: 2;
  text-align: left;
  padding: 60px;
  position: relative;
}

.transparent-box p {
  margin: 0 0 10px;
}

.circle {
  width: 300px;
  height: 350px;
  background-color: rgba(0, 0, 0, 0.20);
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 2;
  transform: translateY(-70px);
  background-size: cover;
  background-position: center;
  cursor: pointer;
  position: relative;
}

.circle:hover {
  background-color: rgba(0, 0, 0, 0.30);
}

.options-menu {
  position: absolute;
  top: 102%; 
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 30px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  z-index: 3; 
  width: var(--options-menu-width, 150px); 
  height: var(--options-menu-height, auto);
}

.options-menu button {
  background: transparent;
  border: none;
  color: white;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  text-align: left;
}

.options-menu button:hover {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 17px;
}

.edit-profile-btn {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #007c8a64;
  color: white;
  border: none;
  border-radius: 40px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.edit-profile-btn:hover {
  background-color: #007c8a89;
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
