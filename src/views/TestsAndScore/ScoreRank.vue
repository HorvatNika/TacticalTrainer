<template>
  <div class="score-rank-time">
    <h2 class="header">SCORE RANK</h2>
    <div class="table-section">
      <h3 class="table-title">OVERALL SCORES</h3>
      <div class="tabs">
        <div
          v-for="(testResult, index) in testResults"
          :key="index"
          :class="['tab', { 'active': currentTab === index }]"
          @click="currentTab = index"
        >
          Test {{ index + 1 }}
        </div>
      </div>
      <table class="score-table overall-table">
        <thead>
          <tr class="table-header">
            <th>RANK</th>
            <th>USER</th>
            <th>TOTAL SCORE</th>
            <th>TIME TAKEN</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, userIndex) in sortedScores(currentTab)" :key="user.userId">
            <td>{{ userIndex + 1 }}</td>
            <td>{{ user.userId }}</td>
            <td>{{ user.score }}</td>
            <td>{{ formatTime(user.time) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { collection, getDocs } from 'firebase/firestore';
import db from '@/main';

export default {
  name: 'ScoreRank',
  data() {
    return {
      testResults: [],
      currentTab: 0
    };
  },
  created() {
    this.fetchTestResults();
  },
  methods: {
    async fetchTestResults() {
      try {
        const testsRef = collection(db, 'tests');
        const querySnapshot = await getDocs(testsRef);

        this.testResults = await Promise.all(
          querySnapshot.docs.map(async (testDoc) => {
            const testId = testDoc.id;
            const testRef = doc(db, 'tests', testId);
            const resultsRef = collection(testRef, 'results');
            const resultsSnapshot = await getDocs(resultsRef);

            console.log("PASS  NESTOOOO 1")
            console.log("PASS 2")
            return {
              id: testId,
              results: resultsSnapshot.docs.map((resultDoc) => ({
                userId: resultDoc.data().userId,
                score: resultDoc.data().score,
                time: resultDoc.data().time
              }))
            };
          })
        );
      } catch (error) {
        console.error('Error fetching test results:', error);
      }
    },
    sortedScores(tabIndex) {
      return this.testResults[tabIndex].results
        .sort((a, b) => {
          if (b.score === a.score) {
            return a.time - b.time;
          }
          return b.score - a.score;
        });
    },
    formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes}m ${seconds}s`;
    },
    convertTimeToMinutes(time) {
      if (typeof time !== 'string') {
        console.error('Expected time to be a string, but got:', typeof time);
        return 0;
      }

      const match = time.match(/(\d+)m\s*(\d+)s?/);
      if (match) {
        const minutes = parseInt(match[1], 10);
        const seconds = parseInt(match[2], 10);
        return minutes + (seconds / 60);
      }
      
      console.warn('Time format not recognized:', time);
      return 0;
    }
  }
};
</script>

<style scoped>
.header {
  font-size: 2.5rem;
  font-weight: bold;
  color: #676767;
  text-align: center;
  margin: 20px 0;
}

.score-rank-time {
  font-family: 'mojFont', sans-serif;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  color: #676767;
}

.table-section {
  text-align: center;
  margin-bottom: 20px;
}

.table-title {
  margin-bottom: 10px;
  color: #00adb5;
}

.score-table {
  width: 70%;
  border-collapse: collapse;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.table-header th {
  background-color: #f2f2f2;
  text-align: left;
  color: #007c8a64;
}

.table-header th, .score-table td {
  color: #7b7b7b
  ;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

td {
  text-align: center;
}

th:hover {
  background-color: #e2e2e2;
}

th.sorted {
  font-weight: bold;
}
</style>
