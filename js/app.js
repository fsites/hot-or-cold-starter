
$(document).ready(function(){

	 /*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

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
      return false;
    });

/*DIFFERENCE between guess and input*/
    var difference = Math.abs(generatedNumber - userGuess);


/*VERIFIES and APPENDs guess if valid number*/
    var validGuess = function() {
      if ((+userGuess >= 1) && (+userGuess <=100)) {
        console.log('user guess is ' + userGuess);
        $('#guessList').append('<li>' + userGuess + '</li>');
        counter();
        feedback();
      }
      else
        alert("Please enter a valid number between 1-100");
    };


/*COUNTER Function*/
    var counter = function() {
        $('#count').text(guessCount);
    }

  	
/*FEEDBACK Function*/
    var feedback = function() {
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
      } else {}
    };


/*NEW GAME function*/
    var newGame = $('.new').click(function() {
      $("#guessList li").remove();
      $("#userGuess").replaceWith(userGuessClone);
      $("#feedback").replaceWith('<h2 id="feedback">' + 'Make your Guess!' + '</h2>');
      guessCount = 0;
      numGen();
    });

});











