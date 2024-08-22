<template>
    <div class="snipers-page">
      <h1>SNIPERS</h1>
      <div class="sniper-container">
        <div class="sniper-row">
          <div v-for="sniper in snipers.slice(0, 4)" :key="sniper.id" class="sniper-box">
            <img :src="sniper.image" :alt="sniper.name">
            <p>{{ sniper.name }}</p>
          </div>
        </div>
        <div class="sniper-row">
          <div v-for="sniper in snipers.slice(4, 7)" :key="sniper.id" class="sniper-box">
            <img :src="sniper.image" :alt="sniper.name">
            <p>{{ sniper.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SnipersPage',
    data() {
      return {
        snipers: [
          { id: 1, name: 'M40A5', image: '@/assets/m40a5.jpg' },
          { id: 2, name: 'SVD Dragunov', image: '@/assets/svdDragunov.jpg' },
          { id: 3, name: 'Remington 700', image: '@/assets/remington700.jpg' },
          { id: 4, name: 'AWP', image: '@/assets/awp.jpg' },
          { id: 5, name: 'CheyTac M200', image: '@/assets/cheytacM200.jpg' },
          { id: 6, name: 'Barrett M82', image: '@/assets/barrettM82.jpg' },
          { id: 7, name: 'L96A1', image: '@/assets/l96a1.jpg' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .snipers-page {
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
  
  .sniper-container {
    display: flex;
    flex-direction: column;
    gap: 30px; 
    margin-top: 60px; 
  }
  
  .sniper-row {
    display: flex;
    justify-content: center;
    gap: 80px; 
  }
  
  .sniper-box {
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
  
  .sniper-box img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    opacity: 0.7;
  }
  
  .sniper-box:hover img {
    opacity: 1;
  }
  
  .sniper-box p {
    margin-top: 10px;
    font-size: 1.3rem;
    font-weight: bold;
    font-family: 'mojFont', sans-serif;
    color: inherit;
  }
  
  .sniper-box:hover {
    transform: scale(1.1);
  }
  </style>
  