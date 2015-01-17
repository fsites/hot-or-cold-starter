
$(document).ready(function(){

/*VARIABLES*/
    var generatedNumber = 0;
    var userGuess = 0;
    var guessCount = 0;
    var userGuessClone = $("#userGuess").clone();



/*NUMBER GENERATOR between 1-100*/
    var numGen = function() {
      generatedNumber = Math.floor((Math.random() * 100) + 1);
      console.log("generated number is " + generatedNumber)
    };
      /*Load random number on page refresh*/
      numGen();



/*User Input*/
    $("form").submit(function(event){
      userGuess = $('#userGuess').val();
      validGuess();
      $('#userGuess').val('');
      return false;
    });



/*COUNTER Function*/
    var counter = function() {
        $('#count').text(guessCount);
    }



/*VERIFIES and APPENDs guess if valid number*/
    var validGuess = function() {
      if ((+userGuess >= 1) && (+userGuess <=100)) {
        $('#guessList').append('<li>' + userGuess + '</li>');
        guessCount++;
        counter();
        differenceFunc(generatedNumber, userGuess);
        feedback();
        console.log('user guess is ' + userGuess);
      }
      else
        alert("Please enter a valid number between 1-100");
    };



/*DIFFERENCE between guess and input*/
    var differenceFunc = function(generatedNumber, userGuess){
      return Math.abs(generatedNumber - userGuess);
    }


  	
/*FEEDBACK Function*/
    var feedback = function() {
      var difference = differenceFunc(generatedNumber, userGuess);
      console.log('difference is ' + difference);
      if (difference >= 50) {
        $('#feedback').text('Very Cold');
      }
      else if ((difference <= 49) && (difference >=26)) {
        $('#feedback').text('Cold');
      }
      else if ((difference <= 25) && (difference >=11)) {
        $('#feedback').text('Warmer');
      }
      else if ((difference <= 10) && (difference >=5)) {
        $('#feedback').text('Getting Hot');
      }
      else if ((difference <= 4) && (difference >=1)) {
        $('#feedback').text('Super Hot');
      }
      else if (userGuess / generatedNumber === 1) {
        $('#feedback').text('WIN');
        alert('You won! Pres OK to play again!')
        newGameFunc();
      } else {}
    };



/*NEW GAME function*/
    $('.new').click(function newGameFunc() {
      $("#guessList li").remove();
      $("#userGuess").replaceWith(userGuessClone);
      $("#feedback").replaceWith('<h2 id="feedback">' + 'Make your Guess!' + '</h2>');
      guessCount = 0;
      counter();
      numGen();
    });



   /*--- Display information modal box ---*/
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });

});











