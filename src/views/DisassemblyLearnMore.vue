<template>
  <div class="assembly-page">
    <h1>ASSEMBLY AND DISASSEMBLY</h1>
    <div class="assembly-container">
      <div class="assembly-row">
        <div class="assembly-box" @click="openUrl('https://www.youtube.com/watch?v=WIpTS-Qm5Jw')">
          <img :src="pistolsImage" alt="Pistols">
          <p>PISTOLS</p>
        </div>
        <div class="assembly-box" @click="openUrl('https://www.youtube.com/watch?v=JP0oHdGPsuo')">
          <img :src="riflesImage" alt="Rifles">
          <p>RIFLES</p>
        </div>
        <div class="assembly-box" @click="openUrl('https://www.youtube.com/watch?v=6I9jZAw4hEE')">
          <img :src="snipersImage" alt="Snipers">
          <p>SNIPERS</p>
        </div>
      </div>
    </div>

    <div v-if="isModalOpen" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close" @click="closeModal">&times;</span>
        <div class="video-container">
          <iframe
            :src="videoUrl"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AssemblyPage',
  data() {
    return {
      pistolsImage: require('@/assets/pozadina.jpg'),
      riflesImage: require('@/assets/pozadina.jpg'),
      snipersImage: require('@/assets/pozadina.jpg'),
      isModalOpen: false,
      videoUrl: '',
    };
  },
  methods: {
    openUrl(url) {
      this.videoUrl = url.replace('watch?v=', 'embed/');
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
};
</script>

<style scoped>
.assembly-page {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  color: #676767;
  font-family: 'mojFont', sans-serif;
  margin-bottom: 20px;
}

h1::after {
  content: '';
  display: block;
  width: 30%;
  height: 5px;
  background-color: #00adb5;
  margin: 5px auto;
  border-radius: 30px;
}

.assembly-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 60px;
}

.assembly-row {
  display: flex;
  justify-content: center;
  gap: 80px;
}

.assembly-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 250px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  text-decoration: none;
  color: #7c7c7c;
  cursor: pointer;
}

.assembly-box img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0.7;
}

.assembly-box:hover img {
  opacity: 1;
}

.assembly-box p {
  margin-top: 10px;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: 'mojFont', sans-serif;
  color: inherit;
}

.assembly-box:hover {
  transform: scale(1.1);
}

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  top: 0;
  left: 0;
}

.modal-content {
  background-color: #fff;
  padding: 0; 
  border-radius: 0; 
  position: relative;
  max-width: 70vw; 
  max-height: 70vh; 
  overflow: hidden;
}

.video-container {
  position: relative;
  width: 100%;
  padding: 20%;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  object-fit: contain; 
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
