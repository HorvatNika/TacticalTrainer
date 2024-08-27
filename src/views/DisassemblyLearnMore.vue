<template>
  <div class="assembly-page">
    <h1>ASSEMBLY AND DISASSEMBLY</h1>
    <div class="assembly-container">
      <button @click="prevVideo" class="nav-button prev" :disabled="currentVideoIndex === 0">❮</button>
      <div class="assembly-box">
        <p>{{ videos[currentVideoIndex].title }}</p>
        <div class="video-container">
          <iframe
            :src="videos[currentVideoIndex].url"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <button @click="nextVideo" class="nav-button next" :disabled="currentVideoIndex === videos.length - 1">❯</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AssemblyPage',
  data() {
    return {
      videos: [
        { title: 'PISTOLS', url: 'https://www.youtube.com/embed/WIpTS-Qm5Jw' },
        { title: 'RIFLES', url: 'https://www.youtube.com/embed/JP0oHdGPsuo' },
        { title: 'SNIPERS', url: 'https://www.youtube.com/embed/6I9jZAw4hEE' }
      ],
      currentVideoIndex: 0
    };
  },
  methods: {
    nextVideo() {
      if (this.currentVideoIndex < this.videos.length - 1) {
        this.currentVideoIndex += 1;
      }
    },
    prevVideo() {
      if (this.currentVideoIndex > 0) {
        this.currentVideoIndex -= 1;
      }
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
  background-color: #007c8a64;
  margin: 5px auto;
  border-radius: 30px;
}

.assembly-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 110px;
  position: relative;
}

.assembly-box {
  width: 100%;
  max-width: 800px;
}

.assembly-box p {
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'mojFont', sans-serif;
  color: #7b7b7b;
}

.video-container {
  width: 100%;
  padding-top: 56.25%;
  position: relative;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.nav-button {
  background-color: transparent;
  border: none;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 0 35px;
  color: #676767;
  transition: color 0.3s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.nav-button.prev {
  left: 250px;
}

.nav-button.next {
  right: 250px;
}

.nav-button:hover {
  color: #007c8a89;
}

.nav-button:disabled {
  color: #b0b0b0;
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
