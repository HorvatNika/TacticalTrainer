<template>
  <div class="score-rank">
    <h2 class="header">Score List 2</h2>

    <div class="table-pair">
      <!-- Tablica za Military Encyclopedia Library -->
      <div class="table-container">
        <h3>Military Encyclopedia Library</h3>
        <table class="score-table">
          <thead>
            <tr class="table-header">
              <th>Rank</th>
              <th @click="sortScores('user', 'encyclopedia')"
                  :class="{ 'sorted': sortKey === 'user' }"
                  class="sortable"
                  style="cursor: pointer;">
                User
              </th>
              <th @click="sortScores('test', 'encyclopedia')"
                  :class="{ 'sorted': sortKey === 'test' }"
                  class="sortable"
                  style="cursor: pointer;">
                Test
              </th>
              <th @click="sortScores('date', 'encyclopedia')"
                  :class="{ 'sorted': sortKey === 'date' }"
                  class="sortable"
                  style="cursor: pointer;">
                Date
              </th>
              <th @click="sortScores('score', 'encyclopedia')"
                  :class="{ 'sorted': sortKey === 'score' }"
                  class="sortable"
                  style="cursor: pointer;">
                Score
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(entry, index) in sortedScoresEncyclopedia" :key="entry.user + entry.date">
              <td>{{ getRank(entry, 'encyclopedia') }}</td>
              <td>{{ entry.user }}</td>
              <td>{{ entry.test }}</td>
              <td>{{ entry.date }}</td>
              <td>{{ entry.score }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Tablica za Military Essentials Library -->
      <div class="table-container">
        <h3>Military Essentials Library</h3>
        <table class="score-table">
          <thead>
            <tr class="table-header">
              <th>Rank</th>
              <th @click="sortScores('user', 'essentials')"
                  :class="{ 'sorted': sortKey === 'user' }"
                  class="sortable"
                  style="cursor: pointer;">
                User
              </th>
              <th @click="sortScores('test', 'essentials')"
                  :class="{ 'sorted': sortKey === 'test' }"
                  class="sortable"
                  style="cursor: pointer;">
                Test
              </th>
              <th @click="sortScores('date', 'essentials')"
                  :class="{ 'sorted': sortKey === 'date' }"
                  class="sortable"
                  style="cursor: pointer;">
                Date
              </th>
              <th @click="sortScores('score', 'essentials')"
                  :class="{ 'sorted': sortKey === 'score' }"
                  class="sortable"
                  style="cursor: pointer;">
                Score
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(entry, index) in sortedScoresEssentials" :key="entry.user + entry.date">
              <td>{{ getRank(entry, 'essentials') }}</td>
              <td>{{ entry.user }}</td>
              <td>{{ entry.test }}</td>
              <td>{{ entry.date }}</td>
              <td>{{ entry.score }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="download-container">
      <button @click="downloadExcel('encyclopedia')" class="download-button">Download Encyclopedia Scores</button>
      <button @click="downloadExcel('essentials')" class="download-button">Download Essentials Scores</button>
    </div>
  </div>
</template>

<script>
import * as XLSX from 'xlsx';

export default {
  name: 'ScoreRank',
  data() {
    return {
      encyclopediaScores: [
        { user: 'JohnDoe', test: 'Weapons', date: '2024-08-10', score: 85 },
        { user: 'JaneSmith', test: 'Weapons', date: '2024-08-09', score: 78 },
        { user: 'MikeBrown', test: 'Vehicles', date: '2024-08-08', score: 88 },
        { user: 'JohnDoe', test: 'Weapons', date: '2024-08-05', score: 90 },
        { user: 'MikeBrown', test: 'Weapons', date: '2024-08-03', score: 92 },
      ],
      essentialsScores: [
        { user: 'AnnaWhite', test: 'Equipment', date: '2024-08-07', score: 95 },
        { user: 'TomGreen', test: 'Armory', date: '2024-08-06', score: 82 },
        { user: 'JaneSmith', test: 'Armory', date: '2024-08-04', score: 87 },
      ],
      searchQuery: '',
      sortKey: '',
      sortDirection: 'desc',
    };
  },
  computed: {
    filteredScoresEncyclopedia() {
      const query = this.searchQuery.toLowerCase();
      return this.encyclopediaScores.filter(entry => {
        return (
          entry.user.toLowerCase().includes(query) ||
          entry.test.toLowerCase().includes(query) ||
          entry.date.toLowerCase().includes(query) ||
          entry.score.toString().includes(query)
        );
      });
    },
    filteredScoresEssentials() {
      const query = this.searchQuery.toLowerCase();
      return this.essentialsScores.filter(entry => {
        return (
          entry.user.toLowerCase().includes(query) ||
          entry.test.toLowerCase().includes(query) ||
          entry.date.toLowerCase().includes(query) ||
          entry.score.toString().includes(query)
        );
      });
    },
    sortedScoresEncyclopedia() {
      return this.sortScoresInList(this.filteredScoresEncyclopedia);
    },
    sortedScoresEssentials() {
      return this.sortScoresInList(this.filteredScoresEssentials);
    },
  },
  methods: {
    sortScoresInList(list) {
      const sorted = [...list].sort((a, b) => {
        let aValue = a[this.sortKey];
        let bValue = b[this.sortKey];

        if (this.sortKey === 'date') {
          aValue = new Date(aValue);
          bValue = new Date(bValue);
        } else if (typeof aValue === 'string') {
          aValue = aValue.toLowerCase();
          bValue = bValue.toLowerCase();
        }

        if (aValue > bValue) return this.sortDirection === 'asc' ? 1 : -1;
        if (aValue < bValue) return this.sortDirection === 'asc' ? -1 : 1;
        return 0;
      });

      return sorted;
    },
    sortScores(key, category) {
      if (this.sortKey === key) {
        this.sortDirection = this.sortDirection === 'desc' ? 'asc' : 'desc';
      } else {
        this.sortKey = key;
        this.sortDirection = 'desc';
      }
    },
    getRank(entry, category) {
      const sorted = category === 'encyclopedia'
        ? [...this.encyclopediaScores].sort((a, b) => b.score - a.score)
        : [...this.essentialsScores].sort((a, b) => b.score - a.score);
      return sorted.findIndex(score => score.user === entry.user && score.date === entry.date) + 1;
    },
    downloadExcel(category) {
      const data = category === 'encyclopedia' ? this.sortedScoresEncyclopedia : this.sortedScoresEssentials;
      const ws = XLSX.utils.json_to_sheet(data.map(entry => ({
        Rank: this.getRank(entry, category),
        User: entry.user,
        Test: entry.test,
        Date: entry.date,
        Score: entry.score,
      })));
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, `${category} Scores`);
      XLSX.writeFile(wb, `${category}_scores.xlsx`);
    },
  },
};
</script>

<style scoped>
.score-rank {
  font-family: 'Arial', sans-serif;
  width: 90%;
  margin: 0 auto;
  padding: 20px;
}

.table-pair {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.table-container {
  width: 48%;
}

.score-table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
}

.table-header th {
  background-color: #f2f2f2;
  text-align: left;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th:hover {
  background-color: #e2e2e2;
}

th.sorted {
  font-weight: bold;
}

.download-container {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.download-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.download-button:hover {
  background-color: #0056b3;
}

</style>