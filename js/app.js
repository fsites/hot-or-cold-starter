
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    /*Number Generator between 1-100*/
    var numGen = function() {
      return Math.floor((Math.random() * 100) + 1);
    };

    /*load number on page refresh*/
    numGen();
    console.log(numGen());

  	/*Named function to find difference 
    between guess and generated num*/

    /*Feedback should appear in div#feedback*/

  	/*track how many guesses have been made*/

  	/*use ul#guessList and append previously guessed numbers to it*/

    /*Create newGame function to start a new game*/
    var newGame = $('.new').click(function() {
      $("#guessList li").remove(); /*untested*/
      $("#userGuess").attr('placeholder', 'Enter your Guess');
      $("#count").replaceWith('<span id="count">' + 0 + '</span>');
      $("#feedback").replaceWith('<h2 id="feedback">' + 'Make your Guess!' + '</h2>');
      numGen();
      console.log(numGen());
    });

    /*Guess button runs feedback function*/
    /*NOT AFFECTING REFRESH*/
    $('#guessButton').click(function() {
      validGuess();
      console.log('guess clicked');
      return false;
    });

});

//Variables
var userGuess = +document.getElementById("userGuess");


/*Verify guess is valid number*/ 
/*NOT AFFECTING REFRESH*/
var validGuess = function() {
  if (userGuess >= 1.0 && userGuess <=100.0) 
    console.log("valid number");
  else
    alert("Please enter a valid number between 1-100");
};


/*NOT AFFECTING REFRESH
var stopRefresh = function() {
  $('#userGuess').click();
  return false;
}*/



