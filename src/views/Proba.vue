<template>
    <div id="app">
        <h1><strong>PISTOLS</strong></h1>

        <!-- Progress Bar -->
        <div class="progress-bar-container">
            <div class="progress-bar">
                <div class="progress-bar-fill" :style="{ width: progressBarWidth + '%' }"></div>
                <div v-for="(question, index) in questions" :key="index" class="progress-segment" :class="{ 'active': index <= currentQuestion }"></div>
            </div>
        </div>

        <div v-if="currentQuestion >= 0 && currentQuestion < questions.length">
            <h2 v-html="questions[currentQuestion].text"></h2>

            <!-- Question Type Display (All as Radio Buttons) -->
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
                <button @click="prevQuestion" :disabled="currentQuestion === 0">Previous</button>
                <button v-if="currentQuestion < questions.length - 1" @click="nextQuestion">Next</button>
                <button v-if="currentQuestion === questions.length - 1" @click="submitAnswers">SEND</button>
            </div>

            <!-- Validation -->
            <div v-if="showError" class="error">
                Molimo vas da proverite svoje odgovore pre nego što pošaljete test.
            </div>
        </div>

        <!-- Results Display -->
        <div v-if="submitted">
            <h2>Rezultat: {{ score }}/{{ questions.length }}</h2>
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
            score: 0
        };
    },
    computed: {
        progressBarWidth() {
            return ((this.currentQuestion + 1) / this.questions.length) * 100;
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
        },
        calculateScore() {
            this.score = this.questions.reduce((total, question, index) => {
                if (this.answers[index] === question.correctAnswer) {
                    return total + 1;
                } else if (this.answers[index] === '') {
                    return total - 1;
                } else {
                    return total;
                }
            }, 0);
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

body, #app {
    font-family: 'drugiFont', sans-serif;
}

h1, h2, button {
    font-family: 'drugiFont', sans-serif;
}

.progress-bar-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
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

.radio-option input {
    position: absolute;
    left: 0;
    cursor: pointer;
}

.radio-option input + label {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    padding-left: 30px;
    white-space: nowrap; 
}

.radio-option input + label::before {
    content: '';
    position: absolute;
    left: 0; 
    top: 50%;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border: 2px solid #ccc;
    border-radius: 50%;
    transform: translateY(-50%);
    transition: background-color 0.3s;
}

.radio-option input:checked + label::before {
    background-color: #007c8a85; 
    border-color: #007c8a85;
}

.navigation {
    margin-top: 20px;
    text-align: center;
}

button {
    margin: 0 10px;
    padding: 10px 20px;
    border: 1px solid #007c8a85;
    border-radius: 30px;
    background-color: #007c8a85;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;
}

button:disabled {
    background-color: #ddd;
    border-color: #ddd;
    cursor: not-allowed;
}

button:hover:not(:disabled) {
    background-color: #007c8a85;
    border-color: #007c8a85;
}

.error {
    color: red;
    margin-top: 10px;
    text-align: center;
}
</style>
