<template>
  <div class="simple-page">
    <h1 class="infantry-title">INFANTRY</h1>
  </div>

  <div class="encyclopedia-section">
    <h2 class="section-title">MILITARY ENCYCLOPEDIA LIBRARY</h2>
    <div class="image-container">
      <router-link to="/weaponsencyclopedia" class="image-box">
        <img src="@/assets/melWeaponsEncyclopedia.jpg" alt="Weapons Encyclopedia">
        <p>WEAPONS ENCYCLOPEDIA</p>
      </router-link>
      <router-link to="/vehicleencyclopedia" class="image-box">
        <img src="@/assets/melVehicleEncyclopedia.jpg" alt="Vehicle Encyclopedia">
        <p>VEHICLE ENCYCLOPEDIA</p>
      </router-link>
    </div>
  </div>

  <div class="essentials-section">
    <h2 class="section-title">MILITARY ESSENTIALS LIBRARY</h2>
    <div class="essentials-container">
      <router-link to="/equipmentessentials" class="image-box">
        <img src="@/assets/melEquipmentEssentials.jpg" alt="Equipment Essentials">
        <p>EQUIPMENT ESSENTIALS</p>
      </router-link>
      <router-link to="/armoryessentials" class="image-box">
        <img src="@/assets/melArmoryEssentials.jpg" alt="Armory Essentials">
        <p>ARMORY ESSENTIALS</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimplePage'
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

.section-title {
  font-size: 6em;
  color: #9b9b9b77;
  font-family: 'mojFont', sans-serif;
  margin-bottom: 20px; 
  text-align: left;
  margin-left: 20px; 
}


.encyclopedia-section {
  width: 100%;
  margin: 30px 0; 
  padding: 0 20px; 
  box-sizing: border-box;
}

.image-container {
  display: flex;
  justify-content: center;
  gap: 300px; 
  padding: 0 20px; 
  margin-top: -5px; 
  position: relative;
  z-index: 2;
}

.essentials-section {
  width: 100%;
  margin: 20px 0;
  padding: 0 20px; 
  box-sizing: border-box; 
  position: relative;
  margin-top: -10px;  
}

.essentials-container {
  display: flex;
  justify-content: center;
  gap: 300px; 
  padding: 0 20px; 
  margin-top: -5px; 
  position: relative;
  z-index: 2;
}

.image-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px;
  transition: transform 0.3s ease, opacity 0.3s ease; 
  width: 250px; 
  text-decoration: none; 
  color: #7c7c7c; 
  position: relative;
  top: -10px; 
}

.image-box img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0.7; 
}

.image-box:hover img {
  opacity: 1; 
}

.image-box p {
  margin-top: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'mojFont', sans-serif;
  color: inherit; 
}

.image-box:hover {
  transform: scale(1.1);
}
</style>
