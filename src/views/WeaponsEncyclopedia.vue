<template>
    <div class="weapons-encyclopedia">
      <h1>WEAPONS ENCYCLPLOPEDIA</h1>
      <div class="image-container">
        <div class="image-box">
          <img src="@/assets/wePistols.jpg" alt="Pistols">
          <p>PISTOLS</p>
        </div>
        <div class="image-box">
          <img src="@/assets/weRifles.jpg" alt="Rifles">
          <p>RIFLES</p>
        </div>
        <div class="image-box">
          <img src="@/assets/weSnipers.jpg" alt="Snipers">
          <p>SNIPERS</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WeaponsEncyclopedia'
  };
  </script>
  
  <style scoped>
  .weapons-encyclopedia {
    text-align: center;
    padding: 20px;
  }
  
  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    font-family: 'mojFont', sans-serif;
    position: relative;
    display: inline-block;
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
    gap: 90px;
  }
  
  .image-box {
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    text-align: center;
    margin-top: 50px;
    transition: transform 0.3s ease; 
  }
  
  .image-box img {
    width: 180px;
    height: 180px;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .image-box p {
    margin-top: 10px;
    font-size: 1.2em;
    font-weight: bold;
    font-family: 'mojFont', sans-serif;
  }
  
  .image-box:hover {
    transform: scale(1.1);
  }
  </style>
  