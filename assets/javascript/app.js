//  generate questions in a function & objects 
var game = {
   
  correct: 0,
  incorrect: 0,
  counter: 100,
  theClock: 0,
  // correctAnswer: 0,
  userClick: 0,
  unanswered: 5,
  answers: ["c","c","c","c","c"],

  userResponse: [],

// create a loop to check results
//condtional to see if choosen answer is correct else ++ 
  result: function() { 
    for ( var i = 0; i < userResponse.length; i++ );
    if (this.userResponses[i] === this.correct[i]) {
        this.correct++;
        this.incorrect--;
      }
      if (this.userResponse[i] !== this.correct[i]) {
        this.incorrect++;
        this.unanswered--;

      }
},



// begin game
  beginGame: function(){
    this.correct = 0,
    this.incorrect = 0,
    this.windowtimer();
  },

  

// timer for 30 seconds 
    windowtimer: function(){
      this.theClock = setInterval(thirtySeconds, 1000);
      function thirtySeconds() {
        // console.log(game.counter)
        if (game.counter > 0) {
           game.counter--

          }
        else {
          clearInterval(game.theClock)
        }
        $("#timer").html(':' + game.counter);
        };

      },


};




  game.beginGame();

// hide div until start button is clicked 
  $("#question").hide();
  $("#timer").hide();
   // $("#lastPage").hide();


  $("#startButton").click( function () {
  $("#question").fadeIn();
  $("#timer").fadeIn();

  });


  $("#doneButton").click(function() {
    alert("hello");
    }); 

    $("#doneButton").append( function() { 
    $('#unanswered').html("Unanswered: " + this.unanswered);
    $('#correct').html("Correct: " + this.correct);
    $('#wrong').html("Wrong: " + this.incorrect);
   


});

   


 // Australia: Canberra,
  // Taiwan: Taipei,
  // Japan: Tokoyo,
  // Colombia: Bogota,
  // India: New Delhi,




