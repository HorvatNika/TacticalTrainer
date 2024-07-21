<template>
  <div class="profile">
    <div class="profile-title">
      <div class="rotated-text">PROFILE</div>
    </div>

    <div class="draggable" @click="openFilePicker">
      <div v-if="!profileImage" class="placeholder"></div>
    </div>
    <input type="file" ref="fileInput" style="display: none" @change="handleFileChange">
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      profileImage: null
    };
  },
  
  methods: {
    openFilePicker() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.profileImage = reader.result;
        };
        reader.readAsDataURL(file);
      }
    }
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
}

.profile-title {
  position: absolute;
  font-size: 15rem;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
  transform: rotate(-90deg);
  bottom: 167px;
  left: -258px;
  opacity: 40%;
}

.profile-title::first-letter {
  color: #00adb5; 
}

.draggable {
  position: absolute;
  width: 200px;
  height: 200px;
  z-index: 999;
  top: 150px;
  left: 400px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: transparent;
  border: 2px dashed rgba(255, 255, 255, 0.5);
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

.draggable:before, .draggable:after {
  content: '';
  position: absolute;
  border: none;
}
</style>
