<template>
  <div class="rifles-page">
    <h1>RIFLES</h1>
    <div v-if="selectedRifle" class="overlay" @click="selectedRifle = null"></div>
    <div v-if="selectedRifle" class="info-box">
      <h2 class="rifle-name">{{ selectedRifle.name }}</h2>
      <p><strong>Manufacturer:</strong> {{ selectedRifle.manufacturer }}</p>
      <p><strong>Caliber:</strong> {{ selectedRifle.caliber }}</p>
      <p><strong>Used By:</strong> {{ selectedRifle.usedBy }}</p>
      <p><strong>Details:</strong> {{ selectedRifle.details }}</p>
    </div>
    <div class="rifle-container">
      <button @click="prevPage" class="nav-button prev" :disabled="currentPage === 0">❮</button>
      <div class="rifle-row">
        <div 
          v-for="(rifle, index) in riflesToShow"
          :key="rifle.id" 
          class="rifle-box" 
          @click="selectRifle(rifle)"
        >
          <img :src="rifle.image" :alt="rifle.name">
          <p>{{ rifle.name }}</p>
        </div>
      </div>
      <button @click="nextPage" class="nav-button next" :disabled="isLastPage">❯</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RiflesPage',
  data() {
    return {
      rifles: [
        { 
          id: 1, 
          name: 'AR-15', 
          image: require('@/assets/ar-15.jpg'),
          manufacturer: 'Armalite',
          caliber: '5.56×45mm NATO',
          usedBy: 'Civilian, law enforcement, and military users worldwide',
          details: 'The AR-15 is a lightweight, magazine-fed, gas-operated rifle that is highly customizable and popular for its accuracy and versatility.'
        },
        { 
          id: 2, 
          name: 'AK-47', 
          image: require('@/assets/ak-47.jpg'),
          manufacturer: 'Kalashnikov Concern',
          caliber: '7.62×39mm',
          usedBy: 'Military forces worldwide',
          details: 'The AK-47 is renowned for its reliability under harsh conditions. It features a gas-operated, rotating bolt system and is one of the most widely used rifles in the world.'
        },
        { 
          id: 3, 
          name: 'M4 Carbine', 
          image: require('@/assets/m4carbine.jpg'),
          manufacturer: 'Colt Defense',
          caliber: '5.56×45mm NATO',
          usedBy: 'U.S. Armed Forces, law enforcement agencies',
          details: 'The M4 Carbine is a shorter and lighter variant of the M16A2 assault rifle. It is gas-operated, air-cooled, and is known for its mobility and adaptability in close quarters.'
        },
        { 
          id: 4, 
          name: 'G36', 
          image: require('@/assets/g36.jpg'),
          manufacturer: 'Heckler & Koch',
          caliber: '5.56×45mm NATO',
          usedBy: 'German Armed Forces, various military and law enforcement agencies',
          details: 'The G36 is a selective-fire 5.56mm rifle that is praised for its reliability, ease of maintenance, and accuracy in a variety of conditions.'
        },
        { 
          id: 5, 
          name: 'FN SCAR', 
          image: require('@/assets/fnscar.jpg'),
          manufacturer: 'FN Herstal',
          caliber: '5.56×45mm NATO, 7.62×51mm NATO',
          usedBy: 'U.S. Special Operations Forces, various military forces',
          details: 'The FN SCAR is a modular rifle system designed for the U.S. Special Operations Command (SOCOM). It is available in two main variants and is known for its adaptability and superior performance in combat.'
        }
      ],
      selectedRifle: null,
      currentPage: 0,
      itemsPerPage: 4
    };
  },
  computed: {
    rifleCount() {
      return this.rifles.length;
    },
    totalPages() {
      return Math.ceil(this.rifleCount / this.itemsPerPage);
    },
    riflesToShow() {
      const start = this.currentPage * this.itemsPerPage;
      return this.rifles.slice(start, start + this.itemsPerPage);
    },
    isLastPage() {
      return this.currentPage === this.totalPages - 1;
    }
  },
  methods: {
    selectRifle(rifle) {
      this.selectedRifle = rifle;
    },
    nextPage() {
      if (!this.isLastPage) {
        this.currentPage += 1;
      }
    },
    prevPage() {
      if (this.currentPage > 0) {
        this.currentPage -= 1;
      }
    }
  }
};
</script>

<style scoped>
.rifles-page {
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

.rifle-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 110px; 
}

.rifle-row {
  display: flex;
  gap: 50px;
  flex-wrap: nowrap;
}

.rifle-box {
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

.rifle-box img {
  width: 100%; 
  height: 250px; 
  object-fit: contain;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0.7;
}

.rifle-box:hover img {
  opacity: 1;
}

.rifle-box p {
  margin-top: 10px;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: 'mojFont', sans-serif;
  color: inherit;
}

.rifle-box:hover {
  transform: scale(1.1);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.info-box {
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 0);
  background: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 11;
  text-align: left; 
  font-family: 'mojFont', sans-serif; 
}

.info-box p {
  margin-top: 10px;
  font-size: 1.2rem;
  color: #676767; 
}

.rifle-name {
  font-size: 2rem;
  font-weight: bold;
  color: #676767;
  position: relative;
  padding-bottom: 5px; 
}

.rifle-name::after {
  content: '';
  display: block;
  width: 40%;
  height: 3px;
  background-color: #007c8a64;
  margin-top: 5px;
  margin-bottom: 7px;
  border-radius: 30px;
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
  top: 40%; 
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