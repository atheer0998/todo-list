import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBbzwEuHr9AXM8kVchBqzky3LBPc4SJH2o",
    authDomain: "my-todolist-app-ef0b7.firebaseapp.com",
    projectId: "my-todolist-app-ef0b7",
    storageBucket: "my-todolist-app-ef0b7.appspot.com",
    messagingSenderId: "905911575957",
    appId: "1:905911575957:web:dd603299fbdc089138029c"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);