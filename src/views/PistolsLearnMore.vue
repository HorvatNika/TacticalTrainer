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
      <div class="pistol-row">
        <div v-for="pistol in pistols.slice(0, 4)" :key="pistol.id" class="pistol-box" @click="selectPistol(pistol)">
          <img :src="pistol.image" :alt="pistol.name">
          <p>{{ pistol.name }}</p>
        </div>
      </div>
      <div class="pistol-row">
        <div v-for="pistol in pistols.slice(4, 8)" :key="pistol.id" class="pistol-box" @click="selectPistol(pistol)">
          <img :src="pistol.image" :alt="pistol.name">
          <p>{{ pistol.name }}</p>
        </div>
      </div>
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
          name: 'Beretta M9', 
          image: require('@/assets/barettam9.jpg'),
          manufacturer: 'Beretta',
          caliber: '9mm',
          usedBy: 'U.S. Armed Forces, various law enforcement agencies',
          details: 'The Beretta M9 is a well-known military sidearm with a double/single action system. It features an open slide design that reduces the chances of jamming and is favored for its accuracy and reliability.'
        },
        { 
          id: 3, 
          name: 'SIG P320', 
          image: require('@/assets/sigp320.jpg'),
          manufacturer: 'SIG Sauer',
          caliber: '9mm, .40 S&W, .357 SIG',
          usedBy: 'U.S. Army, various law enforcement agencies',
          details: 'The SIG P320 is renowned for its modular design, allowing users to easily switch calibers and configurations. It features a striker-fired mechanism and is known for its accuracy and ease of use.'
        },
        { 
          id: 4, 
          name: 'Walther P99', 
          image: require('@/assets/waltherp99.jpg'),
          manufacturer: 'Walther Arms',
          caliber: '9mm, .40 S&W',
          usedBy: 'German police forces, various military and law enforcement agencies',
          details: 'The Walther P99 is known for its ergonomic design and distinctive trigger system. It features a unique firing pin block safety and is praised for its comfort and precision.'
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
          name: 'Heckler & Koch USP', 
          image: require('@/assets/heckler&kochusp.jpg'),
          manufacturer: 'Heckler & Koch',
          caliber: '9mm, .40 S&W, .45 ACP',
          usedBy: 'Various military and law enforcement agencies worldwide',
          details: 'The HK USP is known for its ruggedness and versatility. It features a polymer frame, recoil reduction system, and is available in various calibers. Its reliability makes it a popular choice among professionals.'
        },
      ],
      selectedPistol: null
    };
  },
  methods: {
    selectPistol(pistol) {
      this.selectedPistol = pistol;
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
  background-color: #00adb5;
  margin: 5px auto;
  border-radius: 30px;
}

.pistol-container {
  display: flex;
  flex-direction: column;
  gap: 30px; 
  margin-top: 60px; 
}

.pistol-row {
  display: flex;
  justify-content: center;
  gap: 80px; 
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
  color: #7c7c7c;
  cursor: pointer;
}

.pistol-box img {
  width: 250px;
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
  top: 20%;
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
  color: #676767; 
}

.pistol-name {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  position: relative;
  padding-bottom: 5px; 
}

.pistol-name::after {
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
