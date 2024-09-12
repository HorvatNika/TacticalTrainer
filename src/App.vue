<template>
  <div id="app">
    <nav v-if="isLoggedIn">
      <router-link to="/menu">MENU</router-link>
      <router-link to="/" @click="handleSignOut">SIGN OUT</router-link>
      <router-link to="/admin" v-if="isAdmin">ADMIN</router-link>
    </nav>
    <router-view />

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
}

nav {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  font-family: 'mojFont', sans-serif;
  font-size: 20px;
  
  a {
    font-weight: bold;
    color: #676767;
    text-decoration: none;
    padding: 5px 10px;
    transition: color 0.3s;
    background: none;
    border: none;
    cursor: pointer;

    &.router-link-exact-active {
      color: #00adb5;
    }

    &:hover {
      color: #007c8a64;
    }
  }
}

.audio-controls,
.sound-controls {
  position: fixed;
  z-index: 1000;
  background-color: transparent; 
  border-radius: 0; 
  padding: 10px;
  font-family: 'mojFont', sans-serif; 
  color: #000; 
}

.audio-controls {
  bottom: 60px;
  right: 20px;
}

.sound-controls {
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
}

.control-button,
.volume-button,
.toggle-controls-button {
  background-color: transparent; 
  color: #000; 
  border: none; 
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  font-family: 'mojFont', sans-serif; 
}

.control-button:hover,
.volume-button:hover,
.toggle-controls-button:hover {
  color: #000;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    padding: 10px;
    a {
      padding: 10px 15px;
      font-size: 14px;
    }
  }

  .control-button,
  .volume-button,
  .toggle-controls-button {
    padding: 8px;
    font-size: 14px;
  }

  .audio-controls {
    bottom: 50px;
  }

  .sound-controls {
    bottom: 10px;
    right: 10px;
  }
}

@media (max-width: 480px) {
  nav {
    padding: 5px;
    a {
      padding: 8px 12px;
      font-size: 12px;
    }
  }

  .control-button,
  .volume-button,
  .toggle-controls-button {
    padding: 6px;
    font-size: 12px;
  }

  .audio-controls {
    bottom: 40px;
  }

  .sound-controls {
    bottom: 5px;
    right: 5px;
  }
}
</style>


<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { doc, getDoc } from 'firebase/firestore';
import { ref, onMounted } from 'vue'; 
import db from "@/main.js";

export default {
  setup() {
    const isLoggedIn = ref(false); 
    const isAdmin = ref(false);
    const router = useRouter();

    onMounted(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          isLoggedIn.value = true;
          
          const userRef = doc(db, 'users', user.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const userData = userSnap.data();
            isAdmin.value = userData.isAdmin || false;
            console.log("Admin status:", isAdmin.value);
          } else {
            console.log("No such user document in Firestore!");
            isAdmin.value = false;
          }
        } else {
          isLoggedIn.value = false;
          isAdmin.value = false;
        }
      });
    });

    const handleSignOut = async () => {
      try {
        const auth = getAuth();
        await signOut(auth);
        router.push('/'); 
      } catch (error) {
        console.error("Error signing out:", error);
      }
    };

    return {
      isLoggedIn,
      isAdmin,
      handleSignOut
    };
  },

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
      isMuted: false,
      userInteracted: false
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
    },
    userInteraction() {
      if (!this.userInteracted) {
        this.userInteracted = true;
        const audio = this.$refs.backgroundAudio;
        if (audio) {
          audio.play().catch(error => {
            console.log("Autoplay blocked or error occurred:", error);
          });
        }
      }
    }
  },
  mounted() {
    const audio = this.$refs.backgroundAudio;
    if (audio) {
      audio.volume = 1.0;
      audio.addEventListener('ended', this.nextAudio);
      audio.addEventListener('canplaythrough', () => {
        if (this.userInteracted) {
          audio.play().catch(error => {
            console.log("Autoplay blocked or error occurred:", error);
          });
        }
      });
      audio.play().catch(error => {
        console.log("Autoplay blocked or error occurred:", error);
        window.addEventListener('click', this.userInteraction, { once: true });
      });
    }
  }
}
</script>
