<template>
  <div class="test-score-rank">
    
    <div class="image-container">
      <router-link to="/scorerank" class="image-box">
        <img src="@/assets/pozadina.jpg" alt="Score Rank">
        <p>SCORE RANK</p>
      </router-link>
    </div>

    <h1>TEST</h1>
    <div class="image-container">
      <div class="image-box" v-for="test in tests" :key="test.id" :data-test-id="test.id" @click="showTestInfo(test.id)">
        <img src="@/assets/pozadina.jpg" alt="Test">
        <h2>{{ test.title }}</h2>
        <p>{{ test.description }}</p>
        <p>Questions: {{ test.questions.length }}</p>
      </div>
    </div>

    

    <div v-if="showingTestInfo" class="overlay" @click="closeTestInfo"></div>
    <div v-if="showingTestInfo" class="info-box">
      <h2 class="instructions-title">TEST INSTRUCTIONS</h2>
      <p>Please read the instructions below carefully before starting the test:</p>
      <ul>
        <li>The test consists of multiple-choice questions.</li>
        <li>The total score is based on the number of correct answers and the time taken to complete the test.</li>
        <li>Each incorrect answer will result in -1 point.</li>
        <li>Each correct answer will be scored based on the difficulty of the question.</li>
        <li>Your final score will determine your rank based on the total points and the time taken.</li>
      </ul>
      <div class="button-container">
        <button @click="startTest(selectedTestId)">START TEST</button>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import db from '@/main';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default {
  name: 'TestScoreRank',
  data() {
    return {
      showingTestInfo: false,
      tests: [],
      highestScore: 0,
      yourScore: 0,
      testsLoaded: false,
      user: null,
      selectedTestId: null
    };
  },
  async mounted() {
    await this.loadUser();
    await this.loadTests();
    await this.loadScores();
  },
  methods: {
    showTestInfo(testId) {
      this.showingTestInfo = true;
      this.selectedTestId = testId;
    },
    closeTestInfo() {
      this.showingTestInfo = false;
    },
    async loadUser() {
      try {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            this.user = user;
          } else {
            this.user = null;
          }
        });
      } catch (error) {
        console.error('Error loading user:', error);
        this.user = null;
      }
    },
    async loadTests() {
      try {
        const testsRef = collection(db, 'tests');
        const testsSnapshot = await getDocs(testsRef);
        this.tests = testsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch (error) {
        console.error('Error loading tests:', error);
        this.tests = [];
      } finally {
        this.testsLoaded = true;
      }
    },
    async loadScores() {
      if (this.user) {
        try {
          const userRef = doc(db, 'users', this.user.uid);
          const userSnapshot = await getDoc(userRef);
          if (userSnapshot.exists()) {
            const userData = userSnapshot.data();
            this.highestScore = userData.highestScore || 0;
            this.yourScore = userData.score || 0;
          } else {
            this.highestScore = 0;
            this.yourScore = 0;
          }
        } catch (error) {
          console.error('Error loading scores:', error);
          // Handle the error, e.g., display an error message to the user
          this.highestScore = 0;
          this.yourScore = 0;
        }
      } else {
        this.highestScore = 0;
        this.yourScore = 0;
      }
    },
    startTest(testId) {
      this.closeTestInfo();
      this.$router.push(`/test/${testId}`);
    },
    goToScoreRank() {
      this.$router.push('/scorerank');
    }
  }
};
</script>

<style scoped>
.test-score-rank {
  text-align: center;
  padding: 20px;
}

.scoreboard {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 20px;
}

.scoreboard h2 {
  margin-top: 0;
}

.score-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  font-family: 'mojFont', sans-serif;
  position: relative;
  display: inline-block;
  color: #676767;
}

h1::before,
h1::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 25px;
  height: 2px;
  background-color: #d4af37;
  transform: translateY(-50%);
}

h1::before {
  left: -40px;
}

h1::after {
  right: -40px;
}

.test-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
}

.test-card {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
}

.test-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.test-card h2 {
  margin-top: 0;
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
  color: #676767;
}

.instructions-title {
  font-size: 2rem;
  font-weight: bold;
  color: #676767;
  position: relative;
  padding-bottom: 5px;
}

.instructions-title::after {
  content: '';
  display: block;
  width: 40%;
  height: 3px;
  background-color: #007c8a64;
  margin-top: 5px;
  margin-bottom: 7px;
  border-radius: 0px;
}

.info-box p,
.info-box ul {
  font-size: 1rem;
  color: #7b7b7b;
  margin-top: 10px;
}

.info-box ul {
  margin: 10px 0;
}

.info-box li {
  margin-bottom: 5px;
}

.button-container {
  text-align: center;
}

.info-box button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007c8a64;
  color: white;
  border: none;
  border-radius: 0px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.info-box button:hover {
  background-color: #007c8a89;
}

.image-container {
  display: flex;
  justify-content: center;
  gap: 80px;
  padding: 0 20px;
  margin-top: 30px;
}

.image-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  width: 250px;
  text-decoration: none;
  color: #7b7b7b;
  position: relative;
  top: -10px;
  cursor: pointer;
}

.image-box img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0.7;
}

.image-box:hover img {
  opacity: 1;
}

.image-box p {
  margin-top: 10px;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: 'mojFont', sans-serif;
  color: inherit;
}

.image-box:hover {
  transform: scale(1.1);
}
</style>