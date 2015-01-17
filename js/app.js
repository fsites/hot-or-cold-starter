
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


/*Number Generator between 1-100*/
    var numGen = function() {
      generatedNumber = Math.floor((Math.random() * 100) + 1);
      console.log("generated number = " + generatedNumber)
    };

      /*Load random number on page refresh*/
      numGen();

    /*Finds the difference between guess and input*/
    var difference =  Math.abs(numGen - userGuess);

/*User Input*/
    $("form").submit(function(event){
      userGuess = $('#userGuess').val();
      validGuess();
    })

/*VERIFIES guess is valid number*/
    var validGuess = function() {
      console.log(userInput);
      if ((userInput >= 1) && (userInput <=100)) {
        return true;
      }
      else
        alert("Please enter a valid number between 1-100");
    };

/*APPENDS guessed numbers to list*/
    var guessedNumbers = function() {
      $('#guessList').append('<li>' + userInput + '</li>');
    };


    /*Guess button VERFIES validity, APPENDS to list,
    runs FEEDBACK, ADDS to COUNTER*/
    var gameExecute = $('#guessButton').click(function() {
        guessedNumbers();
        counter();
        console.log('guess clicked');
        console.log(userInput);
        return false;
    });

    /*COUNTER Function*/
    var counter = function() {
        $('#count').html(function(i, value) {return+value+1});
    }

  	
    /*FEEDBACK Function*/
    var feedback = function() {
      if (difference >= 50) {
        $('#feedback').replaceWith('<h2 id="feedback">' 
          + 'Very Cold'
          + '</h2');
      }
      else if ((difference <= 49) && (difference >=26)) {
        $('#feedback').replaceWith('<h2 id="feedback">' 
          + 'Cold'
          + '</h2');
      }
      else if ((difference <= 25) && (difference >=11)) {
        $('#feedback').replaceWith('<h2 id="feedback">' 
          + 'Warmer'
          + '</h2');
      }
      else if ((difference <= 10) && (difference >=5)) {
        $('#feedback').replaceWith('<h2 id="feedback">' 
          + 'Hot'
          + '</h2');
      }
      else if ((difference <= 4) && (difference >=1)) {
        $('#feedback').replaceWith('<h2 id="feedback">' 
          + 'VERY Hot'
          + '</h2');
      }
      else 
        $('#feedback').replaceWith('<h2 id="feedback">' 
          + 'YOU GOT IT!'
          + '</h2');
    };


    /*Create newGame function to start a new game*/
    var newGame = $('.new').click(function() {
      $("#guessList li").remove();
      $("#userGuess").replaceWith(userGuessClone);
      $("#count").replaceWith('<span id="count">' + 0 + '</span>');
      $("#feedback").replaceWith('<h2 id="feedback">' + 'Make your Guess!' + '</h2>');
      numGen();
      console.log(numGen());
    });

});











