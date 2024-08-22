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
      <div class="sniper-row">
        <div v-for="sniper in snipers.slice(0, 4)" :key="sniper.id" class="sniper-box" @click="selectSniper(sniper)">
          <img :src="sniper.image" :alt="sniper.name">
          <p>{{ sniper.name }}</p>
        </div>
      </div>
      <div class="sniper-row">
        <div v-for="sniper in snipers.slice(4, 7)" :key="sniper.id" class="sniper-box" @click="selectSniper(sniper)">
          <img :src="sniper.image" :alt="sniper.name">
          <p>{{ sniper.name }}</p>
        </div>
      </div>
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
          image: require('@/assets/pozadina.jpg'),
          manufacturer: 'Remington Arms',
          caliber: '7.62×51mm NATO',
          usedBy: 'U.S. Marine Corps, various military units',
          details: 'The M40A5 is a bolt-action sniper rifle designed for precision and reliability. It features a durable construction and is known for its accuracy in long-range engagements.'
        },
        { 
          id: 2, 
          name: 'SVD Dragunov', 
          image: require('@/assets/pozadina.jpg'),
          manufacturer: 'Izhmash',
          caliber: '7.62×54mmR',
          usedBy: 'Russian Armed Forces, various military forces',
          details: 'The SVD Dragunov is a semi-automatic sniper rifle known for its robust design and reliability. It is widely used in various conflicts and is favored for its long-range accuracy.'
        },
        { 
          id: 3, 
          name: 'Remington 700', 
          image: require('@/assets/pozadina.jpg'),
          manufacturer: 'Remington Arms',
          caliber: 'Various calibers including .308 Win, .300 Win Mag',
          usedBy: 'Law enforcement, military, civilian marksmen',
          details: 'The Remington 700 is a popular bolt-action rifle renowned for its accuracy and versatility. It is available in a range of calibers and is often used for precision shooting.'
        },
        { 
          id: 4, 
          name: 'AWP', 
          image: require('@/assets/pozadina.jpg'),
          manufacturer: 'Accuracy International',
          caliber: '7.62×51mm NATO, .338 Lapua Magnum',
          usedBy: 'Various military and law enforcement agencies',
          details: 'The AWP (Arctic Warfare Police) is a high-precision sniper rifle known for its powerful ammunition and excellent accuracy. It is used in extreme conditions and is highly regarded by snipers worldwide.'
        },
        { 
          id: 5, 
          name: 'CheyTac M200', 
          image: require('@/assets/pozadina.jpg'),
          manufacturer: 'CheyTac USA',
          caliber: '.408 CheyTac, .338 Lapua Magnum',
          usedBy: 'Various military and law enforcement units',
          details: 'The CheyTac M200 is a long-range precision rifle designed for extreme accuracy. It is capable of engaging targets at over 2,000 meters and is known for its innovative design and powerful ammunition.'
        },
        { 
          id: 6, 
          name: 'Barrett M82', 
          image: require('@/assets/pozadina.jpg'),
          manufacturer: 'Barrett Firearms Manufacturing',
          caliber: '.50 BMG',
          usedBy: 'Various military and law enforcement agencies worldwide',
          details: 'The Barrett M82 is a semi-automatic anti-materiel rifle known for its devastating .50 BMG cartridge. It is used for long-range engagements and can disable vehicles and equipment.'
        },
        { 
          id: 7, 
          name: 'L96A1', 
          image: require('@/assets/pozadina.jpg'),
          manufacturer: 'Accuracy International',
          caliber: '7.62×51mm NATO',
          usedBy: 'British Armed Forces, various military forces',
          details: 'The L96A1 is a bolt-action sniper rifle known for its accuracy and reliability. It has been widely used by the British Army and other military forces for its exceptional long-range performance.'
        }
      ],
      selectedSniper: null
    };
  },
  methods: {
    selectSniper(sniper) {
      this.selectedSniper = sniper;
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
  flex-direction: column;
  gap: 30px; 
  margin-top: 60px; 
}

.sniper-row {
  display: flex;
  justify-content: center;
  gap: 80px; 
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
  width: 250px;
  height: 250px;
  object-fit: cover;
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
</style>
