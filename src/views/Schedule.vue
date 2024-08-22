<template>
  <div class="schedule">
    <h1 class="schedule-title">
      <span class="schedule-text">SCHEDULE</span>
      <span class="schedule-circle" @click="toggleTaskForm">+</span>
    </h1>
    <div class="input-container" v-if="showTaskForm">
      <input v-model="newTaskTitle" class="task-title-input" placeholder="ENTER TASK TITLE...">
      <textarea v-model="newTaskContent" class="task-content-input" placeholder="Enter task content..."></textarea>
      <div class="date-time-container">
        <input type="text" v-model="formattedDate" class="task-date-input" placeholder="DD.MM.YYYY" @input="updateDate">
        <input type="text" v-model="formattedTime" class="task-time-input" placeholder="HH:MM" @input="updateTime">
      </div>
      <div class="priority-selector">
        <div 
          class="priority-option low-priority"
          :class="{ selected: selectedPriority === 'low' }"
          @click="selectedPriority = 'low'"
          title="Low"
        >
          <span class="priority-label">Low</span>
        </div>
        <div 
          class="priority-option medium-priority"
          :class="{ selected: selectedPriority === 'medium' }"
          @click="selectedPriority = 'medium'"
          title="Medium"
        >
          <span class="priority-label">Medium</span>
        </div>
        <div 
          class="priority-option high-priority"
          :class="{ selected: selectedPriority === 'high' }"
          @click="selectedPriority = 'high'"
          title="High"
        >
          <span class="priority-label">High</span>
        </div>
      </div>
      <button @click="addTask">ADD TASK</button>
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
          <h3 class="task-title">{{ task.title }}</h3>
          <p class="task-content">{{ task.content }}</p>
          <p>{{ formatDate(task.date) }}</p>
          <p>{{ formatTime(task.time) }}</p>
        </div>
        <div v-else>
          <input v-model="task.title" class="task-title-input" placeholder="Enter task title...">
          <textarea v-model="task.content" class="task-content-input" placeholder="Enter task content..."></textarea>
          <input type="text" v-model="task.formattedDate" class="task-date-input" placeholder="DD.MM.YYYY" @input="updateTaskDate(task)">
          <input type="text" v-model="task.formattedTime" class="task-time-input" placeholder="HH:MM" @input="updateTaskTime(task)">
        </div>
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
      showTaskForm: false,
      formattedDate: '',
      formattedTime: ''
    };
  },
  methods: {
    addTask() {
      if (this.newTaskTitle.trim() === '') return;

      let color;
      switch (this.selectedPriority) {
        case 'low':
          color = '#ffa500'; 
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
        priority: this.selectedPriority
      });

      this.newTaskTitle = '';
      this.newTaskContent = '';
      this.newTaskDate = '';
      this.newTaskTime = '';
      this.formattedDate = '';
      this.formattedTime = '';
      this.selectedPriority = ''; 
      this.showTaskForm = false;
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
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
      if (this.showTaskForm) {
        this.newTaskTitle = '';
        this.newTaskContent = '';
        this.newTaskDate = '';
        this.newTaskTime = '';
        this.formattedDate = '';
        this.formattedTime = '';
        this.selectedPriority = '';
      }
      this.showTaskForm = !this.showTaskForm;
    },
    formatDate(date) {
      if (!date) return '';
      const [year, month, day] = date.split('-');
      return `${day}.${month}.${year}`;
    },
    formatTime(time) {
      if (!time) return '';
      const [hours, minutes] = time.split(':');
      return `${hours}:${minutes}`;
    },
    updateDate(event) {
      this.formattedDate = event.target.value;
      this.newTaskDate = this.convertToISODate(this.formattedDate);
    },
    updateTime(event) {
      this.formattedTime = event.target.value;
      this.newTaskTime = this.convertToISOTime(this.formattedTime);
    },
    convertToISODate(value) {
      const [day, month, year] = value.split('.');
      return `${year}-${month}-${day}`;
    },
    convertToISOTime(value) {
      return value;
    },
    updateTaskDate(task) {
      task.date = this.convertToISODate(task.formattedDate);
    },
    updateTaskTime(task) {
      task.time = this.convertToISOTime(task.formattedTime);
    }
  }
};
</script>

<style scoped>
body {
  font-family: 'mojFont', sans-serif;
  margin: 0;
  overflow: hidden;
}

.schedule {
  font-family: 'mojFont', sans-serif;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background-size: cover;
  box-sizing: border-box;
}

.schedule-title {
  font-size: 2rem;
  text-align: center;
  margin: 20px 0;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.schedule-text {
  margin-right: 10px;
  color: #676767;
}

.schedule-circle {
  width: 25px;
  height: 25px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 1.25rem;
  cursor: pointer;
}

.input-container {
  max-width: 500px;
  margin: 20px auto;
  padding: 40px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.task-title-input {
  font-size: 1.2rem;
  width: 100%;
  max-width: 400px;
  margin-bottom: 5px;
  border: none;
  padding: 8px;
  box-sizing: border-box;
  text-align: center;
  color: #676767;
}

.task-title-input:focus {
  outline: none;
}

.task-content-input {
  font-size: 1rem;
  width: 100%;
  max-width: 400px;
  margin-bottom: 10px;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  resize: none;
  color: #676767;
}

.task-content-input:focus {
  outline: none;
}

.date-time-container {
  display: flex;
  justify-content: center;
  gap: 5px; 
  margin-bottom: 10px;
}

.task-date-input, .task-time-input {
  font-size: 1rem;
  border: none;
  padding: 8px;
  box-sizing: border-box;
  width: 100px; 
  color: #676767;
  text-align: center;
}

.task-date-input:focus, .task-time-input:focus {
  outline: none;
}

button {
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  background-color: #00adb5;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

button:hover {
  background-color: #38b8bf;
}

.tasks-container {
  position: relative;
  width: 100%;
  min-height: 500px;
}

.task-box {
  position: absolute;
  width: 300px;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.85);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: move;
  background-color: rgba(255, 255, 255, 0.85);
  overflow: hidden;
  box-sizing: border-box;
  text-align: center;
  color: #676767;
  font-size: 1rem;
}

.task-box h3 {
  font-size: 1.1rem;
  margin: 0;
  padding: 5px 0;
}

.task-box p {
  margin: 0;
  padding: 5px 0;
}

.task-box input[type="checkbox"] {
  margin: 10px 0;
}

.task-box button {
  margin: 5px 0;
  font-size: 1rem;
}

.priority-selector {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 0px;
}

.priority-option {
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 50px;
}

.priority-option.selected {
  border: 1px solid #676767;
}

.low-priority .priority-label {
  color: #ffa500;
}

.medium-priority .priority-label {
  color: #a9d98e;
}

.high-priority .priority-label {
  color: #f9a1a1;
}
</style>
