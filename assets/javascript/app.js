//Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyA9oR3e_u42UiKaL8ZxXM-L2k4UnbVWeN8",
    authDomain: "train-schedule-1ea69.firebaseapp.com",
    databaseURL: "https://train-schedule-1ea69.firebaseio.com",
    projectId: "train-schedule-1ea69",
    storageBucket: "train-schedule-1ea69.appspot.com",
    messagingSenderId: "701264065042",
    appId: "1:701264065042:web:bc6583367f1738b2191ecb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Variabvle created to reference database
  var database = firebase.database();

  //-----------------------------------------

  //-------------Functions-------------------

  //On submit button click
  