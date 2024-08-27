<template>
  <div id="app">
    <div class="header">
      <h1><strong>TEST</strong></h1>
    </div>

    <div class="progress-container">
      <div class="progress-bar-container">
        <div class="progress-bar">
          <div class="progress-bar-fill" :style="{ width: progressBarWidth + '%' }"></div>
        </div>
      </div>
      <div class="countdown-timer">
        <h2>{{ formattedTime }}</h2>
      </div>
    </div>

    <div class="main-container">
      <div class="question-box">
        <div v-if="!submitted" class="question-container">
          <h2 v-html="`${currentQuestion + 1}. ${questions[currentQuestion].text}`" class="question-text"></h2>

          <div class="radio-container">
            <div class="radio-group">
              <div v-for="(option, optionIndex) in questions[currentQuestion].options" :key="optionIndex" class="radio-option">
                <input
                  type="radio"
                  :id="'option-' + currentQuestion + '-' + optionIndex"
                  :name="'question' + currentQuestion"
                  :value="option"
                  v-model="answers[currentQuestion]"
                />
                <label :for="'option-' + currentQuestion + '-' + optionIndex">
                  {{ option }}
                </label>
              </div>
            </div>
          </div>

          <div class="navigation">
            <span class="nav-link" @click="prevQuestion" :class="{ 'disabled': currentQuestion === 0 }">PREVIOUS</span>
            <span class="nav-link" @click="nextQuestion" :class="{ 'disabled': currentQuestion === questions.length - 1 }">NEXT</span>
            <span class="nav-link clear-answer" @click="clearAnswer">CLEAR ANSWER</span>
            <span class="mark-question" @click="markQuestion">
              {{ isMarked ? 'UNMARK' : 'MARK' }}
            </span>
          </div>
        </div>

        <div v-if="submitted" class="submitted-container">
          <h2 class="score">SCORE: {{ score }}/{{ questions.length }}</h2>
          <span class="restart-button" @click="restartQuiz">RESTART</span>
          <span class="export-button" @click="exportToExcel">EXPORT TO EXCEL</span>
        </div>
      </div>

      <div class="sidebar-box" v-show="!submitted">
        <div class="sidebar">
          <div class="question-status">
            <div
              v-for="(question, index) in questions"
              :key="index"
              :class="['status-circle', getStatusClass(index)]"
              @click="goToQuestion(index)"
            >
              {{ index + 1 }}
            </div>
          </div>
          <div class="finish-button-container">
            <button class="btn-finish" @click="submitAnswers">FINISH</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as XLSX from 'xlsx';

