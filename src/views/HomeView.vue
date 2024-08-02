<template>
  <div class="home">
    <div class="overlay"></div>
    <div class="background-title">
      <h1 class="title"
          :style="{ opacity: titleOpacity, fontSize: titleFontSize }"
          @mouseover="increaseOpacity"
          @mouseleave="resetOpacity">
        <span class="blue">T</span>actical <span class="blue">T</span>rainer
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      titleOpacity: 0.6,
      titleFontSize: '8rem'
    };
  },
  
  methods: {
    increaseOpacity() {
      this.titleOpacity = 1;
      this.titleFontSize = '9rem';
    },
    resetOpacity() {
      this.titleOpacity = 0.6;
      this.titleFontSize = '8rem';
    }
  }
};
</script>

<style scoped>
.home {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: url('@/assets/pozadina.jpg');
  background-size: cover;
  background-position: center center; 
  display: flex;
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
  z-index: 1; 
}

.background-title {
  position: relative;
  z-index: 2; 
  text-align: center;
}

.title {
  font-family: 'mojFont', sans-serif;
  font-size: 8rem;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s, font-size 0.3s;
  color: rgba(255, 255, 255, 0.85);
}

.blue {
  color: #00adb5;
}
</style>
