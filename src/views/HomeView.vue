<template>
  <div class="home">
    <div v-if="!isTitleHidden" class="bottom-title fade-out" @click="handleClick">
      <h1 class="title mb-0">
        <span class="blue">T</span>ACTICAL <span class="blue">T</span>RAINER
      </h1>
    </div>
    <div v-if="isTitleHidden" class="overlay"></div>
    <div v-if="isTitleHidden" class="background-title">
      <h2>
        <span class="blue">T</span>ACTICAL
        <br />
        <span class="blue">T</span>RAINER
      </h2>
    </div>
    <div v-if="isTitleHidden" class="transparent-box">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      isTitleHidden: false, 
    };
  },
  mounted() {
    this.setupFadeOut();
  },
  methods: {
    setupFadeOut() {
      const bottomTitle = document.querySelector('.bottom-title');
      
      bottomTitle.addEventListener('animationend', () => {
        this.isTitleHidden = true; 
      });
    },
    handleClick() {
      const bottomTitle = document.querySelector('.bottom-title');
      
      bottomTitle.classList.add('fade-out');
      bottomTitle.classList.add('hidden');
      this.isTitleHidden = true;
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
}

.hidden {
  display: none;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  z-index: 1;
  opacity: 0;
  animation: fadeIn 2s forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.background-title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  text-align: center;
  opacity: 0;
  animation: fadeIn 2s 1s forwards; 
}

.background-title h2 {
  font-size: 25rem;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
}

.transparent-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.20);
  padding: 40px;
  border-radius: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 2;
  width: 500px;
  height: 300px;
  opacity: 0;
  animation: slideIn 2s 1s forwards; 
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translate(-50%, -60%); 
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%); 
  }
}
</style>
