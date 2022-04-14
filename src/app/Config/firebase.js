import firebase from 'firebase/app';
//import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDdfl1vtdeXsvHlZdRz2-pV7oChbz_9-oE",
    authDomain: "wcontec-50c93.firebaseapp.com",
    projectId: "wcontec-50c93",
    storageBucket: "wcontec-50c93.appspot.com",
    messagingSenderId: "191288170447",
    appId: "1:191288170447:web:c32bb87af5728c023924ba"
  };
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);