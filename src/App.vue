<template>
  <div id="app">
    <nav>
  <router-link to="/">Home</router-link>
  <router-link to="/login">Prijava</router-link>
  <router-link to="/signup">Registracija</router-link>
  <router-link to="/menu">Menu</router-link>
  <router-link to="/testpistols">Test Pistols</router-link>
  <router-link to="pistols">Pistols</router-link>
  <router-link to="scorerank">Score Rank</router-link>
</nav>
    <router-view/>

    <audio ref="backgroundAudio" :src="currentAudioSrc" autoplay loop></audio>

    <div class="audio-controls" v-if="showControls">
      <button @click="prevAudio" class="control-button">◀</button>
      <span class="current-audio-name">{{ currentAudioName }}</span>
      <button @click="nextAudio" class="control-button">▶</button>
    </div>
    <div class="sound-controls">
      <button @click="toggleMute" class="volume-button">
        <i :class="muteIconClass"></i>
      </button>
      <button @click="toggleControls" class="toggle-controls-button">
        Change Sound
      </button>
    </div>
  </div>
</template>
<style lang="scss">
@font-face {
  font-family: 'mojFont';
  src: url('@/assets/font/mojFont.ttf') format('truetype'); 
  font-weight: 400; 
  font-style: normal; 
}

@font-face {
  font-family: 'drugiFont';
  src: url('@/assets/font/drugiFont.ttf') format('truetype'); 
  font-weight: 400; 
  font-style: normal; 
}

body {
  font-family: 'mojFont', sans-serif; 
}

#app {
  font-family: 'drugiFont', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 5px 10px;
    transition: color 0.3s;

    &.router-link-exact-active {
      color: #42b983;
    }

    &:hover {
      color: #42b983;
    }
  }
}

audio {
  display: none; 
}

.sound-controls {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  z-index: 1000;
}

.toggle-controls-button {
  background-color: transparent; 
  color: rgb(255, 255, 255, 0.85);
  border: none;
  border-radius: 5px;
  padding: 10px 10px;
  font-size: 16px;
  cursor: pointer;
  font-family: 'mojFont', sans-serif;
  margin: 0; 
}

.volume-button {
  background-color: transparent;
  color: rgb(255, 255, 255, 0.85); 
  border: none;
  border-radius: 5px;
  padding: 5px; 
  font-size: 20px;
  cursor: pointer;
  margin: 0; 
}

.toggle-controls-button:hover,
.volume-button:hover {
  background-color: transparent; 
  color: #00adb5; 
}

.audio-controls {
  position: fixed;
  bottom: 60px;
  right: 20px;
  display: flex;
  align-items: center;
  z-index: 1000;
}

.control-button {
  background-color: transparent; 
  color: rgb(255, 255, 255, 0.85); 
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  margin: 0 5px;
}

.current-audio-name {
  color: rgb(255, 255, 255, 0.85); 
  font-size: 15px;
  margin: 0 10px;
  font-family: 'mojFont', sans-serif;
}

.control-button:hover,
.toggle-controls-button:hover {
  background-color: transparent; 
  color: #00adb5; 
}

</style>

<script>
export default {
  data() {
    return {
      audioFiles: [
        { src: require('@/assets/OpeningTitles.mp3'), name: 'Opening Titles' },
        { src: require('@/assets/ExtractionPoint.mp3'), name: 'Extraction Point' },
        { src: require('@/assets/RetreatAndReveille.mp3'), name: 'Retreat and Reveille' },
        { src: require('@/assets/Seige.mp3'), name: 'Seige' }
      ],
      currentAudioIndex: 0,
      showControls: false,
      isMuted: false 
    };
  },
  computed: {
    currentAudioSrc() {
      return this.audioFiles[this.currentAudioIndex].src;
    },
    currentAudioName() {
      return this.audioFiles[this.currentAudioIndex].name;
    },
    muteIconClass() {
      return this.isMuted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
    }
  },
  methods: {
    changeAudio() {
      const audio = this.$refs.backgroundAudio;
      if (audio) {
        audio.src = this.currentAudioSrc; 
        audio.play().catch(error => {
          console.log("Error while changing audio:", error);
        });
      }
    },
    nextAudio() {
      this.currentAudioIndex = (this.currentAudioIndex + 1) % this.audioFiles.length;
      this.changeAudio();
    },
    prevAudio() {
      this.currentAudioIndex = (this.currentAudioIndex - 1 + this.audioFiles.length) % this.audioFiles.length;
      this.changeAudio();
    },
    toggleControls() {
      this.showControls = !this.showControls;
    },
    toggleMute() {
      const audio = this.$refs.backgroundAudio;
      if (audio) {
        this.isMuted = !this.isMuted;
        audio.muted = this.isMuted; 
      }
    }
  },
  mounted() {
    const audio = this.$refs.backgroundAudio;
    if (audio) {
      audio.volume = 1.0;
      audio.addEventListener('ended', this.nextAudio); 
      audio.addEventListener('canplaythrough', () => {
        audio.play().catch(error => {
          console.log("Autoplay blocked or error occurred:", error);
        });
      });
    }
  }
}
</script>