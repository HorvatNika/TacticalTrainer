<template>
  <div class="ammo-page">
    <h1>AMMUNITION OVERVIEW</h1>
    <div v-if="selectedAmmo" class="overlay" @click="selectedAmmo = null"></div>
    <div v-if="selectedAmmo" class="info-box">
      <h2 class="ammo-name">{{ selectedAmmo.name }}</h2>
      <p><strong>Description:</strong> {{ selectedAmmo.description }}</p>
      <p><strong>Caliber:</strong> {{ selectedAmmo.caliber }}</p>
      <p><strong>Weight:</strong> {{ selectedAmmo.weight }}</p>
    </div>
    <div class="ammo-container">
      <button @click="prevPage" class="nav-button prev" :disabled="currentPage === 0">❮</button>
      <div class="ammo-row">
        <div 
          v-for="(ammo) in ammoToShow"
          :key="ammo.id" 
          class="ammo-box" 
          @click="selectAmmo(ammo)"
        >
          <img :src="ammo.image" :alt="ammo.name">
          <p>{{ ammo.name }}</p>
        </div>
      </div>
      <button @click="nextPage" class="nav-button next" :disabled="isLastPage">❯</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AmmoPage',
  data() {
    return {
      ammoItems: [
        { 
          id: 1, 
          name: '5.56×45mm NATO', 
          image: require('@/assets/5.56×45mmnato.jpg'),
          description: 'A standard small caliber round used by NATO forces, known for its accuracy and range.',
          caliber: '5.56×45mm',
          weight: '12 grams'
        },
      ],
      selectedAmmo: null,
      currentPage: 0,
      itemsPerPage: 4
    };
  },
  computed: {
    ammoCount() {
      return this.ammoItems.length;
    },
    totalPages() {
      return Math.ceil(this.ammoCount / this.itemsPerPage);
    },
    ammoToShow() {
      const start = this.currentPage * this.itemsPerPage;
      return this.ammoItems.slice(start, start + this.itemsPerPage);
    },
    isLastPage() {
      return this.currentPage === this.totalPages - 1;
    }
  },
  methods: {
    selectAmmo(ammo) {
      this.selectedAmmo = ammo;
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
.ammo-page {
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

.ammo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; 
  margin-top: 110px; 
}

.ammo-row {
  display: flex;
  gap: 50px;
  flex-wrap: nowrap;
}

.ammo-box {
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

.ammo-box img {
  width: 100%; 
  height: 250px; 
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0.7;
}

.ammo-box:hover img {
  opacity: 1;
}

.ammo-box p {
  margin-top: 10px;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: 'mojFont', sans-serif;
  color: inherit;
}

.ammo-box:hover {
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
  font-size: 1rem;
  color: #7b7b7b; 
}

.ammo-name {
  font-size: 2rem;
  font-weight: bold;
  color: #676767;
  position: relative;
  padding-bottom: 5px; 
}

.ammo-name::after {
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
