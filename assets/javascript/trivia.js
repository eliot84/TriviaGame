
/*


Miami is the home to which National Park?
The Everglades, Monroe, Cocoplum, The SawGrass
The Everglades

In Miami Beach, more than 800 buildings feature this iconic style of architecture:
Gothic, Revivalism, Art Deco, Streamline Moderne
Art Deco

The Miami area was inhabited for thousands of years prior to any by this native tribe
The Miccosukee, The Seminoles ,The Tequesta, The Taino
The Tequesta
*/
//Default State

var triviaMiami = { 
					timeLeft: 15,
					scoreCorrect: 0,
					totalQuestions: 10,
					currQuestion: 0,
					triviaQuestions: [{one: "Miami is the home to which National Park?",
									   choices: ["The Everglades", "Monroe", "Cocoplum", "The Sawgrass"],
									   correctChoice: "a1",
									   answer: "The Everglades"
									  }]	
				  };


//How to get the question
console.log(triviaMiami.triviaQuestions[0].one);

//how to get the choices
console.log(triviaMiami.triviaQuestions[0].choices[0] + " " + triviaMiami.triviaQuestions[0].choices[1] + " " + triviaMiami.triviaQuestions[0].choices[2] + " " + triviaMiami.triviaQuestions[0].choices[3] );

//Match the correct choice 
console.log(triviaMiami.triviaQuestions[0].correctChoice);

//the answer 
console.log(triviaMiami.triviaQuestions[0].answer);


//hides choices from view 
var hideChoices = function(){
	$("[value='a1']").hide();
	$("[value='a2']").hide();
	$("[value='a3']").hide();
	$("[value='a4']").hide();
}


hideChoices();
$(".start").show();
$(".question").hide();



//Listens for the start button press to begin
$(".start").click(function(){
    start();
});



var start = function(){
    
    //Set interface for Game
    $(".start").hide();

	$(".question").show();

    game();

};


var game = function(){

	var timeLeft = setInterval(timer, 1000);
    $(".question").text(triviaMiami.triviaQuestions[0].one);

    choices();

	$(".btn").click(function(){
		var status = evaluator(this.value);
		console.log(status);
		//send for score
		score(status);
	});

};


//Sets the choices for the current question and displays the choices.
var choices = function(){
    $("[value='a1']").text(triviaMiami.triviaQuestions[0].choices[0]).show();
	$("[value='a2']").text(triviaMiami.triviaQuestions[0].choices[1]).show();
	$("[value='a3']").text(triviaMiami.triviaQuestions[0].choices[2]).show();
	$("[value='a4']").text(triviaMiami.triviaQuestions[0].choices[3]).show();
};


//Checks if the answer selected is correct or incorrect
var evaluator = function(checkValue){

	if(checkValue == triviaQuestions[0][5]){
		scoreCorrect += 1;
			console.log(scoreCorrect);
 		return "correct";
	}
	else{
		return "incorrect";
	}

};



var timer = function(stopTimer){

	triviaMiami.timeLeft -= 1;
	
	if(triviaMiami.timeLeft > 0 )
	{
		document.getElementById("time").innerHTML = "Time Remaining: " + triviaMiami.timeLeft;
	} else if(triviaMiami.timeLeft == 0){
		document.getElementById("time").innerHTML = "You ran out of time!";
		$(".question").text("The answer is: " + triviaQuestions[0][6]);
		hideChoices();
	}

};

var score = function(result){
	
}


var resetTrivia = function(){
	triviaQuestions = [ ["Miami is the home to which National Park?", "The Everglades", "Monroe", "Cocoplum", "The SawGrass", "a1", "The Everglades"], 
						["In Miami Beach, more than 800 buildings feature this iconic style of architecture:", "Gothic", "Revivalism", "Art Deco", "Streamline Moderne", "Art Deco"]
					  ];

 	timeLeft = 15;
 	scoreCorrect = 0;
 	totalQuestions = 10;	
}




