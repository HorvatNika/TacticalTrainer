<template>
<div class="admin-test-edit-container">
    <h1>Edit Test</h1>
    <form @submit.prevent="updateTest">
    <div class="form-group">
        <label for="test-title">Test Title:</label>
        <input type="text" id="test-title" v-model="testTitle" required />
    </div>
    <div class="form-group">
        <label for="test-description">Test Description:</label>
        <textarea id="test-description" v-model="testDescription" required></textarea>
    </div>
    <div v-for="(question, index) in questions" :key="index" class="question-container">
        <div class="question-header" @click="toggleQuestionExpansion(index)">
        <h2>Question {{ index + 1 }}</h2>
        <div class="question-actions">
            <span class="expand-icon">{{ isQuestionExpanded(index) ? '-' : '+' }}</span>
            <button type="button" @click.stop="removeQuestion(index)" class="remove-question-btn">
            Remove
            </button>
        </div>
        </div>
        <div class="question-content" v-if="isQuestionExpanded(index)">
        <div class="form-group">
            <label for="question-text">Question Text:</label>
            <textarea id="question-text" v-model="question.text" required></textarea>
        </div>
        <div class="form-group">
            <label>Options:</label>
            <div v-for="(option, optionIndex) in question.options" :key="optionIndex" class="option-container">
            <input type="text" v-model="question.options[optionIndex]" required />
            <button type="button" @click="removeOption(index, optionIndex)">Remove</button>
            </div>
            <button type="button" @click="addOption(index)">Add Option</button>
        </div>
        <div class="form-group">
            <label for="correct-answer">Correct Answer:</label>
            <select id="correct-answer" v-model="question.correctAnswer" required>
            <option v-for="(option, optionIndex) in question.options" :key="optionIndex" :value="option">
                {{ option }}
            </option>
            </select>
        </div>
        <div class="form-group">
            <label>
            <input type="checkbox" v-model="question.marked" />
            Mark Question
            </label>
        </div>
        </div>
    </div>
    <button type="button" @click="addQuestion" class="add-question-btn">Add Question</button>
    <button type="submit">Update Test</button>
    </form>
</div>
</template>

<script>
import db from 'src/main';
import { getDoc, doc, updateDoc } from 'firebase/firestore';


export default {
name: 'AdminTestEdit',
data() {
    return {
    testTitle: '',
    testDescription: '',
    questions: [],
    expandedQuestionIndex: 0
    };
},
async mounted() {
    await this.loadTest();
},
methods: {
    async loadTest() {
        const testDoc = doc(db, 'tests', this.$route.params.id);
        const testSnapshot = await getDoc(testDoc);
        if (testSnapshot.exists()) {
            const testData = testSnapshot.data();
            this.testTitle = testData.title;
            this.testDescription = testData.description;
            this.questions = testData.questions;
        } else {
            console.error('Test not found');
        }
    },
    addQuestion() {
        this.questions.push({
            text: '',
            options: ['', ''],
            correctAnswer: '',
            marked: false,
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
    async updateTest() {
    try {
        const testDoc = doc(db, 'tests', this.$route.params.id);
        await updateDoc(testDoc, {
        title: this.testTitle,
        description: this.testDescription,
        questions: this.questions
        });
        this.$router.push({ name: 'Admin' });
    } catch (error) {
        console.error('Error updating test:', error);
    }
    }
}
};
</script>

<style scoped>
.admin-test-create-container {
padding: 20px;
}

form {
display: flex;
flex-direction: column;
gap: 20px;
}

.question-container {
border: 1px solid #ccc;
border-radius: 4px;
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

.option-container {
display: flex;
align-items: center;
gap: 10px;
}

input, textarea {
width: 100%;
padding: 5px;
}

.add-question-btn {
margin-bottom: 10px;
}

.expand-icon {
font-size: 20px;
font-weight: bold;
}

.question-actions {
display: flex;
align-items: center;
gap: 10px;
}

.remove-question-btn {
color: #dc3545;
background-color: transparent;
border: none;
cursor: pointer;
}
</style>

