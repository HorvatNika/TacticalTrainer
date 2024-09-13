<template>
  <div class="admin-container">
    <h1>ADMIN PAGE</h1>
    <div class="tabs">
      <button class="btn-finish" @click="activeTab = 'users'">USERS</button>
      <button class="btn-finish" @click="activeTab = 'tests'">TESTS</button>
    </div>
    <div class="line"></div> 

    <div v-if="activeTab === 'users'" class="users-tab">
      <h2>USER MANAGEMENT</h2>
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td class="actions">
              <div class="table-actions">
                <button class="btn-finish" @click="deleteUser(user)">DELETE</button>
                <button class="btn-finish" @click="viewUserSchedule(user)">VIEW SCHEDULE</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="activeTab === 'tests'" class="tests-tab">
      <h2>TEST MANAGEMENT</h2>
      <table>
        <thead>
          <tr>
            <th>TITLE</th>
            <th>QUESTIONS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="test in tests" :key="test.id">
            <td>{{ test.title }}</td>
            <td>{{ test.questions ? test.questions.length : 0 }}</td>
            <td class="actions">
              <div class="table-actions">
                <router-link class="btn-finish" :to="{ name: 'AdminTestEditPage', params: { id: test.id } }">
                  EDIT
                </router-link>
                <button class="btn-finish" @click="deleteTest(test)">DELETE</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="spacer"></div>
      <router-link class="btn-finish" :to="{ name: 'AdminTestCreatePage' }">
        CREATE TEST
      </router-link>
    </div>
  </div>
</template>

<script>
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import db from 'src/main';

export default {
  name: 'AdminPage',
  data() {
    return {
      activeTab: 'users',
      users: [],
      tests: [],
    };
  },
  methods: {
    viewUserSchedule(user) {
      this.$router.push({ name: 'AdminUserSchedulePage', params: { userId: user.id } });
    },
    async fetchUserData() {
      const usersRef = collection(db, 'users');
      const snapshot = await getDocs(usersRef);
      this.users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },
    async editUser(user) {
      const userRef = doc(db, 'users', user.id);
      await updateDoc(userRef, user);
    },
    async deleteUser(user) {
      const userRef = doc(db, 'users', user.id);
      await deleteDoc(userRef);
    },
    async fetchTestData() {
      const testsRef = collection(db, 'tests');
      const testsSnapshot = await getDocs(testsRef);
      this.tests = testsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },
    async deleteTest(test) {
      const testRef = doc(db, 'tests', test.id);
      await deleteDoc(testRef);
    },
  },
  mounted() {
    this.fetchUserData();
    this.fetchTestData();
  }
};
</script>

<style scoped>
.admin-container {
  padding: 20px;
  font-family: 'mojFont', sans-serif;
  color: #676767;
}

.tabs {
  margin-bottom: 20px;
}

.line {
  height: 1px;
  background-color: #6767672c; 
  margin: 10px 0; 
  margin-bottom: 40px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.btn-finish {
  background-color: #007c8a64;
  border-color: #007c8a64;
  border-radius: 0px;
  padding: 10px 30px;
  font-size: 16px;
  color: white;
  text-align: center;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;
  margin: 0 15px;
  text-decoration: none; 
}

.btn-finish:hover {
  background-color: #007c8a89;
}

.router-link-active,
.router-link-exact-active {
  text-decoration: none; 
}

.tests-tab {
  padding-bottom: 40px;
}

.spacer {
  height: 40px;
}

.admin-container h1 {
  margin-bottom: 20px; 
}

.users-tab h2,
.tests-tab h2 {
  margin-bottom: 15px; 
}

td.actions {
  text-align: right;
}

.table-actions {
  display: flex;
  justify-content: flex-end;
}
</style>
