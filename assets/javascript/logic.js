console.log("logic!");



//Listens for the start button press to begin
$(".start").click(function(){

	 //Set display GUI
	$(".start").hide();
    $(".question").show();

    //set timer
	var timeLeft = setInterval(triviaMiami.timer, 1000);
	
	//Set the question
	$(".question").text(triviaMiami.triviaQuestions[0].one);

	triviaMiami.showChoices();

	//When user makes a choice selection
	$(".btn").click(function(){
		clearTimeout(timeLeft);

		//evaluate and update score
		var status = triviaMiami.evaluator(this.value);
		
		//if user answered correct
		if(status){
			$(".question").text(triviaMiami.triviaQuestions[0].answer + " is correct!");
		}
		else{
			$(".question").text("Wrong, the correct answer is: " + triviaMiami.triviaQuestions[0].answer);
		}


		//set timer for 4 - 6 seconds
		//hide choices & question
		//display guess correct or incorrect with correct answer
		//display meme
		//timer ends - hide meme, hide display guess, set currQuestion + 1 call .question/line 16 call choices/line 18 show question and choices and timer wait for user to click a .btn again


	});


});







	   			