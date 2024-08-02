<template>
  <div class="schedule">
    <h1 class="schedule-title">
      <span class="schedule-text">SCHEDULE</span>
      <span class="schedule-circle" @click="toggleTaskForm">+</span>
    </h1>
    <div class="input-container" v-if="showTaskForm">
      <input v-model="newTaskTitle" class="task-title-input" placeholder="Enter task title...">
      <textarea v-model="newTaskContent" placeholder="Enter task content..."></textarea>
      <input type="date" v-model="newTaskDate">
      <input type="time" v-model="newTaskTime">
      <div class="priority-selector">
        <label>Priority:</label>
        <div class="priority-options">
          <div 
            class="priority-option low-priority"
            :class="{ selected: selectedPriority === 'low' }"
            @click="selectedPriority = 'low'"
            title="Low"
          >
            <div class="priority-circle"></div>
            <span class="priority-label">Low</span>
          </div>
          <div 
            class="priority-option medium-priority"
            :class="{ selected: selectedPriority === 'medium' }"
            @click="selectedPriority = 'medium'"
            title="Medium"
          >
            <div class="priority-circle"></div>
            <span class="priority-label">Medium</span>
          </div>
          <div 
            class="priority-option high-priority"
            :class="{ selected: selectedPriority === 'high' }"
            @click="selectedPriority = 'high'"
            title="High"
          >
            <div class="priority-circle"></div>
            <span class="priority-label">High</span>
          </div>
        </div>
      </div>
      <button @click="addTask">Add Task</button>
    </div>
    <div class="tasks-container">
      <div
        v-for="task in tasks"
        :key="task.id"
        class="task-box"
        :style="{ top: task.top + 'px', left: task.left + 'px', backgroundColor: task.color }"
        @mousedown="startDrag($event, task)"
      >
        <div v-if="!task.editing">
          <h3>{{ task.title }}</h3>
          <p>{{ task.content }}</p>
          <p><strong>Date:</strong> {{ task.date }}</p>
          <p><strong>Time:</strong> {{ task.time }}</p>
          <p><strong>Priority:</strong> {{ task.priority }}</p>
        </div>
        <div v-else>
          <input v-model="task.title" class="task-title-input" placeholder="Enter task title...">
          <textarea v-model="task.content" placeholder="Enter task content..."></textarea>
          <input type="date" v-model="task.date">
          <input type="time" v-model="task.time">
          <div class="priority-selector">
            <label>Priority:</label>
            <div class="priority-options">
              <div 
                class="priority-option low-priority"
                :class="{ selected: task.priority === 'low' }"
                @click="task.priority = 'low'; task.color = '#fef2b1'"
                title="Low"
              >
                <div class="priority-circle"></div>
                <span class="priority-label">Low</span>
              </div>
              <div 
                class="priority-option medium-priority"
                :class="{ selected: task.priority === 'medium' }"
                @click="task.priority = 'medium'; task.color = '#a9d98e'"
                title="Medium"
              >
                <div class="priority-circle"></div>
                <span class="priority-label">Medium</span>
              </div>
              <div 
                class="priority-option high-priority"
                :class="{ selected: task.priority === 'high' }"
                @click="task.priority = 'high'; task.color = '#f9a1a1'"
                title="High"
              >
                <div class="priority-circle"></div>
                <span class="priority-label">High</span>
              </div>
            </div>
          </div>
        </div>
        <input type="checkbox" v-model="task.completed">
        <button @click.stop="toggleEdit(task)">{{ task.editing ? 'Save' : 'Edit' }}</button>
        <button @click.stop="removeTask(task.id)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: '',
      newTaskContent: '',
      newTaskDate: '',
      newTaskTime: '',
      tasks: [],
      nextId: 1,
      selectedPriority: '',
      draggingTask: null,
      offsetX: 0,
      offsetY: 0,
      showTaskForm: false
    };
  },
  methods: {
    addTask() {
      if (this.newTaskTitle.trim() === '') return;

      let color;
      switch (this.selectedPriority) {
        case 'low':
          color = '#fef2b1'; 
          break;
        case 'medium':
          color = '#a9d98e'; 
          break;
        case 'high':
          color = '#f9a1a1'; 
          break;
        default:
          color = '#ffffff'; 
      }

      this.tasks.push({
        id: this.nextId++,
        title: this.newTaskTitle.trim(),
        content: this.newTaskContent.trim(),
        date: this.newTaskDate,
        time: this.newTaskTime,
        completed: false,
        top: 100, 
        left: 100, 
        color: color,
        priority: this.selectedPriority, 
        editing: false 
      });

      this.newTaskTitle = '';
      this.newTaskContent = '';
      this.newTaskDate = '';
      this.newTaskTime = '';
      this.selectedPriority = ''; 
      this.showTaskForm = false;
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    },
    toggleEdit(task) {
      task.editing = !task.editing;
      if (!task.editing) {
        task.title = task.title.trim();
        task.content = task.content.trim();
      }
    },
    startDrag(event, task) {
      this.draggingTask = task;
      this.offsetX = event.clientX - task.left;
      this.offsetY = event.clientY - task.top;
      window.addEventListener('mousemove', this.onDrag);
      window.addEventListener('mouseup', this.stopDrag);
    },
    onDrag(event) {
      if (!this.draggingTask) return;
      this.draggingTask.top = event.clientY - this.offsetY;
      this.draggingTask.left = event.clientX - this.offsetX;
    },
    stopDrag() {
      this.draggingTask = null;
      window.removeEventListener('mousemove', this.onDrag);
      window.removeEventListener('mouseup', this.stopDrag);
    },
    toggleTaskForm() {
      this.showTaskForm = !this.showTaskForm;
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: 'drugiFont';
  src: url('@/assets/font/drugiFont.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

body {
  font-family: 'drugiFont', sans-serif;
  margin: 0;
  overflow: hidden;
}

.schedule {
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background: #f5f5f5;
  box-sizing: border-box;
}

.schedule-title {
  font-family: 'drugiFont', sans-serif;
  font-size: 2em;
  text-align: center;
  margin: 20px 0;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.schedule-text {
  margin-right: 10px;
}

.schedule-circle {
  width: 25px;
  height: 25px;
  background-color: #007bff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  cursor: pointer;
}

.input-container {
  max-width: 500px;
  margin: 20px auto;
  padding: 15px;
  background: #fff;
  border-radius: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

input[type="text"], textarea, input[type="date"], input[type="time"] {
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  box-sizing: border-box;
}

textarea {
  height: 70px;
  resize: none;
  margin-top: 15px;
  text-align: center; 
}

button {
  padding: 8px 14px;
  border: none;
  border-radius: 40px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

button:hover {
  background-color: #0056b3;
}

.tasks-container {
  position: relative;
  width: 100%;
  min-height: 500px;
}

.task-box {
  position: absolute;
  width: 300px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 40px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  cursor: move;
  background-color: #fff;
  overflow: hidden;
  box-sizing: border-box;
  text-align: center; 
}

.task-box h3, .task-box p {
  margin: 0;
  padding: 5px 0; 
}

.task-box input[type="checkbox"] {
  margin: 10px 0;
}

.task-box button {
  margin: 5px 0;
}

.priority-selector {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
}

.priority-selector label {
  margin-bottom: 12px;
  font-size: 1.2em;
}

.priority-options {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.priority-option {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  position: relative;
  transition: filter 0.3s ease;
}

.priority-circle {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}

.priority-label {
  text-align: center;
  font-size: 14px;
}

.low-priority .priority-circle {
  background-color: #fef2b1;
}

.medium-priority .priority-circle {
  background-color: #a9d98e;
}

.high-priority .priority-circle {
  background-color: #f9a1a1;
}

.priority-option.selected .priority-circle {
  filter: brightness(105%);
}

.task-title-input {
  border: none;
  background: #fff;
  padding: 10px;
  text-align: center; 
}

.task-title-input::placeholder {
  text-align: center; 
}

.task-title-input:focus {
  outline: none;
}
</style>