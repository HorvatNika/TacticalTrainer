<template>
  <div class="home">
    <div v-if="!isTitleHidden" class="bottom-title fade-out" @click="handleClick">
      <h1 class="title mb-0">
        <span class="blue">T</span>ACTICAL <span class="blue">T</span>RAINER
      </h1>
      <div class="explosion-animation"></div>
    </div>
    <div v-if="isTitleHidden" class="overlay"></div>
    <div v-if="isTitleHidden" class="buttons-box">
      <div class="buttons-container">
        <button class="btn neon-button" @click="goToLogin">ALREADY HAVE AN ACCOUNT? LOGIN</button>
        <button class="btn neon-button" @click="goToSignup">CREATE YOUR ACCOUNT</button>
      </div>  
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
    },
    goToLogin() {
      this.$router.push({ name: 'login' });
    },
    goToSignup() {
      this.$router.push({ name: 'signup' });
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

.buttons-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 500px;
  text-align: center;
}

.buttons-container {
  display: flex;
  justify-content: space-around;
  gap: 30px;
}

.neon-button {
  font-family: 'mojFont', sans-serif;
  font-size: 1.1rem;
  padding: 15px 25px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
  overflow: hidden;
}

.neon-button:hover {
  color: #00adb5;
  transition: none;
}

.neon-button:focus {
  outline: none;
}
</style>
