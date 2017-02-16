//  generate questions in a function & objects 
var game = {
   
  correct: 0,
  incorrect: 0,
  counter: 100,
  theClock: 0,
  correctAnswer: 0,
  userClick: 0

  // Australia: Canberra,
  // Taiwan: Taipei,
  // Japan: Tokoyo,
  // Colombia: Bogota,
  // India: New Delhi,


  
// hide div until start button is clicked 

// begin game
  beginGame: function(){
    this.correct = 0,
    this.incorrect = 0,
    this.windowtimer();
  },

  

//condtional to see if choosen answe is correct else ++ 
checkCorrectAnswer: function() {
  if (  )

}

  
  
// timer for 30 seconds 
    windowtimer: function(){
      this.theClock = setInterval(thirtySeconds, 1000);
      function thirtySeconds() {
        console.log(game.counter)
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


   $("#question").hide();
   $("#timer").hide();


  $("#startButton").click( function () {
  $("#question").fadeIn();
  $("#timer").fadeIn();

  });





