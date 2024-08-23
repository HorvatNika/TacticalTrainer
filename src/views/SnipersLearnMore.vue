<template>
  <div class="snipers-page">
    <h1>SNIPERS</h1>
    <div v-if="selectedSniper" class="overlay" @click="selectedSniper = null"></div>
    <div v-if="selectedSniper" class="info-box">
      <h2 class="sniper-name">{{ selectedSniper.name }}</h2>
      <p><strong>Manufacturer:</strong> {{ selectedSniper.manufacturer }}</p>
      <p><strong>Caliber:</strong> {{ selectedSniper.caliber }}</p>
      <p><strong>Used By:</strong> {{ selectedSniper.usedBy }}</p>
      <p><strong>Details:</strong> {{ selectedSniper.details }}</p>
    </div>
    <div class="sniper-container">
      <button @click="prevPage" class="nav-button prev" :disabled="currentPage === 0">❮</button>
      <div class="sniper-row">
        <div 
          v-for="(sniper, index) in snipersToShow"
          :key="sniper.id" 
          class="sniper-box" 
          @click="selectSniper(sniper)"
        >
          <img :src="sniper.image" :alt="sniper.name">
          <p>{{ sniper.name }}</p>
        </div>
      </div>
      <button @click="nextPage" class="nav-button next" :disabled="isLastPage">❯</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnipersPage',
  data() {
    return {
      snipers: [
        { 
          id: 1, 
          name: 'M40A5', 
          image: require('@/assets/m40a5.jpg'),
          manufacturer: 'Remington Arms',
          caliber: '7.62×51mm NATO',
          usedBy: 'U.S. Marine Corps, various military units',
          details: 'The M40A5 is a bolt-action sniper rifle designed for precision and reliability. It features a durable construction and is known for its accuracy in long-range engagements.'
        },
        { 
          id: 2, 
          name: 'CheyTac M200', 
          image: require('@/assets/cheytacm200.jpg'),
          manufacturer: 'CheyTac USA',
          caliber: '.408 CheyTac, .338 Lapua Magnum',
          usedBy: 'Various military and law enforcement units',
          details: 'The CheyTac M200 is a long-range precision rifle designed for extreme accuracy. It is capable of engaging targets at over 2,000 meters and is known for its innovative design and powerful ammunition.'
        },
        { 
          id: 3, 
          name: 'L96A1', 
          image: require('@/assets/l96a1.jpg'),
          manufacturer: 'Accuracy International',
          caliber: '7.62×51mm NATO',
          usedBy: 'British Armed Forces, various military forces',
          details: 'The L96A1 is a bolt-action sniper rifle known for its accuracy and reliability. It has been widely used by the British Army and other military forces for its exceptional long-range performance.'
        },
        { 
          id: 4, 
          name: 'M82 Barrett', 
          image: require('@/assets/m82barret.jpg'),
          manufacturer: 'Barrett Firearms Manufacturing',
          caliber: '.50 BMG',
          usedBy: 'U.S. Armed Forces, various military and law enforcement units',
          details: 'The M82 Barrett is a semi-automatic anti-materiel rifle chambered in .50 BMG. It is known for its high firepower and is used for long-range engagements and disabling equipment.'
        }
      ],
      selectedSniper: null,
      currentPage: 0,
      itemsPerPage: 4
    };
  },
  computed: {
    sniperCount() {
      return this.snipers.length;
    },
    totalPages() {
      return Math.ceil(this.sniperCount / this.itemsPerPage);
    },
    snipersToShow() {
      const start = this.currentPage * this.itemsPerPage;
      return this.snipers.slice(start, start + this.itemsPerPage);
    },
    isLastPage() {
      return this.currentPage === this.totalPages - 1;
    }
  },
  methods: {
    selectSniper(sniper) {
      this.selectedSniper = sniper;
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
.snipers-page {
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

.sniper-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; 
  margin-top: 110px; 
}

.sniper-row {
  display: flex;
  gap: 50px;
  flex-wrap: nowrap;
}

.sniper-box {
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

.sniper-box img {
  width: 100%; 
  height: 250px; 
  object-fit: contain;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0.7;
}

.sniper-box:hover img {
  opacity: 1;
}

.sniper-box p {
  margin-top: 10px;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: 'mojFont', sans-serif;
  color: inherit;
}

.sniper-box:hover {
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

.sniper-name {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  position: relative;
  padding-bottom: 5px; 
}

.sniper-name::after {
  content: '';
  display: block;
  width: 40%;
  height: 3px;
  background-color: #00adb5;
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
  color: #00adb5;
}

.nav-button:disabled {
  color: #b0b0b0; 
  cursor: not-allowed;
  opacity: 0.5; 
}

</style>
