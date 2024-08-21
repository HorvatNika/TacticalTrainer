<template>
  <div class="menu">
    <div class="background-image"></div>
    <div class="content"></div>
    <div class="menu-text">MENU</div>
    <div class="circle-container">

      <router-link to="/profile" class="circle circle1">
        <img src="@/assets/menuProfil.svg" alt="Vektorski oblik" class="circle-img">
        <div class="circle-label">PROFILE</div>
      </router-link>

      <router-link to="/infantry" class="circle circle2">
        <img src="@/assets/menuKaciga.svg" alt="Vektorski oblik" class="circle-img">
        <div class="circle-label">LECTURES</div>
      </router-link>

      <router-link to="/score-rank" class="circle circle3">
        <img src="@/assets/menuZvijezda.svg" alt="Vektorski oblik" class="circle-img">
        <div class="circle-label">SCORE RANK</div>
      </router-link>

      <router-link to="/schedule" class="circle circle4">
        <img src="@/assets/menuUteg.svg" alt="Vektorski oblik" class="circle-img">
        <div class="circle-label">SCHEDULE</div>
      </router-link>

    </div>

    <div class="bottom-title">
      <h1 class="title mb-0">
        <span class="blue">T</span>ACTICAL <span class="blue">T</span>RAINER
      </h1>
    </div>

    <svg width="0" height="0">
      <filter id="inner-shadow">
        <feComponentTransfer in="SourceAlpha">
          <feFuncA type="table" tableValues="1 0" />
        </feComponentTransfer>
        <feGaussianBlur stdDeviation="5" /> 
        <feOffset dx="1" dy="1" result="offsetblur" /> 
        <feFlood flood-color="rgba(0, 0, 0, 0.5)" result="color" /> 
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
  background-image: url('@/assets/menuPozadina.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menu-text {
  font-family: 'mojFont', sans-serif;
  font-size: 3rem;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-top: -80px;
  z-index: 3;
  position: relative;
}

.menu-text::before,
.menu-text::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 25px;
  height: 2px;
  background-color: #d4af37;
}

.menu-text::before {
  left: -40px;
  transform: translateY(-50%);
}

.menu-text::after {
  right: -40px;
  transform: translateY(-50%);
}

.circle-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  position: relative;
}

.circle {
  width: 180px; 
  height: 180px; 
  border-radius: 50%;
  margin: 0 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  position: relative;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0.95;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle:hover {
  transform: scale(1.1);
  opacity: 1;
}

.circle-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%; 
  height: auto;
  filter: invert(17%) sepia(55%) saturate(2250%) hue-rotate(155deg) brightness(210%) contrast(112%) url(#inner-shadow);
  transition: transform 0.3s ease;
}

.circle:hover .circle-img {
  transform: translate(-50%, -50%) scale(1.1);
}

.circle3 .circle-img {
  filter: invert(0%) sepia(0%) saturate(100%) hue-rotate(175deg) brightness(400%) contrast(40%) url(#inner-shadow);
}

.circle-label {
  position: absolute;
  bottom: -47px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.7rem; 
  color: rgba(255, 255, 255, 0.85);
  font-family: 'mojFont', sans-serif;
  white-space: nowrap; 
}

.bottom-title {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
  opacity: 50%;
}

.title {
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.85);
  font-family: 'mojFont', sans-serif;
}

.blue {
  color: #00adb5;
}
</style>
