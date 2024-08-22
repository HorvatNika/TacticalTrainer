<template>
    <div class="pistols-page">
      <h1>PISTOLS</h1>
      <div class="pistol-container">
        <div class="pistol-row">
          <div v-for="pistol in pistols.slice(0, 4)" :key="pistol.id" class="pistol-box">
            <img :src="pistol.image" :alt="pistol.name">
            <p>{{ pistol.name }}</p>
          </div>
        </div>
        <div class="pistol-row">
          <div v-for="pistol in pistols.slice(4, 8)" :key="pistol.id" class="pistol-box">
            <img :src="pistol.image" :alt="pistol.name">
            <p>{{ pistol.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PistolsPage',
    data() {
      return {
        pistols: [
          { id: 1, name: 'Glock 17', image: '@/assets/glock17.jpg' },
          { id: 2, name: 'Beretta M9', image: '@/assets/berettaM9.jpg' },
          { id: 3, name: 'SIG P320', image: '@/assets/sigP320.jpg' },
          { id: 4, name: 'Walther P99', image: '@/assets/waltherP99.jpg' },
          { id: 5, name: 'CZ P-10', image: '@/assets/czP10.jpg' },
          { id: 6, name: 'Heckler & Koch USP', image: '@/assets/hkUSP.jpg' },
          { id: 7, name: 'FN Herstal Five-seven', image: '@/assets/fnFiveSeven.jpg' },
          { id: 8, name: 'Desert Eagle', image: '@/assets/desertEagle.jpg' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .pistols-page {
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
  
  .pistol-container {
    display: flex;
    flex-direction: column;
    gap: 30px; 
    margin-top: 60px; 
  }
  
  .pistol-row {
    display: flex;
    justify-content: center;
    gap: 80px; 
  }
  
  .pistol-box {
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
  
  .pistol-box img {
    width: 250px;
    height: 250px; 
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    opacity: 0.7;
  }
  
  .pistol-box:hover img {
    opacity: 1;
  }
  
  .pistol-box p {
    margin-top: 10px;
    font-size: 1.3rem;
    font-weight: bold;
    font-family: 'mojFont', sans-serif;
    color: inherit;
  }
  
  .pistol-box:hover {
    transform: scale(1.1);
  }
  </style>
  