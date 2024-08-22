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
      <div class="vehicle-row">
        <div v-for="vehicle in vehicles.slice(0, 4)" :key="vehicle.id" class="vehicle-box" @click="selectVehicle(vehicle)">
          <img :src="vehicle.image" :alt="vehicle.name">
          <p>{{ vehicle.name }}</p>
        </div>
      </div>
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
          image: require('@/assets/pozadina.jpg'),
          manufacturer: 'AM General',
          type: '4x4 Utility Vehicle',
          armament: 'Optional weapon mounts',
          details: 'The Humvee is a highly versatile military vehicle used for various tasks. Known for its durability and off-road capabilities, it has been widely used in combat and peacekeeping missions.'
        },
        { 
          id: 2, 
          name: 'MRAP', 
          image: require('@/assets/pozadina.jpg'),
          manufacturer: 'Various',
          type: 'Mine-Resistant Ambush Protected Vehicle',
          armament: 'Various weapon configurations',
          details: 'MRAP vehicles are designed to protect occupants from improvised explosive devices (IEDs) and small arms fire. They are heavily armored and provide high protection in combat situations.'
        },
        { 
          id: 3, 
          name: 'Stryker', 
          image: require('@/assets/pozadina.jpg'),
          manufacturer: 'General Dynamics',
          type: 'Armored Fighting Vehicle',
          armament: 'Various, including 30mm cannon',
          details: 'The Stryker is an eight-wheeled armored vehicle that provides a balance of mobility, protection, and firepower. It is used for a variety of roles, including infantry transport and reconnaissance.'
        },
        { 
          id: 4, 
          name: 'M113', 
          image: require('@/assets/pozadina.jpg'),
          manufacturer: 'Boeing',
          type: 'Armored Personnel Carrier',
          armament: 'Various, including M2 Browning machine gun',
          details: 'The M113 is an iconic tracked armored personnel carrier used by many armed forces around the world. It is known for its simplicity and reliability in transporting troops and equipment.'
        },
        { 
          id: 5, 
          name: 'Cougar', 
          image: require('@/assets/pozadina.jpg'),
          manufacturer: 'Oshkosh Defense',
          type: 'Mine-Resistant Ambush Protected Vehicle',
          armament: 'Various weapon configurations',
          details: 'The Cougar MRAP is designed to withstand IED blasts and provide protection to its occupants. It is used extensively in military operations and provides a high level of survivability.'
        }
      ],
      selectedVehicle: null
    };
  },
  methods: {
    selectVehicle(vehicle) {
      this.selectedVehicle = vehicle;
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
  background-color: #00adb5;
  margin: 5px auto;
  border-radius: 30px;
}

.vehicle-container {
  display: flex;
  flex-direction: column;
  gap: 30px; 
  margin-top: 60px; 
}

.vehicle-row {
  display: flex;
  justify-content: center;
  gap: 80px; 
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
  color: #7c7c7c;
  cursor: pointer;
}

.vehicle-box img {
  width: 250px; 
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
  font-size: 1.2rem;
  color: #676767; 
}

.vehicle-name {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  position: relative;
  padding-bottom: 5px; 
}

.vehicle-name::after {
  content: '';
  display: block;
  width: 40%;
  height: 3px;
  background-color: #00adb5;
  margin-top: 5px;
  margin-bottom: 7px;
  border-radius: 30px;
}
</style>
