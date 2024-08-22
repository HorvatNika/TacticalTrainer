<template>
    <div class="rifles-page">
      <h1>RIFLES</h1>
      <div class="rifle-container">
        <div class="rifle-row">
          <div v-for="rifle in rifles.slice(0, 4)" :key="rifle.id" class="rifle-box">
            <img :src="rifle.image" :alt="rifle.name">
            <p>{{ rifle.name }}</p>
          </div>
        </div>
        <div class="rifle-row">
          <div v-for="rifle in rifles.slice(4, 5)" :key="rifle.id" class="rifle-box">
            <img :src="rifle.image" :alt="rifle.name">
            <p>{{ rifle.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RiflesPage',
    data() {
      return {
        rifles: [
          { id: 1, name: 'AR-15', image: '@/assets/ar15.jpg' },
          { id: 2, name: 'AK-47', image: '@/assets/ak47.jpg' },
          { id: 3, name: 'M4 Carbine', image: '@/assets/m4Carbine.jpg' },
          { id: 4, name: 'G36', image: '@/assets/g36.jpg' },
          { id: 5, name: 'FN SCAR', image: '@/assets/fnScar.jpg' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .rifles-page {
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
  
  .rifle-container {
    display: flex;
    flex-direction: column;
    gap: 30px; 
    margin-top: 60px; 
  }
  
  .rifle-row {
    display: flex;
    justify-content: center;
    gap: 80px; 
  }
  
  .rifle-box {
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
  
  .rifle-box img {
    width: 250px; 
    height: 250px; 
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    opacity: 0.7;
  }
  
  .rifle-box:hover img {
    opacity: 1;
  }
  
  .rifle-box p {
    margin-top: 10px;
    font-size: 1.3rem;
    font-weight: bold;
    font-family: 'mojFont', sans-serif;
    color: inherit;
  }
  
  .rifle-box:hover {
    transform: scale(1.1);
  }
  </style>