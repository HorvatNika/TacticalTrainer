import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC_H251--s77beHyBIJvhB5dv7Hs44RZDQ",
    authDomain: "tacticaltrainernika.firebaseapp.com",
    projectId: "tacticaltrainernika",
    storageBucket: "tacticaltrainernika.appspot.com",
    messagingSenderId: "196720985535",
    appId: "1:196720985535:web:d024611915c1c2081b8d0a"
  };

const app = initializeApp(firebaseConfig);

export default {
    firebase,
}