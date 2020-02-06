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

  //Variable created to reference database
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

      var trainArrival = moment().add(timeTilTrain, "m").format("hh:mm a");
      console.log("Train Arrival: " + trainArrival);

      //Save New Train Information 
      database.ref().push({
          name: trainName,
          destination: trainDestination,
          frequency: trainFrequency,
          minutesAway: timeTilTrain,
          arrival: trainArrival
      });

      $("input").val(" ");

  });

  //-------------------------------------------
  //On page load and after new submits, take snapshot of local data

  database.ref().on("child_added", function (childSnapshot){
      $("tbody").append("<tr>" + "<th scope='col'> " + childSnapshot.val().name +
      "<td scope='col'>" + childSnapshot.val().destination +
      "<td scope='col'>" + childSnapshot.val().frequency +
      "<td scope='col'>" + childSnapshot.val().arrival +
      "<td scope='col'>" + childSnapshot.val().minutesAway + "min");

    // Errors should be logged to console
  }, function (errorObject){
      console.log("Error handled: " + errorObject.code);
  
  });