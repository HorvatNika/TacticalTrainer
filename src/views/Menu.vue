<template>
    <div class="menu">
      <div class="background-image"></div>
      <div class="content">
      </div>
      <div class="menu-text">MENU</div>
      <div class="circle-container">
        <div class="circle circle1">
          <img src="@/assets/menuProfil.svg" alt="Vektorski oblik" class="circle-img">
        </div>
        <div class="circle circle2">
          <img src="@/assets/menuKaciga.svg" alt="Vektorski oblik" class="circle-img">
        </div>
        <div class="circle circle3">
          <img src="@/assets/menuZvijezda.svg" alt="Vektorski oblik" class="circle-img">
        </div>
        <div class="circle circle4">
          <img src="@/assets/menuUteg.svg" alt="Vektorski oblik" class="circle-img">
        </div>
      </div>
      <div class="footer">
        <h1 class="title mb-0"><span class="blue">T</span>actical <span class="blue">T</span>rainer</h1>
      </div>
      <svg width="0" height="0">
        <filter id="inner-shadow">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="1.5" /> <!-- Manje zamućenje -->
          <feOffset dx="1" dy="1" result="offsetblur" /> <!-- Manje pomicanje -->
          <feFlood flood-color="rgba(0, 0, 0, 0.5)" result="color" /> <!-- Smanjeni opacitet -->
          <feComposite in2="offsetblur" operator="in" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Menu'
  };
  </script>
  
  <style scoped>
  .menu {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/menuPozadina.jpg');
    background-size: cover;
    background-position: center;
    filter: grayscale(100%);
    opacity: 0.6;
  }
  
  .content {
    z-index: 2;
  }
  
  .footer {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
    font-family: 'mojFont', sans-serif;
  }
  
  .title {
    font-size: 3rem;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.85);
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  }
  
  .blue {
    color: #00adb5;
  }
  
  .menu-text {
    font-family: 'mojFont', sans-serif;
    font-size: 3rem;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.85);
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    margin-top: -80px;
    z-index: 3;
  }
  
  .circle-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
  
  .circle {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    position: relative;
  }
  
  .circle-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 55%;
    height: auto;
    filter: invert(17%) sepia(55%) saturate(2250%) hue-rotate(155deg) brightness(210%) contrast(112%) url(#inner-shadow);
  }
  
  /* Specific styles for .circle-img inside .circle3 */
  .circle3 .circle-img {
    filter: invert(0%) sepia(0%) saturate(100%) hue-rotate(185deg) brightness(410%) contrast(110%) url(#inner-shadow);
  }
  </style>
  