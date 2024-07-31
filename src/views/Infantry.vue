<template>
  <div class="simple-page">
    <h1 class="infantry-title">INFANTRY</h1>
  </div>
  <div class="image-container">
    <div class="yellow-bar"></div>
    <div class="image-box">
      <img src="@/assets/veVehicles.jpg" alt="Weapons Encyclopedia">
      <p>WEAPONS ENCYCLOPEDIA</p>
    </div>
    <div class="image-box">
      <img src="@/assets/veVehicles.jpg" alt="Vehicle Encyclopedia">
      <p>VEHICLE ENCYCLOPEDIA</p>
    </div>
  </div>

  <div class="essentials-container">
    <div class="green-bar"></div>
    <div class="image-box">
      <img src="@/assets/veVehicles.jpg" alt="Equipment Essentials">
      <p>EQUIPMENT ESSENTIALS</p>
    </div>
    <div class="image-box">
      <img src="@/assets/veVehicles.jpg" alt="Armory Essentials">
      <p>ARMORY ESSENTIALS</p>
    </div>
  </div>
  <div class="scroll-indicator" v-if="showScrollIndicator"></div>
</template>

<script>
export default {
  name: 'SimplePage',
  data() {
    return {
      showScrollIndicator: true
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showScrollIndicator = window.scrollY === 0;
    }
  }
};
</script>


<style scoped>
.simple-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-image: url('@/assets/pozadinaInfantry.jpg');
  background-size: cover;
  background-position: center;
  position: relative; 
}

.infantry-title {
  font-size: 20em;
  color: rgba(255, 255, 255, 0.591);
  font-family: 'mojFont', sans-serif;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2; 
}

.image-container,
.essentials-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  position: relative;
  z-index: 2;
}

.image-container {
  margin-top: 100px; 
}

.essentials-container {
  flex-direction: row;
  margin-top: 30px;
}

.image-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px;
  transition: transform 0.3s ease;
  width: 250px; 
}

.image-box img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.image-box p {
  margin-top: 10px;
  font-size: 1.2em;
  font-weight: bold;
  font-family: 'drugiFont', sans-serif;
}

.image-box:hover {
  transform: scale(1.1);
}

.yellow-bar {
  position: absolute;
  bottom: 30px; 
  left: 0;
  width: 100%;
  height: 370px; 
  background-color: #fef2b1; 
  z-index: -100;
  opacity: 70%;
}

.green-bar {
  position: absolute;
  bottom: 30px; 
  left: 0;
  width: 100%;
  height: 370px;
  background-color: rgb(181, 254, 177); 
  z-index: -100; 
  opacity: 70%;
}

.scroll-indicator {
  position: fixed;
  bottom: 20px;
  left: 0;
  width: 100%;
  height: 10px;
  background: linear-gradient(to right, transparent, #00adb5, transparent);
  box-shadow: 0 0 10px rgba(0, 173, 181, 0.8);
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    background: linear-gradient(to right, transparent, #00adb5, transparent);
  }
  50% {
    background: linear-gradient(to right, #00adb5, #00adb5, #00adb5);
  }
  100% {
    background: linear-gradient(to right, transparent, #00adb5, transparent);
  }
}
</style>
