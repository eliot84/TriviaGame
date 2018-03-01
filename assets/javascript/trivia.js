
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
					//Properties
					timeLeft: 15,
					qSummaryTime: 5,
					qSummaryResult: false,
					scoreCorrect: 0,
					totalQuestions: 10,
					currQuestion: 0,
					triviaQuestions: [{one: "Miami is the home to which National Park?",
									   choices: ["The Everglades", "Monroe", "Cocoplum", "The Sawgrass"],
									   correctChoice: "a1",
									   answer: "The Everglades",
									   meme: "assets/images/everglades.gif"
									  }],
					//Methods				  
					speak: function(line){
						console.log(line);
					},

					//Sets the choices for the current question and displays the choices.
				    showChoices: function(){
					    $("[value='a1']").text(triviaMiami.triviaQuestions[0].choices[0]).show();
						$("[value='a2']").text(triviaMiami.triviaQuestions[0].choices[1]).show();
						$("[value='a3']").text(triviaMiami.triviaQuestions[0].choices[2]).show();
						$("[value='a4']").text(triviaMiami.triviaQuestions[0].choices[3]).show();
					},

					hideChoices: function(){
					    $("[value='a1']").text(triviaMiami.triviaQuestions[0].choices[0]).hide();
						$("[value='a2']").text(triviaMiami.triviaQuestions[0].choices[1]).hide();
						$("[value='a3']").text(triviaMiami.triviaQuestions[0].choices[2]).hide();
						$("[value='a4']").text(triviaMiami.triviaQuestions[0].choices[3]).hide();
					},

					timer: function(stopTimer){
						triviaMiami.timeLeft -= 1;
			
						if(triviaMiami.timeLeft > 0 )
						{
							document.getElementById("time").innerHTML = "Time Remaining: " + triviaMiami.timeLeft;
						} else if(triviaMiami.timeLeft == 0){
							document.getElementById("time").innerHTML = "You ran out of time!";
							$(".question").text("The answer is: " + triviaMiami.triviaQuestions[0].answer);
							hideChoices();
						}
					},

					//checks if user guessed correct and adds score
					evaluator: function(checkValue){
						if(checkValue == triviaMiami.triviaQuestions[0].correctChoice){
						triviaMiami.scoreCorrect += 1;
 						return true;
						}
						else{
							console.log("wrong");
							return false;
						}
					},
					//displays the meme and provides user with feedback on their choice
					questionSummary: function(){
						triviaMiami.qSummaryTime -= 1;
						console.log(triviaMiami.qSummaryTime);

						$('.meme').css("background-image", "url(" + triviaMiami.triviaQuestions[0].meme + ")");  
						
						if(triviaMiami.qSummaryResult){
							$(".question").text(triviaMiami.triviaQuestions[0].answer + " is correct!");
						}
						else{
							$(".question").text("Wrong, the correct answer is: " + triviaMiami.triviaQuestions[0].answer);
						}

						$('.meme').show();
						triviaMiami.hideChoices();

						if(triviaMiami.qSummaryTime < 0)
						{
							clearTimeout(resultSection);
						}
					},

					resetTrivia: function(){
						triviaQuestions = [ ["Miami is the home to which National Park?", "The Everglades", "Monroe", "Cocoplum", "The SawGrass", "a1", "The Everglades"], 
											["In Miami Beach, more than 800 buildings feature this iconic style of architecture:", "Gothic", "Revivalism", "Art Deco", "Streamline Moderne", "Art Deco"]
					  					  ];

					 	timeLeft = 15;
					 	scoreCorrect = 0;
					 	totalQuestions = 10;	
					}
}; //Close Object


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














var resetTrivia = function(){
	triviaQuestions = [ ["Miami is the home to which National Park?", "The Everglades", "Monroe", "Cocoplum", "The SawGrass", "a1", "The Everglades"], 
						["In Miami Beach, more than 800 buildings feature this iconic style of architecture:", "Gothic", "Revivalism", "Art Deco", "Streamline Moderne", "Art Deco"]
					  ];

 	timeLeft = 15;
 	scoreCorrect = 0;
 	totalQuestions = 10;	
}




