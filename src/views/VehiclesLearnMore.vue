<template>
  <div class="vehicles-page">
    <h1>INFANTRY TRANSPORT VEHICLES</h1>
    <div v-if="selectedVehicle" class="overlay" @click="selectedVehicle = null"></div>
    <div v-if="selectedVehicle" class="info-box">
      <h2 class="vehicle-name">{{ selectedVehicle.name }}</h2>
      <p><strong>Manufacturer:</strong> {{ selectedVehicle.manufacturer }}</p>
      <p><strong>Type:</strong> {{ selectedVehicle.type }}</p>
      <p><strong>Armament:</strong> {{ selectedVehicle.armament }}</p>
      <p><strong>Details:</strong> {{ selectedVehicle.details }}</p>
    </div>
    <div class="vehicle-container">
      <button @click="prevPage" class="nav-button prev" :disabled="currentPage === 0">❮</button>
      <div class="vehicle-row">
        <div 
          v-for="vehicle in vehiclesToShow"
          :key="vehicle.id" 
          class="vehicle-box" 
          @click="selectVehicle(vehicle)"
        >
          <img :src="vehicle.image" :alt="vehicle.name">
          <p>{{ vehicle.name }}</p>
        </div>
      </div>
      <button @click="nextPage" class="nav-button next" :disabled="isLastPage">❯</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VehiclesPage',
  data() {
    return {
      vehicles: [
        { 
          id: 1, 
          name: 'Humvee', 
          image: require('@/assets/humvee.jpg'),
          manufacturer: 'AM General',
          type: '4x4 Utility Vehicle',
          armament: 'Optional weapon mounts',
          details: 'The Humvee is a highly versatile military vehicle used for various tasks. Known for its durability and off-road capabilities, it has been widely used in combat and peacekeeping missions.'
        },
        { 
          id: 2, 
          name: 'MRAP', 
          image: require('@/assets/mrap.jpg'),
          manufacturer: 'Various',
          type: 'Mine-Resistant Ambush Protected Vehicle',
          armament: 'Various weapon configurations',
          details: 'MRAP vehicles are designed to protect occupants from improvised explosive devices (IEDs) and small arms fire. They are heavily armored and provide high protection in combat situations.'
        },
        { 
          id: 3, 
          name: 'Stryker', 
          image: require('@/assets/stryker.jpg'),
          manufacturer: 'General Dynamics',
          type: 'Armored Fighting Vehicle',
          armament: 'Various, including 30mm cannon',
          details: 'The Stryker is an eight-wheeled armored vehicle that provides a balance of mobility, protection, and firepower. It is used for a variety of roles, including infantry transport and reconnaissance.'
        },
      ],
      selectedVehicle: null,
      currentPage: 0,
      itemsPerPage: 4
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.vehicles.length / this.itemsPerPage);
    },
    vehiclesToShow() {
      const start = this.currentPage * this.itemsPerPage;
      return this.vehicles.slice(start, start + this.itemsPerPage);
    },
    isLastPage() {
      return this.currentPage === this.totalPages - 1;
    }
  },
  methods: {
    selectVehicle(vehicle) {
      this.selectedVehicle = vehicle;
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
.vehicles-page {
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

.vehicle-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 110px;
}

.vehicle-row {
  display: flex;
  gap: 50px;
  flex-wrap: nowrap;
}

.vehicle-box {
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

.vehicle-box img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0.7;
}

.vehicle-box:hover img {
  opacity: 1;
}

.vehicle-box p {
  margin-top: 10px;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: 'mojFont', sans-serif;
  color: inherit;
}

.vehicle-box:hover {
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

.vehicle-name {
  font-size: 2rem;
  font-weight: bold;
  color: #676767;
  position: relative;
  padding-bottom: 5px;
}

.vehicle-name::after {
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
