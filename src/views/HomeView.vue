<template>
  <div class="home">
    <div class="overlay hidden"></div>

    <div class="transparent-box hidden with-shadow rounded-40">
      <form class="text-center" @click="goToSignup">
        <h3 class="form-heading">CREATE YOUR ACCOUNT</h3>
        <p class="form-subheading">
          ALREADY HAVE AN ACCOUNT? 
          <a href="#" @click.prevent="goToLogin" class="sign-in-link">SIGNIN</a>
        </p>
      </form>
    </div>

    <div class="bottom-title fade-out">
      <h1 class="title mb-0">
        <span class="blue">T</span>ACTICAL <span class="blue">T</span>RAINER
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    goToSignup() {
      this.$router.push({ name: 'signup' });
    },
    goToLogin() {
      this.$router.push({ name: 'login' });
    }
  },
  mounted() {
    const bottomTitle = document.querySelector('.bottom-title');
    const transparentBox = document.querySelector('.transparent-box');
    const overlay = document.querySelector('.overlay');

    bottomTitle.addEventListener('animationend', () => {
      transparentBox.classList.remove('hidden');
      transparentBox.classList.add('fade-in');

      setTimeout(() => {
        overlay.classList.remove('hidden');
        overlay.classList.add('fade-in');
      }, 500); 
    });
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.85); 
  font-family: 'mojFont', sans-serif;
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
}

.transparent-box {
  background-color: rgba(0, 0, 0, 0.20);
  padding: 80px; 
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); 
  z-index: 2;
  width: 25%; 
  position: relative;
  margin: 0 auto;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.transparent-box.hidden {
  display: none; 
}

.transparent-box.fade-in {
  opacity: 1;
}

.text-center {
  text-align: center;
}

.form-heading, .form-subheading {
  white-space: nowrap; 
  overflow: hidden;  
  text-overflow: ellipsis;
}

.form-heading {
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 20px; 
}

.form-subheading {
  font-size: 1.27rem; 
  color: rgba(255, 255, 255, 0.85);
  margin-top: 20px;
}

.sign-in-link {
  color: #00adb5;
  text-decoration: none;
}

.sign-in-link:hover {
  text-decoration: underline;
}

.bottom-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: rgba(255, 255, 255, 0.85);
  z-index: 2; 
}

.title {
  font-size: 15rem; 
  white-space: nowrap;
}

.blue {
  color: #00adb5;
}

.fade-out {
  animation: fadeOut 5s forwards;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
