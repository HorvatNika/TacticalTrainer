<template>
  <div class="home">
    <video ref="video" autoplay loop id="background-video" @click="toggleMute">
      <source src="@/assets/homeVideo.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="mute-button" @click="toggleMute">
      <i v-if="!muted" class="fas fa-volume-up"></i>
      <i v-else class="fas fa-volume-mute"></i>
    </div>
    <div class="content">
      <h1 class="title"
          :style="{ opacity: titleOpacity, fontSize: titleFontSize }"
          @mouseover="increaseOpacity"
          @mouseleave="resetOpacity"
      >
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
      muted: false,
      titleOpacity: 0.6,
      titleFontSize: '8rem'
    };
  },
  mounted() {
    this.$refs.video.volume = 0.5;
    this.$refs.video.muted = this.muted;
  },
  methods: {
    toggleMute() {
      this.$refs.video.muted = !this.$refs.video.muted;
      this.muted = this.$refs.video.muted;
    },
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
}

#background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  transform: translateX(-50%) translateY(-50%);
  background: no-repeat;
  background-size: cover;
  cursor: pointer;
}

.mute-button {
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: transparent;
  border: none;
  color: #d4af37;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  z-index: 10;
}

.mute-button i {
  margin: 0;
}

.content {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: rgba(255, 255, 255, 0.85);
  width: 100%;
}

.title {
  font-family: 'mojFont', sans-serif;
  text-transform: uppercase;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s, font-size 0.3s;
}

.title:hover {
  opacity: 1;
}

.blue {
  color: #00adb5;
}
</style>