export default {
  data() {
    return {
      currentQuestion: 0,
      questions: [
        { text: 'Which type of action mechanism is used in a Glock 17?', options: ['Striker-fired', 'Hammer-fired', 'Revolving', 'Bolt-action'], correctAnswer: 'Striker-fired', marked: false },
        { text: 'What is a common feature of the Colt 1911?', options: ['Single-action trigger', 'Double-action trigger', 'Revolver cylinder', 'Integrated laser sight'], correctAnswer: 'Single-action trigger', marked: false },
        { text: 'Which of the following is a characteristic of a .357 Magnum revolver?', options: ['High recoil and power', 'Low capacity', 'Semi-automatic', 'Compact design'], correctAnswer: 'High recoil and power', marked: false },
        { text: 'The Beretta 92 is known for which of the following?', options: ['Double-action/single-action mechanism', 'Revolver mechanism', 'Single-shot capability', 'Break-action design'], correctAnswer: 'Double-action/single-action mechanism', marked: false },
        { text: 'Which of the following is <strong>NOT</strong> a type of semi-automatic pistol?', options: ['1911', 'Glock', 'Beretta', 'Smith & Wesson Model 29'], correctAnswer: 'Smith & Wesson Model 29', marked: false },
        { text: 'What is the maximum magazine capacity of an M4 carbine?', options: ['10 rounds', '20 rounds', '30 rounds', '40 rounds'], correctAnswer: '30 rounds', marked: false },
        { text: 'Which of the following is a common caliber for a sniper rifle?', options: ['.22 LR', '.223 Remington', '.308 Winchester', '9mm'], correctAnswer: '.308 Winchester', marked: false },
        { text: 'What action type is commonly found in an AR-15?', options: ['Bolt-action', 'Lever-action', 'Semi-automatic', 'Break-action'], correctAnswer: 'Semi-automatic', marked: false },
        { text: 'Which firearm is known for its bullpup design?', options: ['AK-47', 'M16', 'Steyr AUG', 'FN SCAR'], correctAnswer: 'Steyr AUG', marked: false },
        { text: 'Which of the following is a characteristic of a double-barrel shotgun?', options: ['Single trigger', 'Two separate barrels', 'Automatic reloading', 'High magazine capacity'], correctAnswer: 'Two separate barrels', marked: false },
        { text: 'Which type of sight is commonly used on handguns for precision shooting?', options: ['Iron sights', 'Red dot sight', 'Laser sight', 'Holographic sight'], correctAnswer: 'Iron sights', marked: false },
        { text: 'What is the purpose of a compensator on a firearm?', options: ['Increase magazine capacity', 'Reduce recoil', 'Enhance accuracy', 'Improve grip'], correctAnswer: 'Reduce recoil', marked: false },
        { text: 'Which material is commonly used for firearm barrels?', options: ['Aluminum', 'Stainless steel', 'Plastic', 'Wood'], correctAnswer: 'Stainless steel', marked: false },
        { text: 'What is the primary function of a firearm’s safety mechanism?', options: ['Increase accuracy', 'Prevent accidental discharge', 'Enhance range', 'Improve trigger pull'], correctAnswer: 'Prevent accidental discharge', marked: false },
        { text: 'Which of the following calibers is considered a high-power rifle round?', options: ['.22 LR', '.30-06 Springfield', '.45 ACP', '5.56 NATO'], correctAnswer: '.30-06 Springfield', marked: false }
      ],
      answers: Array(15).fill(''),
      submitted: false,
      isMarked: false,
      score: 0,
      elapsedTime: 0,
      timer: null,
      sidebarVisible: true
    };
  },
  computed: {
    progressBarWidth() {
      return ((this.currentQuestion + 1) / this.questions.length) * 100;
    },
    formattedTime() {
      const minutes = Math.floor(this.elapsedTime / 60);
      const seconds = this.elapsedTime % 60;
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    },
    mainContainerClass() {
      return {
        'full-width': !this.sidebarVisible
      };
    }
  },
  methods: {
    prevQuestion() {
      if (this.currentQuestion > 0) {
        this.currentQuestion--;
      }
    },
    nextQuestion() {
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++;
      }
    },
    submitAnswers() {
      this.calculateScore();
      this.submitted = true;
      this.sidebarVisible = false;
      this.stopTimer();
    },
    calculateScore() {
      this.score = this.questions.reduce((total, question, index) => {
        if (this.questions[index].marked) {
          return total; 
        }
        if (this.answers[index] === question.correctAnswer) {
          return total + 1; 
        } else if (this.answers[index] === '') {
          return total - 1; 
        } else {
          return total - 1;
        }
      }, 0);
    },
    markQuestion() {
      this.questions[this.currentQuestion].marked = !this.questions[this.currentQuestion].marked;
      this.isMarked = this.questions[this.currentQuestion].marked;
    },
    clearAnswer() {
      this.answers[this.currentQuestion] = '';
    },
    getStatusClass(index) {
      if (this.questions[index].marked) {
        return 'yellow'; 
      } else if (this.answers[index] !== '') {
        return 'green'; 
      } else {
        return 'white'; 
      }
    },
    goToQuestion(index) {
      this.currentQuestion = index;
    },
    restartQuiz() {
      this.currentQuestion = 0;
      this.answers = Array(this.questions.length).fill('');
      this.submitted = false;
      this.sidebarVisible = true;
      this.startTimer();
    },
    exportToExcel() {
      const wb = XLSX.utils.book_new();
      
      const questionsData = this.questions.map((q, index) => ({
        Question: q.text,
        YourAnswer: this.answers[index] || 'Not Answered',
        CorrectAnswer: q.correctAnswer
      }));
      
      const ws1 = XLSX.utils.json_to_sheet(questionsData);
      XLSX.utils.book_append_sheet(wb, ws1, 'Questions and Answers');
      
      const summaryData = [
        { Label: 'Total Score', Value: this.score },
        { Label: 'Time', Value: this.formattedTime }
      ];
      
      const ws2 = XLSX.utils.json_to_sheet(summaryData);
      XLSX.utils.book_append_sheet(wb, ws2, 'Summary');

      XLSX.writeFile(wb, 'TT-Test.xlsx');
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.elapsedTime++;
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.timer);
    }
  },
  mounted() {
    this.startTimer();
  }
};
</script>

