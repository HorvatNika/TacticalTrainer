<template>
  <div class="score-rank-time">
    <h2 class="header">SCORE RANK</h2>
    <div class="table-section">
      <h3 class="table-title">OVERALL SCORES</h3>
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
          <tr v-for="(user, index) in sortedScores" :key="user.name">
            <td>{{ index + 1 }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.totalScore }}</td>
            <td>{{ user.timeTaken }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScoreRankTime',
  data() {
    return {
      users: [
        { name: 'User A', totalScore: 1200, timeTaken: '45m 30s' },
        { name: 'User B', totalScore: 1100, timeTaken: '50m 15s' },
        { name: 'User C', totalScore: 1200, timeTaken: '40m 25s' },
        { name: 'User D', totalScore: 1050, timeTaken: '55m 10s' },
      ]
    };
  },
  computed: {
    sortedScores() {
      return this.users
        .map(user => ({
          ...user,
          timeInMinutes: this.convertTimeToMinutes(user.timeTaken)
        }))
        .sort((a, b) => {
          if (b.totalScore === a.totalScore) {
            return a.timeInMinutes - b.timeInMinutes;
          }
          return b.totalScore - a.totalScore;
        });
    }
  },
  methods: {
    convertTimeToMinutes(time) {
      if (typeof time !== 'string') {
        console.error('Expected time to be a string, but got:', typeof time);
        return 0;
      }

      // Regular expression to match time in format "Xm Ys"
      const match = time.match(/(\d+)m\s*(\d+)s?/);
      if (match) {
        const minutes = parseInt(match[1], 10);
        const seconds = parseInt(match[2], 10);
        return minutes + (seconds / 60);
      }
      
      // If format not recognized, log a warning and return 0
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
