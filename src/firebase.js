import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC2dXGdh-PyawAgECzjrfMOKmBOJY2u_V4",
    authDomain: "tactical-trainer.firebaseapp.com",
    projectId: "tactical-trainer",
    storageBucket: "tactical-trainer.appspot.com",
    messagingSenderId: "415015639098",
    appId: "1:415015639098:web:321e6cd8c9f0812effbd03"
  };

  const app = initializeApp(firebaseConfig);

export default {
    firebase,
}