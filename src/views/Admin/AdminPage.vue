<template>
    <div class="admin-container">
      <h1>Admin Dashboard</h1>
      <div class="tabs">
        <button @click="activeTab = 'users'">Users</button>
        <button @click="activeTab = 'tests'">Tests</button>
      </div>
  
      <div v-if="activeTab === 'users'" class="users-tab">
        <h2>User Management</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>
                <button class="btn-finish" @click="editUser(user)">Edit</button>
                <button class="btn-finish" @click="deleteUser(user)">Delete</button>
                <button class="btn-finish" @click="viewUserSchedule(user)">View Schedule</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <div v-if="activeTab === 'tests'" class="tests-tab">
        <h2>Test Management</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Questions</th>
              <th>Users Taken</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="test in tests" :key="test.id">
              <td>{{ test.title }}</td>
              <td>{{ test.description }}</td>
              <td>{{ test.questions ? test.questions.length : 0 }}</td>
              <td>{{ testResults[test.id] ? testResults[test.id].length : 0 }}</td>
              <td>
                <router-link class="btn-finish" :to="{ name: 'AdminTestEditPage', params: { id: test.id } }">
                  Edit
                </router-link>
                <button class="btn-finish" @click="deleteTest(test)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <router-link class="btn-finish" :to="{ name: 'AdminTestCreatePage' }">
          Create Test
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import db from '@/main';

export default {
  name: 'AdminPage',
  data() {
    return {
      activeTab: 'users',
      users: [],
      tests: [],
      testResults: {}
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
    async loadTestResults() {
      const testResultsRef = collection(db, 'test_results');
      this.testResults = {};

      for (const test of this.tests) {
        const testResultsQuery = query(testResultsRef, where('testId', '==', test.id));
        const testResultsSnapshot = await getDocs(testResultsQuery);
        this.testResults[test.id] = testResultsSnapshot.docs.map(doc => doc.data());
      }
    },
    async deleteTest(test) {
      const testRef = doc(db, 'tests', test.id);
      await deleteDoc(testRef);
    },
  },
  mounted() {
    this.fetchUserData();
    this.fetchTestData();
    this.loadTestResults();
  }
};
</script>
  
  <style scoped>
  .admin-container {
    padding: 20px;
  }
  
  .tabs {
    margin-bottom: 20px;
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
  }

  .btn-finish:hover {
    background-color: #007c8a89;
  }
  
  </style>