<template>
  <div class="armory-essentials">
    <h1>ARMORY ESSENTIALS</h1>
    <div class="image-container">
      <router-link to="/disassembly" class="image-box">
        <img src="@/assets/aeDisassembly.jpg" alt="Disassembly">
        <p>DISASSEMBLY</p>
      </router-link>
      <router-link to="/ammunition" class="image-box">
        <img src="@/assets/aeAmmunition.jpg" alt="Ammunition">
        <p>AMMUNITION</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArmoryEssentials'
};
</script>

<style scoped>
.armory-essentials {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  font-family: 'mojFont', sans-serif;
  position: relative;
  display: inline-block;
  color: #676767;
}

h1::before,
h1::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 25px;
  height: 2px;
  background-color: #d4af37; 
  transform: translateY(-50%);
}

h1::before {
  left: -40px;
}

h1::after {
  right: -40px;
}

.image-container {
  display: flex;
  justify-content: center;
  gap: 80px; 
  padding: 0 20px; 
  margin-top: 40px; 
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
  color: #7b7b7b; 
  position: relative;
  top: -10px; 
}

.image-box img {
  width: 250px; 
  height: 250px; 
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0.7; 
}

.image-box:hover img {
  opacity: 1; 
}

.image-box p {
  margin-top: 10px;
  font-size: 1.3rem; 
  font-weight: bold;
  font-family: 'mojFont', sans-serif;
  color: inherit; 
}

.image-box:hover {
  transform: scale(1.1);
}
</style>
