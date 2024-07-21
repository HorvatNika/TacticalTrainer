<template>
    <div class="profile">
      <div class="background-image"></div>
      <div class="profile-title">
        <div class="rotated-text">PROFILE</div>
      </div>
      <div class="draggable" @click="openFilePicker">
        <img v-if="profileImage" :src="profileImage" alt="Profile Image" class="profile-img">
        <div v-else class="placeholder">
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2C9.243 2 7 4.243 7 7H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2c0-2.757-2.243-5-5-5zm0 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
          </svg>
        </div>
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
    },
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
    opacity: 0.6;
    color: rgba(255, 255, 255, 0.85);
    font-family: 'mojFont', sans-serif;
    text-align: center;
    padding: 2rem; /* Dodatni padding za bolje pozicioniranje */
  }
  
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  
  .profile-title {
    position: absolute;
    font-size: 15rem; /* Prilagodite veličinu fonta */
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.85);
    transform: rotate(-90deg);
    bottom: 167px; /* Prilagodite razmak od dna */
    left: -258px; /* Prilagodite razmak s lijeve strane */
    opacity: 40%; /* Prilagodite ako je potrebno */
  }
  
  .draggable {
    position: absolute;
    width: 200px;
    height: 200px;
    cursor: pointer; /* Promijenjen kursor */
    z-index: 999; /* Postavljanje iznad pozadinske slike */
    top: 150px; /* Početna pozicija top */
    left: 400px; /* Početna pozicija left */
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: transparent; /* Transparentna pozadina */
    border: 2px dashed rgba(255, 255, 255, 0.5); /* Dashed border */
  }
  
  .profile-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
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
  
  /* Sakrivanje stilizacije za povlačenje */
  .draggable:before, .draggable:after {
    content: '';
    position: absolute;
    border: none; /* Uklanjanje stila za povlačenje */
  }
  </style>
  