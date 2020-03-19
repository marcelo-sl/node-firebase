const firebase = require('firebase/app');
require('firebase/firestore');
require('firebase/auth');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD_YBEM2frdUz_xAsMZYHxWpVZEVOzUjK4",
    authDomain: "my-project-87d52.firebaseapp.com",
    databaseURL: "https://my-project-87d52.firebaseio.com",
    projectId: "my-project-87d52",
    storageBucket: "my-project-87d52.appspot.com",
    messagingSenderId: "646516140584",
    appId: "1:646516140584:web:e6442b5ca01f9b841da31d",
    measurementId: "G-MJ6N98VB2Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });
  firebase.analytics();

  export default firebase;