<template>
  <div class="menu">
    <div class="background-image"></div>
    <div class="content"></div>
    <div class="menu-text">MENU</div>
    <div class="circle-container">

      <div class="circle circle1" @mouseover="increaseOpacity(1)" @mouseleave="resetOpacity(1)">
        <img src="@/assets/menuProfil.svg" alt="Vektorski oblik" class="circle-img">
        <div class="circle-label">PROFILE</div>
      </div>

      <div class="circle circle2" @mouseover="increaseOpacity(2)" @mouseleave="resetOpacity(2)">
        <img src="@/assets/menuKaciga.svg" alt="Vektorski oblik" class="circle-img">
        <div class="circle-label">LECTURES</div>
      </div>

      <div class="circle circle3" @mouseover="increaseOpacity(3)" @mouseleave="resetOpacity(3)">
        <img src="@/assets/menuZvijezda.svg" alt="Vektorski oblik" class="circle-img">
        <div class="circle-label">SCORE RANK</div>
      </div>

      <div class="circle circle4" @mouseover="increaseOpacity(4)" @mouseleave="resetOpacity(4)">
        <img src="@/assets/menuUteg.svg" alt="Vektorski oblik" class="circle-img">
        <div class="circle-label">SCHEDULE</div>
      </div>
    </div>

    <div class="footer">
      <h1 class="title mb-0">
        <span class="blue">T</span><span class="title-part">ACTICAL</span> <span class="blue">T</span><span class="title-part">RAINER</span>
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
  name: 'Menu',
  methods: {
    increaseOpacity(index) {
      const circle = document.querySelector(`.circle${index}`);
      circle.style.opacity = '1';
    },
    resetOpacity(index) {
      const circle = document.querySelector(`.circle${index}`);
      circle.style.opacity = '0.6';
    }
  }
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

.footer {
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
  font-family: 'mojFont', sans-serif;
}

.title {
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.85);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  opacity: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.title-part {
  font-size: 3rem; /* Ili bilo koja veličina koja odgovara dizajnu */
  color: rgba(255, 255, 255, 0.85);
}

.blue {
  color: #00adb5;
  font-size: 3rem; /* Ovo može biti različito u zavisnosti od dizajna */
}

.menu-text {
  font-family: 'mojFont', sans-serif;
  font-size: 4rem;
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
  margin-top: 50px;
  position: relative;
}

.circle {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin: 0 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  position: relative;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0.95;
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
  width: 55%;
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
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.85);
  font-family: 'mojFont', sans-serif;
  white-space: nowrap; 
}
</style>
