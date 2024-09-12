<template>
  <div class="admin-test-create-container">
    <h1>CREATE TEST</h1>
    <form @submit.prevent="createTest">
      <div class="form-content">
        <div class="form-left">
          <div class="form-group">
            <label for="test-title">TEST TITLE</label>
            <input type="text" id="test-title" v-model="testTitle" required />
          </div>
          <button type="submit" class="create-test-btn">CREATE TEST</button>
        </div>

        <div class="form-right">
          <div v-for="(question, index) in questions" :key="index" class="question-container">
            <div class="question-header" @click="toggleQuestionExpansion(index)">
              <h2>QUESTION {{ index + 1 }}</h2>
              <div class="question-actions">
                <span class="expand-icon">{{ isQuestionExpanded(index) ? '-' : '+' }}</span>
                <button type="button" @click.stop="removeQuestion(index)" class="remove-question-btn">
                  REMOVE
                </button>
              </div>
            </div>
            <div class="question-content" v-if="isQuestionExpanded(index)">
              <div class="form-group">
                <label for="question-text">QUESTION TEXT</label>
                <textarea id="question-text" v-model="question.text" required></textarea>
              </div>
              <div class="form-group">
                <label>OPTIONS</label>
                <div v-for="(option, optionIndex) in question.options" :key="optionIndex" class="option-container">
                  <input type="text" v-model="question.options[optionIndex]" required />
                  <button type="button" @click="removeOption(index, optionIndex)" class="remove-option-btn">REMOVE</button>
                </div>
                <button type="button" @click="addOption(index)" class="add-option-btn">ADD OPTION</button>
              </div>
              <div class="form-group">
                <label for="correct-answer">CORRECT ANSWER</label>
                <select id="correct-answer" v-model="question.correctAnswer" required>
                  <option v-for="(option, optionIndex) in question.options" :key="optionIndex" :value="option">
                    {{ option }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <button type="button" @click="addQuestion" class="add-question-btn">ADD QUESTION</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export default {
  name: 'AdminTestCreate',
  data() {
    return {
      testTitle: '',
      questions: [
        {
          text: '',
          options: ['', ''],
          correctAnswer: '',
          expanded: true
        }
      ],
      expandedQuestionIndex: 0
    };
  },
  methods: {
    addQuestion() {
      this.questions.push({
        text: '',
        options: ['', ''],
        correctAnswer: '',
        expanded: false
      });
    },
    removeQuestion(index) {
      this.questions.splice(index, 1);
    },
    addOption(index) {
      this.questions[index].options.push('');
    },
    removeOption(index, optionIndex) {
      this.questions[index].options.splice(optionIndex, 1);
    },
    toggleQuestionExpansion(index) {
      this.questions[index].expanded = !this.questions[index].expanded;
      this.expandedQuestionIndex = this.questions[index].expanded ? index : -1;
    },
    isQuestionExpanded(index) {
      return this.expandedQuestionIndex === index;
    },
    async createTest() {
      try {
        const firestore = getFirestore();
        const testsRef = collection(firestore, 'tests');
        await addDoc(testsRef, {
          title: this.testTitle,
          questions: this.questions
        });
        this.testTitle = '';
        this.questions = [
          {
            text: '',
            options: ['', ''],
            correctAnswer: '',
            expanded: true
          }
        ];
        this.$router.push({ name: 'AdminPage' });
      } catch (error) {
        console.error('Error creating test:', error);
      }
    }
  }
};
</script>
  
<style scoped>
.admin-test-create-container {
  padding: 20px;
  font-family: 'mojFont', sans-serif;
  max-width: 1200px; 
  margin: 0 auto;
  color: #676767;
}

textarea {
  resize: none;
}

h1 {
  margin-bottom: 30px;
}

h1, h2, label, button {
  color: #676767;
}

form {
  display: flex;
  width: 100%; 
}

.form-content {
  display: flex;
  width: 100%; 
}

.form-left, .form-right {
  flex: 1; 
  margin: 0 15px; 
}

.form-left {
  display: flex;
  flex-direction: column;
  gap: 20px; 
}

.form-right {
  display: flex;
  flex-direction: column;
  gap: 20px; 
}

.question-container {
  border: 1px solid #ccc;
  margin-bottom: 10px; 
}

.question-header {
  background-color: #f5f5f5;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.question-content {
  padding: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
}

.form-group label {
  font-size: 1.2rem;
  text-align: left;
}

.option-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

input, textarea {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  color: #676767;
  border: 1px solid #ccc;
}

textarea {
  font-size: 1rem;
}

button {
  background-color: #007c8a64;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #007c8a89;
}

.add-question-btn, .create-test-btn {
  margin-top: 10px; 
}

.expand-icon {
  font-size: 20px;
  font-weight: bold;
}

.question-actions {
  display: flex;
  align-items: center;
}

button.remove-question-btn, button.remove-option-btn {
  background-color: transparent; 
  border: none; 
  color: #007c8a64; 
  cursor: pointer;
  transition: color 0.3s; 
}

button.remove-question-btn:hover, button.remove-option-btn:hover {
  color: #007c8a89; 
}
</style>
  