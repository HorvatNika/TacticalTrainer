import { createApp } from 'vue'
import App from './App.vue'
import router from 'src/router/index'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_H251--s77beHyBIJvhB5dv7Hs44RZDQ",
  authDomain: "tacticaltrainernika.firebaseapp.com",
  databaseURL: "https://tacticaltrainernika-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tacticaltrainernika",
  storageBucket: "tacticaltrainernika.appspot.com",
  messagingSenderId: "196720985535",
  appId: "1:196720985535:web:d024611915c1c2081b8d0a"
};

initializeApp(firebaseConfig);

const db = getFirestore();

createApp(App).use(router).mount('#app')

export default db;
