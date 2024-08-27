<template>
    <div class="test-score-rank">
      <h1>TEST</h1>
      <div class="image-container">
        <div class="image-box" @click="showTestInfo">
          <img src="@/assets/pozadina.jpg" alt="Test">
          <p>TEST</p>
        </div>
        <router-link to="/scorerank" class="image-box">
          <img src="@/assets/pozadina.jpg" alt="Score Rank">
          <p>SCORE RANK</p>
        </router-link>
      </div>
  
      <div v-if="showingTestInfo" class="overlay" @click="closeTestInfo"></div>
      <div v-if="showingTestInfo" class="info-box">
        <h2>Test Instructions</h2>
        <p>Please read the instructions below carefully before starting the test:</p>
        <ul>
          <li>The test consists of multiple-choice questions.</li>
          <li>The total score is based on the number of correct answers and the time taken to complete the test.</li>
          <li>Each incorrect answer will result in -1 point.</li>
          <li>Each correct answer will be scored based on the difficulty of the question.</li>
          <li>Your final score will determine your rank based on the total points and the time taken.</li>
        </ul>
        <button @click="startTest">Start Test</button>
      </div>
    </div>
  </template>
  
  <script>
export default {
  name: 'TestScoreRank',
  data() {
    return {
      showingTestInfo: false
    };
  },
  methods: {
    showTestInfo() {
      this.showingTestInfo = true;
    },
    closeTestInfo() {
      this.showingTestInfo = false;
    },
    startTest() {
      this.closeTestInfo();
      this.$router.push('/test'); // Navigate to the test page (create this route and component separately)
    },
    goToScoreRank() {
      this.$router.push('/scorerank'); // Navigate to the score rank page programmatically
    }
  }
};
</script>

  
  <style scoped>
  .test-score-rank {
    text-align: center;
    padding: 20px;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    font-family: 'mojFont', sans-serif;
    position: relative;
    display: inline-block;
    color: #7c7c7c;
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
    color: #7c7c7c;
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
  
  .info-box ul {
    margin: 10px 0;
  }
  
  .info-box li {
    margin-bottom: 5px;
  }
  
  .info-box button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #00adb5;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .info-box button:hover {
    background-color: #007a7f;
  }
  </style>
  