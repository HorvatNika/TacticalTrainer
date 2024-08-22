<template>
    <div class="gear-page">
      <h1>TACTICAL GEAR OVERVIEW</h1>
      <div class="gear-container">
        <div class="gear-row">
          <div v-for="gear in gearItems.slice(0, 4)" :key="gear.id" class="gear-box">
            <img :src="gear.image" :alt="gear.name">
            <p>{{ gear.name }}</p>
          </div>
        </div>
        <div class="gear-row">
          <div v-for="gear in gearItems.slice(4, 7)" :key="gear.id" class="gear-box">
            <img :src="gear.image" :alt="gear.name">
            <p>{{ gear.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GearPage',
    data() {
      return {
        gearItems: [
          { id: 1, name: 'Tactical Vest', image: '@/assets/tacticalVest.jpg' },
          { id: 2, name: 'Combat Helmet', image: '@/assets/combatHelmet.jpg' },
          { id: 3, name: 'Molle Pouch', image: '@/assets/mollePouch.jpg' },
          { id: 4, name: 'Ballistic Goggles', image: '@/assets/ballisticGoggles.jpg' },
          { id: 5, name: 'Tactical Gloves', image: '@/assets/tacticalGloves.jpg' },
          { id: 6, name: 'Elbow Pads', image: '@/assets/elbowPads.jpg' },
          { id: 7, name: 'Knee Pads', image: '@/assets/kneePads.jpg' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .gear-page {
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
  
  .gear-container {
    display: flex;
    flex-direction: column;
    gap: 30px; 
    margin-top: 60px; 
  }
  
  .gear-row {
    display: flex;
    justify-content: center;
    gap: 80px; 
  }
  
  .gear-box {
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
  
  .gear-box img {
    width: 250px; 
    height: 250px; 
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    opacity: 0.7;
  }
  
  .gear-box:hover img {
    opacity: 1;
  }
  
  .gear-box p {
    margin-top: 10px;
    font-size: 1.3rem;
    font-weight: bold;
    font-family: 'mojFont', sans-serif;
    color: inherit;
  }
  
  .gear-box:hover {
    transform: scale(1.1);
  }
  </style>
  