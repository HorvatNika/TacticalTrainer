<template>
    <div class="vehicles-page">
      <h1>INFANTRY TRANSPORT VEHICLES</h1>
      <div class="vehicle-container">
        <div class="vehicle-row">
          <div v-for="vehicle in vehicles.slice(0, 4)" :key="vehicle.id" class="vehicle-box">
            <img :src="vehicle.image" :alt="vehicle.name">
            <p>{{ vehicle.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VehiclesPage',
    data() {
      return {
        vehicles: [
          { id: 1, name: 'Humvee', image: '@/assets/humvee.jpg' },
          { id: 2, name: 'MRAP', image: '@/assets/mrap.jpg' },
          { id: 3, name: 'Stryker', image: '@/assets/stryker.jpg' },
          { id: 4, name: 'M113', image: '@/assets/m113.jpg' },
          { id: 5, name: 'Cougar', image: '@/assets/cougar.jpg' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .vehicles-page {
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
  
  .vehicle-container {
    display: flex;
    flex-direction: column;
    gap: 30px; 
    margin-top: 60px; 
  }
  
  .vehicle-row {
    display: flex;
    justify-content: center;
    gap: 80px; 
  }
  
  .vehicle-box {
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
  
  .vehicle-box img {
    width: 250px; 
    height: 250px; 
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    opacity: 0.7;
  }
  
  .vehicle-box:hover img {
    opacity: 1;
  }
  
  .vehicle-box p {
    margin-top: 10px;
    font-size: 1.3rem;
    font-weight: bold;
    font-family: 'mojFont', sans-serif;
    color: inherit;
  }
  
  .vehicle-box:hover {
    transform: scale(1.1);
  }
  </style>
  