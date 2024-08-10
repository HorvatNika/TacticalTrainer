<template>
  <div class="score-rank">
    <h2 class="header">Score List</h2>
    <div class="search-container">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search..."
        @input="filterScores"
        class="search-input"
      />
    </div>
    <div class="table-container">
      <table class="score-table">
        <thead>
          <tr class="table-header">
            <th>Rank</th> <!-- No sorting functionality here -->
            <th 
              @click="sortScores('user')"
              :class="{ 'sorted': sortKey === 'user' }"
              class="sortable" 
              style="cursor: pointer;"
            >
              User
            </th>
            <th 
              @click="sortScores('test')"
              :class="{ 'sorted': sortKey === 'test' }"
              class="sortable" 
              style="cursor: pointer;"
            >
              Test
            </th>
            <th 
              @click="sortScores('date')"
              :class="{ 'sorted': sortKey === 'date' }"
              class="sortable" 
              style="cursor: pointer;"
            >
              Date
            </th>
            <th 
              @click="sortScores('score')"
              :class="{ 'sorted': sortKey === 'score' }"
              class="sortable" 
              style="cursor: pointer;"
            >
              Score
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entry, index) in sortedScores" :key="entry.user + entry.date">
            <td>{{ getRank(entry) }}</td>
            <td>{{ entry.user }}</td>
            <td>{{ entry.test }}</td>
            <td>{{ entry.date }}</td>
            <td>{{ entry.score }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="download-container">
      <button @click="downloadExcel" class="download-button">Download as Excel</button>
    </div>
  </div>
</template>

<script>
import * as XLSX from 'xlsx';

export default {
  name: 'ScoreRank',
  data() {
    return {
      scores: [
        { user: 'JohnDoe', test: 'Math', date: '2024-08-10', score: 95 },
        { user: 'JaneSmith', test: 'Science', date: '2024-08-09', score: 89 },
        { user: 'MikeBrown', test: 'History', date: '2024-08-08', score: 76 },
        { user: 'AnnaWhite', test: 'Math', date: '2024-08-07', score: 99 },
        { user: 'TomGreen', test: 'Science', date: '2024-08-06', score: 82 },
      ],
      searchQuery: '',
      sortKey: '', // Default sort key
      sortDirection: 'desc', // Default sort direction
    };
  },
  computed: {
    filteredScores() {
      const query = this.searchQuery.toLowerCase();
      return this.scores.filter(entry => {
        return (
          entry.user.toLowerCase().includes(query) ||
          entry.test.toLowerCase().includes(query) ||
          entry.date.toLowerCase().includes(query) ||
          entry.score.toString().includes(query)
        );
      });
    },
    sortedScores() {
      const sorted = [...this.filteredScores].sort((a, b) => {
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
  },
  methods: {
    sortScores(key) {
      if (this.sortKey === key) {
        this.sortDirection = this.sortDirection === 'desc' ? 'asc' : 'desc';
      } else {
        this.sortKey = key;
        this.sortDirection = 'desc'; // Default to descending order on new sort
      }
    },
    getRank(entry) {
      const sorted = [...this.scores].sort((a, b) => b.score - a.score);
      return sorted.findIndex(score => score.user === entry.user && score.date === entry.date) + 1;
    },
    downloadExcel() {
      const ws = XLSX.utils.json_to_sheet(this.sortedScores.map(entry => ({
        Rank: this.getRank(entry),
        User: entry.user,
        Test: entry.test,
        Date: entry.date,
        Score: entry.score,
      })));
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Score List');
      XLSX.writeFile(wb, 'score_list.xlsx');
    },
  },
};
</script>

<style scoped>
/* Applying the custom font for the whole component */
.score-rank {
  font-family: 'mojFont', sans-serif;
  width: 80%; /* Adjust width as needed */
  margin: 0 auto; /* Center the container */
  padding: 20px; /* Optional padding around the container */
}

.search-container {
  display: flex;
  justify-content: center; /* Center the input */
  margin-bottom: 20px;
}

.search-input {
  width: 300px; /* Set a fixed width for the search input */
  padding: 8px;
  border-radius: 5px; /* Rounded corners */
  box-sizing: border-box;
}

.table-container {
  overflow-x: auto; /* Enable horizontal scrolling for the table if needed */
}

.score-table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 5px; /* Rounded corners for the table */
  overflow: hidden; /* Ensures corners are not cut off */
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
  justify-content: center; /* Center the button */
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
