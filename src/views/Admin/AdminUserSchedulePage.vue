<template>
    <div class="admin-user-schedule-container">
      <h1>USER SCHEDULE</h1>
      <table>
        <thead>
          <tr>
            <th>TASK TITLE</th>
            <th>TASK DESCRIPTION</th>
            <th>DUE DATE</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td>{{ task.title }}</td>
            <td>{{ task.description }}</td>
            <td>{{ task.dueDate }}</td>
            <td>{{ task.status }}</td>
            <td>
              <button class="btn-finish" @click="editTask(task)">EDIT</button>
              <button class="btn-finish" @click="deleteTask(task)">DELETE</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { getFirestore, collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
  
  export default {
    name: 'AdminUserSchedulePage',
    data() {
      return {
        tasks: []
      };
    },
    methods: {
      async fetchTaskData() {
        try {
          const firestore = getFirestore();
          const userId = this.$route.params.userId;
          const tasksRef = collection(firestore, 'users', userId, 'tasks');
          const snapshot = await getDocs(tasksRef);
          this.tasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      },
      async editTask(task) {
        try {
          const firestore = getFirestore();
          const userId = this.$route.params.userId;
          const taskRef = doc(firestore, 'users', userId, 'tasks', task.id);
          await updateDoc(taskRef, task);
        } catch (error) {
          console.error('Error updating task:', error);
        }
      },
      async deleteTask(task) {
        try {
          const firestore = getFirestore();
          const userId = this.$route.params.userId;
          const taskRef = doc(firestore, 'users', userId, 'tasks', task.id);
          await deleteDoc(taskRef);
        } catch (error) {
          console.error('Error deleting task:', error);
        }
      }
    },
    mounted() {
      this.fetchTaskData();
    }
  };
  </script>
  
  <style scoped>
  .admin-user-schedule-container {
    padding: 20px;
    font-family: 'mojFont', sans-serif;
    color: #676767;
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