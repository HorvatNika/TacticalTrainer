<template>
  <div class="pistols-page">
    <h1>PISTOLS</h1>
    <div v-if="selectedPistol" class="overlay" @click="selectedPistol = null"></div>
    <div v-if="selectedPistol" class="info-box">
      <h2 class="pistol-name">{{ selectedPistol.name }}</h2>
      <p><strong>Manufacturer:</strong> {{ selectedPistol.manufacturer }}</p>
      <p><strong>Caliber:</strong> {{ selectedPistol.caliber }}</p>
      <p><strong>Used By:</strong> {{ selectedPistol.usedBy }}</p>
      <p><strong>Details:</strong> {{ selectedPistol.details }}</p>
    </div>
    <div class="pistol-container">
      <button @click="prevPage" class="nav-button prev" :disabled="currentPage === 0">❮</button>
      <div class="pistol-row">
        <div 
          v-for="(pistol, index) in pistolsToShow"
          :key="pistol.id" 
          class="pistol-box" 
          @click="selectPistol(pistol)"
        >
          <img :src="pistol.image" :alt="pistol.name">
          <p>{{ pistol.name }}</p>
        </div>
      </div>
      <button @click="nextPage" class="nav-button next" :disabled="isLastPage">❯</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PistolsPage',
  data() {
    return {
      pistols: [
        { 
          id: 1, 
          name: 'Glock 17', 
          image: require('@/assets/glock17.png'),
          manufacturer: 'Glock Ges.m.b.H',
          caliber: '9mm',
          usedBy: 'Various military and law enforcement agencies worldwide',
          details: 'The Glock 17 is known for its reliability, durability, and modularity. It features a polymer frame and a safe action system that provides a high level of safety and simplicity in operation.'
        },
        { 
          id: 2, 
          name: 'SIG P320', 
          image: require('@/assets/sigp320.jpg'),
          manufacturer: 'SIG Sauer',
          caliber: '9mm, .40 S&W, .357 SIG',
          usedBy: 'U.S. Army, various law enforcement agencies',
          details: 'The SIG P320 is renowned for its modular design, allowing users to easily switch calibers and configurations. It features a striker-fired mechanism and is known for its accuracy and ease of use.'
        },
        { 
          id: 3, 
          name: 'Beretta M9', 
          image: require('@/assets/barettam9.jpg'),
          manufacturer: 'Beretta',
          caliber: '9mm',
          usedBy: 'U.S. Armed Forces, various law enforcement agencies',
          details: 'The Beretta M9 is a well-known military sidearm with a double/single action system. It features an open slide design that reduces the chances of jamming and is favored for its accuracy and reliability.'
        },
        { 
          id: 4, 
          name: 'Heckler & Koch USP', 
          image: require('@/assets/heckler&kochusp.jpg'),
          manufacturer: 'Heckler & Koch',
          caliber: '9mm, .40 S&W, .45 ACP',
          usedBy: 'Various military and law enforcement agencies worldwide',
          details: 'The HK USP is known for its ruggedness and versatility. It features a polymer frame, recoil reduction system, and is available in various calibers. Its reliability makes it a popular choice among professionals.'
        },
        { 
          id: 5, 
          name: 'CZ P-10', 
          image: require('@/assets/czp-10.jpg'),
          manufacturer: 'Česká zbrojovka',
          caliber: '9mm',
          usedBy: 'Various military and law enforcement agencies',
          details: 'The CZ P-10 is a striker-fired pistol with a reputation for excellent ergonomics and accuracy. It features a modular grip system and is designed for both comfort and performance.'
        },
        { 
          id: 6, 
          name: 'Walther P99', 
          image: require('@/assets/waltherp99.jpg'),
          manufacturer: 'Walther Arms',
          caliber: '9mm, .40 S&W',
          usedBy: 'German police forces, various military and law enforcement agencies',
          details: 'The Walther P99 is known for its ergonomic design and distinctive trigger system. It features a unique firing pin block safety and is praised for its comfort and precision.'
        },
      ],
      selectedPistol: null,
      currentPage: 0,
      itemsPerPage: 4
    };
  },
  computed: {
    pistolCount() {
      return this.pistols.length;
    },
    totalPages() {
      return Math.ceil(this.pistolCount / this.itemsPerPage);
    },
    pistolsToShow() {
      const start = this.currentPage * this.itemsPerPage;
      return this.pistols.slice(start, start + this.itemsPerPage);
    },
    isLastPage() {
      return this.currentPage === this.totalPages - 1;
    }
  },
  methods: {
    selectPistol(pistol) {
      this.selectedPistol = pistol;
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
.pistols-page {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 2.5rem; 
  color: #676767;
  font-family: 'MojFont', sans-serif;
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

.pistol-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 110px; 
}

.pistol-row {
  display: flex;
  gap: 50px;
  flex-wrap: nowrap;
}

.pistol-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 250px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  text-decoration: none;
  color: #7b7b7b;
  cursor: pointer;
}

.pistol-box img {
  width: 100%;
  height: 250px; 
  object-fit: contain;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0.7;
}

.pistol-box:hover img {
  opacity: 1;
}

.pistol-box p {
  margin-top: 10px;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: 'MojFont', sans-serif;
  color: inherit;
}

.pistol-box:hover {
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
  font-family: 'MojFont', sans-serif; 
}

.info-box p {
  margin-top: 10px;
  font-size: 1.2rem;
  color: #7b7b7b; 
}

.pistol-name {
  font-size: 2rem;
  font-weight: bold;
  color: #676767;
  position: relative;
  padding-bottom: 5px; 
}

.pistol-name::after {
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
