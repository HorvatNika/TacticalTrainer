<template>
  <div class="home">
    <div class="bottom-title fade-out" @click="handleClick">
      <h1 class="title mb-0">
        <span class="blue">T</span>ACTICAL <span class="blue">T</span>RAINER
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  mounted() {
    this.setupFadeOut();
  },
  methods: {
    setupFadeOut() {
      const bottomTitle = document.querySelector('.bottom-title');
      
      bottomTitle.addEventListener('animationend', () => {
      });
    },
    handleClick() {
      const bottomTitle = document.querySelector('.bottom-title');
      
      bottomTitle.classList.add('fade-out');
      bottomTitle.classList.add('hidden'); 
    }
  }
};
</script>

<style scoped>
.home {
  position: relative;
  background-image: url('@/assets/pozadina.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.85);
  font-family: 'mojFont', sans-serif;
}

.bottom-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: rgba(255, 255, 255, 0.85);
  z-index: 2;
  cursor: pointer;
}

.title {
  font-size: 15rem;
  white-space: nowrap;
}

.blue {
  color: #00adb5;
}

.fade-out {
  animation: fadeOut 4s forwards;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
} ----

.hidden {
  display: none;
}
</style>