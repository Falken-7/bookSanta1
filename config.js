import firebase from 'firebase'
require ('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyA_sNq9CAL4Ugf-K0QLp7kOTo9ciL12u4Y",
    authDomain: "booksanta-9d71e.firebaseapp.com",
    databaseURL: "https://booksanta-9d71e.firebaseio.com",
    projectId: "booksanta-9d71e",
    storageBucket: "booksanta-9d71e.appspot.com",
    messagingSenderId: "1085047148461",
    appId: "1:1085047148461:web:a79c73d3514cd42afb5b24"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()