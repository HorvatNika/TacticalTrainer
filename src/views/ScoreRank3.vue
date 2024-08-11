<template>
    <div class="score-rank">
      <h2 class="header">Score List 3</h2>
  
      <div class="table-pair">
        <!-- Tablica za Weapons Encyclopedia -->
        <div class="table-container">
          <h3>Weapons Encyclopedia</h3>
          <table class="score-table">
            <thead>
              <tr class="table-header">
                <th>Rank</th>
                <th @click="sortScores('user', 'weapons')"
                    :class="{ 'sorted': sortKey === 'user' }"
                    class="sortable"
                    style="cursor: pointer;">
                  User
                </th>
                <th @click="sortScores('test', 'weapons')"
                    :class="{ 'sorted': sortKey === 'test' }"
                    class="sortable"
                    style="cursor: pointer;">
                  Test
                </th>
                <th @click="sortScores('date', 'weapons')"
                    :class="{ 'sorted': sortKey === 'date' }"
                    class="sortable"
                    style="cursor: pointer;">
                  Date
                </th>
                <th @click="sortScores('score', 'weapons')"
                    :class="{ 'sorted': sortKey === 'score' }"
                    class="sortable"
                    style="cursor: pointer;">
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(entry, index) in sortedScoresWeapons" :key="entry.user + entry.date">
                <td>{{ getRank(entry, 'weapons') }}</td>
                <td>{{ entry.user }}</td>
                <td>{{ entry.test }}</td>
                <td>{{ entry.date }}</td>
                <td>{{ entry.score }}</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Tablica za Vehicle Encyclopedia -->
        <div class="table-container">
          <h3>Vehicle Encyclopedia</h3>
          <table class="score-table">
            <thead>
              <tr class="table-header">
                <th>Rank</th>
                <th @click="sortScores('user', 'vehicles')"
                    :class="{ 'sorted': sortKey === 'user' }"
                    class="sortable"
                    style="cursor: pointer;">
                  User
                </th>
                <th @click="sortScores('test', 'vehicles')"
                    :class="{ 'sorted': sortKey === 'test' }"
                    class="sortable"
                    style="cursor: pointer;">
                  Test
                </th>
                <th @click="sortScores('date', 'vehicles')"
                    :class="{ 'sorted': sortKey === 'date' }"
                    class="sortable"
                    style="cursor: pointer;">
                  Date
                </th>
                <th @click="sortScores('score', 'vehicles')"
                    :class="{ 'sorted': sortKey === 'score' }"
                    class="sortable"
                    style="cursor: pointer;">
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(entry, index) in sortedScoresVehicles" :key="entry.user + entry.date">
                <td>{{ getRank(entry, 'vehicles') }}</td>
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
        <button @click="downloadExcel('weapons')" class="download-button">Download Weapons Scores</button>
        <button @click="downloadExcel('vehicles')" class="download-button">Download Vehicles Scores</button>
      </div>
    </div>
  </template>
  
  <script>
  import * as XLSX from 'xlsx';
  
  export default {
    name: 'ScoreRankSections',
    data() {
      return {
        weaponsScores: [
          { user: 'JohnDoe', test: 'Pistols', date: '2024-08-10', score: 85 },
          { user: 'JaneSmith', test: 'Rifles', date: '2024-08-09', score: 78 },
          { user: 'MikeBrown', test: 'Snipers', date: '2024-08-08', score: 88 },
          { user: 'JohnDoe', test: 'Rifles', date: '2024-08-05', score: 90 },
          { user: 'MikeBrown', test: 'Pistols', date: '2024-08-03', score: 92 },
        ],
        vehiclesScores: [
          { user: 'AnnaWhite', test: 'Infantry Transport', date: '2024-08-07', score: 95 },
          { user: 'TomGreen', test: 'Infantry Transport', date: '2024-08-06', score: 82 },
          { user: 'JaneSmith', test: 'Infantry Transport', date: '2024-08-04', score: 87 },
        ],
        searchQuery: '',
        sortKey: '',
        sortDirection: 'desc',
      };
    },
    computed: {
      filteredScoresWeapons() {
        const query = this.searchQuery.toLowerCase();
        return this.weaponsScores.filter(entry => {
          return (
            entry.user.toLowerCase().includes(query) ||
            entry.test.toLowerCase().includes(query) ||
            entry.date.toLowerCase().includes(query) ||
            entry.score.toString().includes(query)
          );
        });
      },
      filteredScoresVehicles() {
        const query = this.searchQuery.toLowerCase();
        return this.vehiclesScores.filter(entry => {
          return (
            entry.user.toLowerCase().includes(query) ||
            entry.test.toLowerCase().includes(query) ||
            entry.date.toLowerCase().includes(query) ||
            entry.score.toString().includes(query)
          );
        });
      },
      sortedScoresWeapons() {
        return this.sortScoresInList(this.filteredScoresWeapons);
      },
      sortedScoresVehicles() {
        return this.sortScoresInList(this.filteredScoresVehicles);
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
        const sorted = category === 'weapons'
          ? [...this.weaponsScores].sort((a, b) => b.score - a.score)
          : [...this.vehiclesScores].sort((a, b) => b.score - a.score);
        return sorted.findIndex(score => score.user === entry.user && score.date === entry.date) + 1;
      },
      downloadExcel(category) {
        const data = category === 'weapons' ? this.sortedScoresWeapons : this.sortedScoresVehicles;
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
  