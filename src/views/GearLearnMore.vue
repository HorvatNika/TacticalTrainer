<template>
  <div class="gear-page">
    <h1>TACTICAL GEAR OVERVIEW</h1>
    <div v-if="selectedGear" class="overlay" @click="selectedGear = null"></div>
    <div v-if="selectedGear" class="info-box">
      <h2 class="gear-name">{{ selectedGear.name }}</h2>
      <p><strong>Description:</strong> {{ selectedGear.description }}</p>
      <p><strong>Material:</strong> {{ selectedGear.material }}</p>
      <p><strong>Weight:</strong> {{ selectedGear.weight }}</p>
    </div>
    <div class="gear-container">
      <button @click="prevPage" class="nav-button prev" :disabled="currentPage === 0">❮</button>
      <div class="gear-row">
        <div 
          v-for="gear in gearItemsToShow"
          :key="gear.id" 
          class="gear-box" 
          @click="selectGear(gear)"
        >
          <img :src="gear.image" :alt="gear.name">
          <p>{{ gear.name }}</p>
        </div>
      </div>
      <button @click="nextPage" class="nav-button next" :disabled="isLastPage">❯</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GearPage',
  data() {
    return {
      gearItems: [
        { 
          id: 1, 
          name: 'Tactical Vest', 
          image: require('@/assets/tacticalvest.jpg'),
          description: 'A lightweight, modular vest used for carrying essential tactical gear.',
          material: 'Nylon and Kevlar',
          weight: '2.5 kg'
        },
        { 
          id: 2, 
          name: 'Combat Helmet', 
          image: require('@/assets/combathelmet.jpg'),
          description: 'A protective helmet designed to safeguard against ballistic and impact threats.',
          material: 'Kevlar',
          weight: '1.4 kg'
        },
        { 
          id: 3, 
          name: 'Molle Pouch', 
          image: require('@/assets/mollepouch.jpg'),
          description: 'A versatile pouch that can be attached to MOLLE systems for carrying additional equipment.',
          material: 'Nylon',
          weight: '0.3 kg'
        },
        { 
          id: 4, 
          name: 'Ballistic Goggles', 
          image: require('@/assets/ballisticgoggles.jpg'),
          description: 'High-impact resistant goggles that protect the eyes from debris and ballistic threats.',
          material: 'Polycarbonate lenses',
          weight: '0.15 kg'
        },
        { 
          id: 5, 
          name: 'Tactical Gloves', 
          image: require('@/assets/tacticalgloves.jpg'),
          description: 'Gloves designed for combat scenarios, offering protection and dexterity.',
          material: 'Leather and Kevlar',
          weight: '0.2 kg'
        },
        { 
          id: 6, 
          name: 'Elbow Pads', 
          image: require('@/assets/elbowpads.jpg'),
          description: 'Protective pads worn on the elbows to prevent injuries during tactical operations.',
          material: 'Neoprene with hard plastic caps',
          weight: '0.25 kg'
        },
        { 
          id: 7, 
          name: 'Knee Pads', 
          image: require('@/assets/kneepads.jpg'),
          description: 'Durable knee protection for high-intensity operations and tactical movements.',
          material: 'Neoprene with hard plastic caps',
          weight: '0.3 kg'
        }
      ],
      selectedGear: null,
      currentPage: 0,
      itemsPerPage: 4
    };
  },
  computed: {
    gearCount() {
      return this.gearItems.length;
    },
    totalPages() {
      return Math.ceil(this.gearCount / this.itemsPerPage);
    },
    gearItemsToShow() {
      const start = this.currentPage * this.itemsPerPage;
      return this.gearItems.slice(start, start + this.itemsPerPage);
    },
    isLastPage() {
      return this.currentPage === this.totalPages - 1;
    }
  },
  methods: {
    selectGear(gear) {
      this.selectedGear = gear;
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
.gear-page {
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

.gear-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; 
  margin-top: 110px; 
}

.gear-row {
  display: flex;
  gap: 50px;
  flex-wrap: nowrap;
}

.gear-box {
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

.gear-box img {
  width: 100%; 
  height: 250px; 
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0.7;
}

.gear-box:hover img {
  opacity: 1;
}

.gear-box p {
  margin-top: 10px;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: 'mojFont', sans-serif;
  color: inherit;
}

.gear-box:hover {
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
  top: 20%;
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

.gear-name {
  font-size: 2rem;
  font-weight: bold;
  color: #676767;
  position: relative;
  padding-bottom: 5px; 
}

.gear-name::after {
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
