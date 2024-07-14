<template>
  <div class="home">
    <video ref="video" autoplay loop id="background-video">
      <source src="@/assets/homeVideo.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="content">
      <h1 class="title"><span class="blue">T</span>actical <span class="blue">T</span>rainer</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  mounted() {
    this.$refs.video.volume = 0.5; // Postavite željenu jačinu zvuka (od 0 do 1)
    this.$refs.video.muted = false; // Omogućite zvuk
  }
}
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
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: rgba(255, 255, 255, 0.85); /* Bijele slova s 85% prozirnosti */
  width: 100%;
}

.title {
  font-family: 'mojFont', sans-serif; /* Zamijenite 'mojFont' sa stvarnim imenom vašeg fonta */
  font-size: 5rem; /* Povećajte veličinu fonta prema potrebi */
  text-transform: uppercase;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.blue {
  color: #00adb5;
}
</style>
