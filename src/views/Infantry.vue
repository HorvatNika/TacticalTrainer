<template>
  <div class="simple-page">
    <h1 class="infantry-title">INFANTRY</h1>
  </div>
  <div class="image-container">
      <div class="image-box">
        <img src="@/assets/veVehicles.jpg" alt="Weapons Encyclopedia">
        <p>WEAPONS ENCYCLOPEDIA</p>
      </div>
      <div class="image-box">
        <img src="@/assets/veVehicles.jpg" alt="Vehicle Encyclopedia">
        <p>VEHICLE ENCYCLOPEDIA</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'SimplePage',
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
  z-index: 1; 
}

.image-container {
  display: flex;
  justify-content: center;
  gap: 20px; 
  padding: 20px;
  z-index: 1; 
  position: relative; 
  top: 50%; 
}

.image-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px;
  transition: transform 0.3s ease;
}

.image-box img {
  width: 250px;
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

</style>
