<template>
  <div id="app">
    <h1><strong>TEST</strong></h1>

    <div class="progress-bar-container" v-if="!submitted">
      <div class="progress-bar">
        <div class="progress-bar-fill" :style="{ width: progressBarWidth + '%' }"></div>
        <div v-for="(question, index) in questions" :key="index" class="progress-segment" :class="{ 'active': index <= currentQuestion }"></div>
      </div>
    </div>

    <div v-if="!submitted" class="countdown-timer">
      <h2>{{ formattedTime }}</h2>
    </div>

    <div v-if="!submitted && currentQuestion >= 0 && currentQuestion < questions.length">
      <h2 v-html="questions[currentQuestion].text"></h2>

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
        <span v-if="currentQuestion === questions.length - 1" class="nav-link" @click="submitAnswers">SEND</span>
      </div>

      <div v-if="showError" class="error">
      </div>
    </div>

    <div v-if="submitted">
      <h2>SCORE: {{ score }}/{{ questions.length }}</h2>
      <span class="nav-link" @click="restartQuiz">RESTART</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentQuestion: 0,
      questions: [
        {
          text: 'Which type of action mechanism is used in a Glock 17?',
          type: 'radio',
          options: [
            'Striker-fired',
            'Hammer-fired',
            'Revolving',
            'Bolt-action'
          ],
          correctAnswer: 'Striker-fired'
        },
        {
          text: 'What is a common feature of the Colt 1911?',
          type: 'radio',
          options: [
            'Single-action trigger',
            'Double-action trigger',
            'Revolver cylinder',
            'Integrated laser sight'
          ],
          correctAnswer: 'Single-action trigger'
        },
        {
          text: 'Which of the following is a characteristic of a .357 Magnum revolver?',
          type: 'radio',
          options: [
            'High recoil and power',
            'Low capacity',
            'Semi-automatic',
            'Compact design'
          ],
          correctAnswer: 'High recoil and power'
        },
        {
          text: 'The Beretta 92 is known for which of the following?',
          type: 'radio',
          options: [
            'Double-action/single-action mechanism',
            'Revolver mechanism',
            'Single-shot capability',
            'Break-action design'
          ],
          correctAnswer: 'Double-action/single-action mechanism'
        },
        {
          text: 'Which of the following is <strong>NOT</strong> a type of semi-automatic pistol?',
          type: 'radio',
          options: [
            '1911',
            'Glock',
            'Beretta',
            'Smith & Wesson Model 29'
          ],
          correctAnswer: 'Smith & Wesson Model 29'
        }
      ],
      answers: Array(5).fill(''), 
      submitted: false,
      showError: false,
      score: 0,
      timeRemaining: 300,
      timer: null
    };
  },
  computed: {
    progressBarWidth() {
      return ((this.currentQuestion + 1) / this.questions.length) * 100;
    },
    formattedTime() {
      const minutes = Math.floor(this.timeRemaining / 60);
      const seconds = this.timeRemaining % 60;
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
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
      if (this.answers.includes('')) {
        this.showError = true;
      } else {
        this.calculateScore();
        this.submitted = true;
        this.stopTimer();
      }
    },
    calculateScore() {
      this.score = this.questions.reduce((total, question, index) => {
        if (this.answers[index] === question.correctAnswer) {
          return total + 1;
        } else {
          return total;
        }
      }, 0);
    },
    restartQuiz() {
      this.currentQuestion = 0;
      this.answers = Array(this.questions.length).fill('');
      this.submitted = false;
      this.showError = false;
      this.score = 0;
      this.timeRemaining = 300; 
      this.startTimer(); 
    },
    startTimer() {
      this.stopTimer(); 
      this.timer = setInterval(() => {
        if (this.timeRemaining > 0) {
          this.timeRemaining--;
        } else {
          this.submitAnswers(); 
        }
      }, 1000);
    },
    stopTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }
  },
  mounted() {
    this.startTimer(); 
  },
  beforeDestroy() {
    this.stopTimer(); 
  }
};
</script>

<style scoped>
body, #app, h1, h2, button, input, label {
  font-family: 'mojFont', sans-serif;
}

h1 {
  color: #676767;
  font-size: 2.5rem; 
}

h2 {
  color: #676767
}

.progress-bar-container {
  display: flex;
  justify-content: center;
  margin-bottom: 10px; 
}

.progress-bar {
  height: 10px;
  width: 30%;
  background-color: #eee;
  border-radius: 30px;
  position: relative;
}

.progress-bar-fill {
  height: 100%;
  width: 0;
  background-color: #007c8a85;
  border-radius: 3px;
  transition: width 0.3s;
}

.progress-segment {
  height: 100%;
  flex: 1;
  background-color: #ddd;
  border-right: 2px solid #eee;
  display: inline-block;
}

.progress-segment:last-child {
  border-right: none;
}

.countdown-timer {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.countdown-timer h2 {
  font-size: 20px;
  color: #7c7c7c;
  margin: 0;
  margin-left: 517px;
}

.radio-container {
  display: flex;
  justify-content: center;
}

.radio-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
}

.radio-option {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  position: relative;
  right: 130px;
  top: 20px;
}

.radio-option input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  border-radius: 50%;
  border: 2px solid #007c8a89;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
  position: relative;
  margin-right: 10px;
  box-sizing: border-box;
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
  color: #676767;
  cursor: pointer;
}

.navigation {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.nav-link {
  font-size: 16px;
  color: #007c8a64;
  cursor: pointer;
  margin: 0 20px;
  text-decoration: none; /* Ukloni podcrtavanje */
  transition: color 0.3s;
}

.nav-link:hover {
  color: #007c8a89;
}

.nav-link.disabled {
  color: #ddd;
  cursor: not-allowed;
}

.btn-primary {
  background-color: #007c8a64;
  border-color: #007c8a64;
  border-radius: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  padding: 10px 30px;
  font-size: 16px;
  text-align: center;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s;
  margin: 4px 2px;
}

.btn-primary:hover {
  background-color: #007c8a89;
  border-color: #007c8a89;
}

.error {
  color: red;
  margin-top: 20px;
  text-align: center;
}
</style>
