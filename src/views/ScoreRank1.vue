<template>
    <div class="score-rank">
      <h2 class="header">Score List</h2>
  
      <!-- Filteri -->
      <div class="filters">
        <label>
          <input type="radio" v-model="filterCategory" value="all" /> All
        </label>
        <label>
          <input type="radio" v-model="filterCategory" value="military-library" /> Military Library
        </label>
      </div>
  
      <!-- Tablice -->
      <div v-if="filterCategory === 'all'" class="table-section">
        <div class="table-container">
          <h3 class="table-title">Overall Scores</h3>
          <table class="score-table main-table">
            <thead>
              <tr class="table-header">
                <th>Rank</th>
                <th>User</th>
                <th>Total Score</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
  
      <div v-else-if="filterCategory === 'military-library'" class="table-section">
        <div class="table-pair">
          <div class="table-container">
            <h3 class="table-title">Military Encyclopedia Library</h3>
            <table class="score-table main-table">
              <thead>
                <tr class="table-header">
                  <th>Rank</th>
                  <th>User</th>
                  <th>Total Score</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
  
            <div class="filters library-filters">
              <label>
                <input type="radio" v-model="libraryFilterCategory" value="weapons" /> Weapons Encyclopedia
              </label>
              <label>
                <input type="radio" v-model="libraryFilterCategory" value="vehicles" /> Vehicle Encyclopedia
              </label>
            </div>
  
            <div v-if="libraryFilterCategory === 'weapons'" class="table-container">
              <h3 class="table-title">Weapons Encyclopedia</h3>
              <table class="score-table main-table">
                <thead>
                  <tr class="table-header">
                    <th>Rank</th>
                    <th>User</th>
                    <th>Total Score</th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
  
            <div v-if="libraryFilterCategory === 'vehicles'" class="table-container">
              <h3 class="table-title">Vehicle Encyclopedia</h3>
              <table class="score-table main-table">
                <thead>
                  <tr class="table-header">
                    <th>Rank</th>
                    <th>User</th>
                    <th>Total Score</th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
          </div>
  
          <div class="table-container">
            <h3 class="table-title">Military Essentials Library</h3>
            <table class="score-table main-table">
              <thead>
                <tr class="table-header">
                  <th>Rank</th>
                  <th>User</th>
                  <th>Total Score</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
  
            <div class="filters library-filters">
              <label>
                <input type="radio" v-model="essentialsFilterCategory" value="equipment" /> Equipment Essentials
              </label>
              <label>
                <input type="radio" v-model="essentialsFilterCategory" value="armory" /> Armory Essentials
              </label>
            </div>
  
            <div v-if="essentialsFilterCategory === 'equipment'" class="table-container">
              <h3 class="table-title">Equipment Essentials</h3>
              <table class="score-table main-table">
                <thead>
                  <tr class="table-header">
                    <th>Rank</th>
                    <th>User</th>
                    <th>Total Score</th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
  
            <div v-if="essentialsFilterCategory === 'armory'" class="table-container">
              <h3 class="table-title">Armory Essentials</h3>
              <table class="score-table main-table">
                <thead>
                  <tr class="table-header">
                    <th>Rank</th>
                    <th>User</th>
                    <th>Total Score</th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ScoreRank',
    data() {
      return {
        filterCategory: 'all',
        libraryFilterCategory: 'weapons',
        essentialsFilterCategory: 'equipment',
      };
    },
  };
  </script>
  
  <style scoped>
  .score-rank {
    font-family: 'Arial', sans-serif;
    width: 80%;
    margin: 0 auto;
    padding: 20px;
  }
  
  .filters {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .filters label {
    margin-right: 15px;
  }
  
  .library-filters {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .table-section {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .table-pair {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  
  .table-container {
    margin-bottom: 20px;
  }
  
  .table-title {
    margin-bottom: 10px;
  }
  
  .score-table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 5px;
    overflow: hidden;
  }
  
  .main-table {
    width: 100%;
  }
  
  .table-header th {
    background-color: #f2f2f2;
    text-align: left;
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
  