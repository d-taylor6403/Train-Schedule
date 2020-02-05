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

  $("#train-submit").on("click", function(){
      event.preventDefault();

      var trainName = $("#train-name").val().trim();
      var trainDestination = $("#train-destination").val().trim();
      var trainFirstTime = $("#train-time").val().trim();
      var trainFrequency = $("#train-frequency").val().trim();

      console.log("First Train Time: " + trainFirstTime);

      //Convert First Train Time to happen 1 year in the past
      var firstTimeConverted = moment(trainFirstTime, "HH:mm").subtract(1, "years");
      console.log("First Time Converted: " + firstTimeConverted);
      //Variable for the difference between current time and the time in the past
      var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
      console.log("Time Difference: " +diffTime);
      //Remaining time in a variable
      var timeRemaining = diffTime % trainFrequency;
      console.log("Remaining Time: " + timeRemaining);
      var timeTilTrain = trainFrequency - timeRemaining;
      console.log("Time Until Next Train: " + timeTilTrain);


  })