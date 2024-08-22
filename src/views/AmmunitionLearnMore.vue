<template>
    <div class="ammo-page">
      <h1>AMMUNITION OVERVIEW</h1>
      <div class="ammo-container">
        <div class="ammo-row">
          <div v-for="ammo in ammoItems.slice(0, 4)" :key="ammo.id" class="ammo-box">
            <img :src="ammo.image" :alt="ammo.name">
            <p>{{ ammo.name }}</p>
          </div>
        </div>
        <div class="ammo-row">
          <div v-for="ammo in ammoItems.slice(4, 5)" :key="ammo.id" class="ammo-box">
            <img :src="ammo.image" :alt="ammo.name">
            <p>{{ ammo.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AmmoPage',
    data() {
      return {
        ammoItems: [
          { id: 1, name: '5.56×45mm NATO', image: '@/assets/ammo556.jpg' },
          { id: 2, name: '7.62×39mm', image: '@/assets/ammo762.jpg' },
          { id: 3, name: '9mm Parabellum', image: '@/assets/ammo9mm.jpg' },
          { id: 4, name: '12 Gauge', image: '@/assets/ammo12gauge.jpg' },
          { id: 5, name: '40mm Grenade', image: '@/assets/ammo40mm.jpg' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .ammo-page {
    text-align: center;
    padding: 20px;
  }
  
  h1 {
    font-size: 2.5rem; 
    color: #676767; 
    font-family: 'mojFont', sans-serif;
    margin-bottom: 20px;
  }
  
  h1::after {
    content: '';
    display: block;
    width: 30%;
    height: 5px;
    background-color: #00adb5;
    margin: 5px auto;
    border-radius: 30px;
  }
  
  .ammo-container {
    display: flex;
    flex-direction: column;
    gap: 30px; 
    margin-top: 60px; 
  }
  
  .ammo-row {
    display: flex;
    justify-content: center;
    gap: 80px; 
  }
  
  .ammo-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 250px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    text-decoration: none;
    color: #7c7c7c;
  }
  
  .ammo-box img {
    width: 250px; 
    height: 250px; 
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    opacity: 0.7;
  }
  
  .ammo-box:hover img {
    opacity: 1;
  }
  
  .ammo-box p {
    margin-top: 10px;
    font-size: 1.3rem;
    font-weight: bold;
    font-family: 'mojFont', sans-serif;
    color: inherit;
  }
  
  .ammo-box:hover {
    transform: scale(1.1);
  }
  </style>
  