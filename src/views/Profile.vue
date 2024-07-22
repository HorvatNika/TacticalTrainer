<template>
  <div class="profile" @click="handleClickOutside">
    <div class="profile-title">
      <div class="rotated-text">PROFILE</div>
    </div>

    <div class="profile-picture-container">
      <div class="profile-picture" @click="handleProfileClick" ref="profilePicture">
        <div v-if="!profileImage" class="placeholder">Click to upload</div>
        <img v-else :src="profileImage" alt="Profile Picture" class="profile-image">
      </div>

      <div v-if="showMenu" class="options-menu" ref="menuContainer">
        <button @click.stop="changePicture" class="menu-item">Change Photo</button>
        <button @click.stop="removeImage" class="menu-item">Remove Photo</button>
      </div>
    </div>

    <input type="file" ref="fileInput" style="display: none" @change="handleFileChange">

    <div class="transparent-box"></div>
    <div class="transparent-box-2"></div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      profileImage: null,
      showMenu: false
    };
  },
  methods: {
    handleProfileClick(event) {
      event.stopPropagation(); 
      if (!this.profileImage) {
        this.openFilePicker();
      } else {
        this.showMenu = !this.showMenu; 
      }
    },
    openFilePicker() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.profileImage = reader.result;
          this.showMenu = false; 
        };
        reader.readAsDataURL(file);
      }
    },
    changePicture() {
      this.openFilePicker();
      this.showMenu = false;
    },
    removeImage() {
      this.profileImage = null;
      this.$refs.fileInput.value = null; 
      this.showMenu = false; 
    },
    handleClickOutside(event) {
      const menuContainer = this.$refs.menuContainer;
      const profilePicture = this.$refs.profilePicture;
      if (
        menuContainer && 
        !menuContainer.contains(event.target) && 
        !profilePicture.contains(event.target)
      ) {
        this.showMenu = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  }
};
</script>
<style scoped>
.profile {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background-image: url('@/assets/profilePozadina.jpg');
  background-size: cover;
  background-position: center;
  color: rgba(255, 255, 255, 0.85);
  font-family: 'mojFont', sans-serif;
  text-align: center;
  padding: 2rem;
  box-sizing: border-box;
}

.profile-title {
  position: absolute;
  font-size: 15rem;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
  transform: rotate(-90deg);
  bottom: 185px;
  left: -258px;
  opacity: 40%;
}

.profile-title::first-letter {
  color: #00adb5; 
}

.profile-picture-container {
  position: absolute;
  bottom: 38%;
  left: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-picture {
  position: relative; 
  width: 220px;
  height: 250px;
  bottom: 30px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.10); 
  cursor: pointer;
  border-radius: 48%;
  z-index: 1;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30%;
}

.options-menu {
  position: absolute;
  top: 93%;
  left: 50%;
  transform: translateX(-50%); 
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 10px;
  z-index: 1000;
  margin-top: 10px;
  display: flex;
  flex-direction: column; 
  gap: 10px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.menu-item {
  background: none;
  color: #fff;
  border: none;
  padding: 10px 20px; 
  cursor: pointer;
  text-align: center;
  font-size: 0.8rem;
  min-width: 120px; 
  max-width: 200px; 
  flex: none;
  white-space: nowrap; 
  border-radius: 30px; 
  transition: background-color 0.3s ease; 
}

.menu-item:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.placeholder svg {
  width: 100%;
  height: 100%;
}

.transparent-box {
  position: absolute;
  width: 450px;
  height: 300px;
  top: 20%;
  right: 25%;
  background-color: rgba(0, 0, 0, 0.10); 
  border-radius: 120px; 
  box-sizing: border-box;
}

.transparent-box::before, .transparent-box::after {
  content: '';
  position: absolute;
  background-color: rgba(255, 255, 255, 0.131); 
}

.transparent-box::before {
  border-top: 2px dashed rgba(255, 255, 255, 0.131); 
  width: 100%;
  height: 0;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.transparent-box::after {
  border-left: 2px dashed rgba(255, 255, 255, 0.131); 
  width: 0;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.transparent-box-2 {
  position: relative; 
  width: 250px;
  height: 270px;
  bottom: 266px;
  left: 254px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.10); 
  cursor: pointer;
  border-radius: 48%;
}
</style>
