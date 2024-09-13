<template>
  <div class="score-rank-time">
    <h2 class="header">SCORE RANK</h2>
    <div class="table-section">
      <h3 class="table-title">OVERALL SCORES</h3>
      <div class="tabs">
        <div
          v-for="(test, index) in testIds"
          :key="test.id"
          :class="['tab', { 'active': currentTab === index }]"
          @click="currentTab = index"
        >
          <button>
            {{ test.name }}
          </button>
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
          <tr v-if="!testResults || testResults.length === 0">
            <td colspan="4">No results available</td>
          </tr>
          <tr v-else v-for="(user, userIndex) in sortedScores" :key="user.userId">
            <td>{{ userIndex + 1 }}</td>
            <td>{{ getUserName(user.userId) }}</td>
            <td>{{ user.score }}</td>
            <td>{{ formatTime(user.time) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import db from 'src/main';

export default {
  name: 'ScoreRank',
  props: {
    testId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      testResults: [],
      testIds: [],
      users: {},
      currentTab: 0,
      testId: null
    };
  },
  created() {
    this.initializeComponent();
  },
  computed: {
    sortedScores() {
      if (this.testResults.length === 0 || this.currentTab >= this.testResults.length) {
        return [];
      }

      return this.testResults[this.currentTab].users.sort((a, b)  => {
        if (b.score === a.score) {
          return a.time - b.time;
        }
        return b.score - a.score;
      });
    }
  },
  methods: {
    async initializeComponent() {
      try {
        await this.fetchTestIds();
        await this.fetchTestResults();
        await this.fetchUserData();
      } catch (error) {
        console.error('Error initializing component:', error);
      }
    },
    async fetchTestIds() {
      try {
        const testsRef = collection(db, 'tests');
        const testsSnapshot = await getDocs(testsRef);
        
        this.testIds = testsSnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().title || 'Unnamed Test'
        }));
        testsSnapshot.docs.forEach((doc) => {
          console.log(doc.data());
        });
      } catch (error) {
        console.error('Error fetching test IDs:', error);
      }
    },
    async fetchTestResults() {
      try {
        const testResults = [];
        for (const testId of this.testIds) {
          const testRef = doc(db, 'tests', testId);
          const resultsRef = collection(testRef, 'results');
          const resultsSnapshot = await getDocs(resultsRef);

          const users = [];
          resultsSnapshot.docs.forEach((resultDoc) => {
            const userId = resultDoc.data().userId;
            const score = resultDoc.data().score;
            const time = resultDoc.data().time;
            users.push({ userId, score, time });
          });

          testResults.push({
            testId,
            users
          });
        }
        this.testResults = testResults;
      } catch (error) {
        console.error('Error fetching test results:', error);
        this.testResults = [];
      }
    },
    async fetchUserData() {
      try {
        for (const testResult of this.testResults) {
          for (const user of testResult.users) {
            const userRef = doc(db, 'users', user.userId);
            const userSnapshot = await getDoc(userRef);

            if (userSnapshot.exists()) {
              const userData = userSnapshot.data();
              this.users[user.userId] = {
                name: userData.name,
                email: userData.email
              };
            } else {
              console.log(userSnapshot);
              this.users[user.userId] = {
                name: 'Unknown',
                email: 'No email provided'
              };
            }
          }
        }
        console.log(this.users);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },

    formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes}m ${seconds}s`;
    },
    conertTimeToMinutes(time) {
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
    },
    getUserName(userId) {
      return (this.users[userId] && this.users[userId].name) || 'Unknown';
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
  margin-bottom: 30px; 
  color: #00adb5;
}

.score-table {
  width: 70%;
  border-collapse: collapse;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.table-header th {
  background-color: #f2f2f2;
  text-align: left;
  color: #007c8a64;
}

.table-header th, .score-table td {
  color: #7b7b7b;
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

.tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px; 
  margin-top: 30px; 
}

.tabs .tab {
  display: inline-block;
  margin: 0 5px;
}

.tabs button {
  background-color: #007c8a64; 
  border: none;
  padding: 10px 20px;
  color: #fff; 
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.tabs button:hover {
  background-color: #007c8a89; 
}

.tabs .active button {
  background-color: #4cb4bf;
  color: #fff;
}
</style>
