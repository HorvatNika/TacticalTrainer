<template>
  <div class="score-rank">
    <h2 class="header">SCORE RANK</h2>

    <!-- Filteri -->
    <div class="filters">
      <label class="filter-button">
        <input type="radio" v-model="filterCategory" value="all" /> OVERALL SCORES
      </label>
      <label class="filter-button">
        <input type="radio" v-model="filterCategory" value="military-library" /> MILITARY LIBRARY
      </label>
    </div>

    <!-- Tablice -->
    <div v-if="filterCategory === 'all'" class="table-section">
      <h3 class="table-title">OVERALL SCORES</h3>
      <table class="score-table overall-table">
        <thead>
          <tr class="table-header">
            <th>RANK</th>
            <th>USER</th>
            <th>TOTAL SCORE</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in overallScores" :key="user.name">
            <td>{{ index + 1 }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.totalScore }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else-if="filterCategory === 'military-library'" class="table-section">
      <div class="table-pair">
        <div class="table-container">
          <h3 class="table-title">MILITARY ENCYCLOPEDIA LIBRARY</h3>
          <table class="score-table main-table">
            <thead>
              <tr class="table-header">
                <th>RANK</th>
                <th>USER</th>
                <th>TOTAL SCORE</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, index) in militaryEncyclopediaScores" :key="user.name">
                <td>{{ index + 1 }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.totalScore }}</td>
              </tr>
            </tbody>
          </table>

          <div class="filters library-filters">
            <label class="filter-button">
              <input type="radio" v-model="libraryFilterCategory" value="weapons" /> WEAPONS ENCYCLOPEDIA
            </label>
            <label class="filter-button">
              <input type="radio" v-model="libraryFilterCategory" value="vehicles" /> VEHICLE ENCYCLOPEDIA
            </label>
          </div>

          <div v-if="libraryFilterCategory === 'weapons'" class="table-section">
            <h3 class="table-title">WEAPONS ENCYCLOPEDIA</h3>
            <table class="score-table main-table">
              <thead>
                <tr class="table-header">
                  <th>RANK</th>
                  <th>USER</th>
                  <th>TOTAL SCORE</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, index) in weaponsScores" :key="user.name">
                  <td>{{ index + 1 }}</td>
                  <td>{{ user.name }}</td>
                  <td>{{ user.score }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div v-if="libraryFilterCategory === 'vehicles'" class="table-section">
            <h3 class="table-title">VEHICLE ENCYCLOPEDIA</h3>
            <table class="score-table main-table">
              <thead>
                <tr class="table-header">
                  <th>RANK</th>
                  <th>USER</th>
                  <th>TOTAL SCORE</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, index) in vehicleScores" :key="user.name">
                  <td>{{ index + 1 }}</td>
                  <td>{{ user.name }}</td>
                  <td>{{ user.score }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="table-container">
          <h3 class="table-title">MILITARY ESSENTIALS LIBRARY</h3>
          <table class="score-table main-table">
            <thead>
              <tr class="table-header">
                <th>RANK</th>
                <th>USER</th>
                <th>TOTAL SCORE</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, index) in militaryEssentialsScores" :key="user.name">
                <td>{{ index + 1 }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.totalScore }}</td>
              </tr>
            </tbody>
          </table>

          <div class="filters library-filters">
            <label class="filter-button">
              <input type="radio" v-model="essentialsFilterCategory" value="equipment" /> EQUIPMENT ESSENTIALS
            </label>
            <label class="filter-button">
              <input type="radio" v-model="essentialsFilterCategory" value="armory" /> ARMORY ESSENTIALS
            </label>
          </div>

          <div v-if="essentialsFilterCategory === 'equipment'" class="table-section">
            <h3 class="table-title">EQUIPMENT ESSENTIALS</h3>
            <table class="score-table main-table">
              <thead>
                <tr class="table-header">
                  <th>RANK</th>
                  <th>USER</th>
                  <th>TOTAL SCORE</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, index) in equipmentScores" :key="user.name">
                  <td>{{ index + 1 }}</td>
                  <td>{{ user.name }}</td>
                  <td>{{ user.score }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div v-if="essentialsFilterCategory === 'armory'" class="table-section">
            <h3 class="table-title">ARMORY ESSENTIALS</h3>
            <table class="score-table main-table">
              <thead>
                <tr class="table-header">
                  <th>RANK</th>
                  <th>USER</th>
                  <th>TOTAL SCORE</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, index) in armoryScores" :key="user.name">
                  <td>{{ index + 1 }}</td>
                  <td>{{ user.name }}</td>
                  <td>{{ user.score }}</td>
                </tr>
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
      // Dummy podaci za testiranje
      users: [
        { name: 'User A', weapons: 500, vehicles: 400, equipment: 300, armory: 200 },
        { name: 'User B', weapons: 450, vehicles: 400, equipment: 350, armory: 250 },
        { name: 'User C', weapons: 400, vehicles: 450, equipment: 400, armory: 300 },
      ]
    };
  },
  computed: {
    weaponsScores() {
      return this.users.map(user => ({
        name: user.name,
        score: user.weapons,
      }));
    },
    vehicleScores() {
      return this.users.map(user => ({
        name: user.name,
        score: user.vehicles,
      }));
    },
    militaryEncyclopediaScores() {
      return this.users.map(user => ({
        name: user.name,
        totalScore: user.weapons + user.vehicles,
      }));
    },
    equipmentScores() {
      return this.users.map(user => ({
        name: user.name,
        score: user.equipment,
      }));
    },
    armoryScores() {
      return this.users.map(user => ({
        name: user.name,
        score: user.armory,
      }));
    },
    militaryEssentialsScores() {
      return this.users.map(user => ({
        name: user.name,
        totalScore: user.equipment + user.armory,
      }));
    },
    overallScores() {
      return this.users.map(user => ({
        name: user.name,
        totalScore: (user.weapons + user.vehicles) + (user.equipment + user.armory),
      })).sort((a, b) => b.totalScore - a.totalScore);
    }
  }
};
</script>

<style scoped>
.header {
  font-size: 2rem;
  font-weight: bold;
  color: #676767;
  text-align: center;
  margin: 20px 0;
}

.score-rank {
  font-family: 'mojFont', sans-serif;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  color: #676767;
}

.filters {
  text-align: center;
  margin-bottom: 20px;
}

.filter-button {
  display: inline-block;
  font-size: 1.3rem;
  color: #898989;
  text-decoration: none;
  margin-right: 15px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: transparent;
  border: none;
  transition: color 0.3s;
  cursor: pointer; 
}

.filter-button input[type="radio"] {
  display: none;
}

.filter-button:hover,
.filter-button input[type="radio"]:checked + .filter-button {
  color: #676767;
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
  width: 48%;
  box-sizing: border-box;
  margin-bottom: 20px;
}

.table-title {
  margin-bottom: 10px;
  color: #00adb5;
}

.score-table {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
}

.overall-table {
  width: 70%;
  margin: 0 auto;
}

.table-header th {
  background-color: #f2f2f2;
  text-align: left;
  color: #00adb5;
}

.table-header th, .score-table td {
  color: #676767;
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