<style>
body, #app, h1, h2, button, input, label {
  font-family: 'mojFont', sans-serif;
  margin: 0;
  padding: 0;
}

.header {
  text-align: center;
  margin-bottom: 20px;
  padding: 0 20px; 
}

.header h1 {
  color: #676767;
  font-size: 2.5rem;
  margin: 0; 
}

.progress-container {
  position: relative;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  padding: 0 20px; 
}

.progress-bar-container {
  width: 30%;
  margin: 0 auto;
  position: relative;
}

.progress-bar {
  height: 10px;
  background-color: #eee;
  border-radius: 30px;
  position: relative;
  margin: 0 auto;
}

.progress-bar-fill {
  height: 100%;
  width: 0;
  background-color: #007c8a64;
  border-radius: 30px;
  transition: width 0.3s;
}

.countdown-timer {
  margin-top: 10px;
}

.countdown-timer h2 {
  font-size: 18px;
  color: #7c7c7c;
  margin: 0;
}

.main-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px; 
  padding: 0 20px; 
}

.question-box {
  background-color: #fff; 
  padding: 40px;
  border-radius: 0px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 620px;
  height: 350px;
  overflow: auto;
  text-align: left;
  box-sizing: border-box;
}

.question-text {
  font-size: 20px;
  margin-bottom: 20px;
  color: #676767;
}

.radio-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.radio-option {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.radio-option input[type="radio"] {
  margin-right: 10px;
  appearance: none;
  -webkit-appearance: none;
  border-radius: 50%;
  border: 2px solid #007c8a89;
  width: 15px;
  height: 15px;
  background-color: #fff;
  cursor: pointer;
  position: relative;
}

.radio-option input[type="radio"]::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #007c8a64;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.3s;
  opacity: 0;
}

.radio-option input[type="radio"]:checked::before {
  opacity: 1;
}

.radio-option label {
  color: #7b7b7b;
  cursor: pointer;
}

.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

.nav-link {
  font-size: 18px;
  color: #007c8a64;
  cursor: pointer;
  margin: 0 15px;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-link.disabled {
  color: #b0b0b0; 
  cursor: not-allowed; 
}

.nav-link:hover {
  color: #007c8a89;
}

.clear-answer {
  font-size: 18px;
  color: #007c8a64;
  cursor: pointer;
  margin: 0 15px;
  text-decoration: none;
  transition: color 0.3s;
}

.clear-answer:hover {
  color: #007c8a89;
}

.mark-question {
  font-size: 18px;
  color: #007c8a64;
  cursor: pointer;
  margin: 0 15px;
}

.mark-question:hover {
  color: #007c8a89;
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

.sidebar-box {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 30px; 
}

.sidebar {
  background-color: #fff; 
  padding: 20px;
  border-radius: 0px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px; 
}

.question-status {
  display: flex;
  flex-wrap: wrap;
  gap: 10px; 
}

.status-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #007c8a64;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #007c8a64;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.status-circle.green {
  background-color: #6cb06f;
  color: white;
}

.status-circle.white {
  background-color: white;
  color: #007c8a64;
}

.status-circle.yellow {
  background-color: #ffd447;
  color: white;
}

.finish-button-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.score {
  color: #676767;
}

.status-circle:hover {
  background-color: #007c8a64; 
  color: white; 
}

.submitted-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.score {
  color: #676767;
  margin-bottom: 10px;
}

.restart-button {
  font-size: 20px;
  color: #007c8a64;
  cursor: pointer;
  text-decoration: none;
  margin: 0;
  display: flex;
  justify-content: center;
}

.restart-button:hover {
  color: #007c8a89;
}

.export-button {
  font-size: 18px;
  color: #7b7b7b;
  cursor: pointer;
  margin-top: 20px;
  text-decoration: none;
  transition: color 0.3s;
}

.export-button:hover {
  color: #676767;
}

.main-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  padding: 0 20px;
  width: 100%; 
}

.sidebar-box {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 30px;
}

.sidebar-box.hidden {
  display: none; 
}

.main-container.full-width {
  justify-content: center;
}
</style>
