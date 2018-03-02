
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
					qSummaryResult: false,
					scoreCorrect: 0,
					totalQuestions: 10,
					currQuestion: 0,
					questionDone: false,
					triviaQuestions: [{question: "Miami is the home to which National Park?",
									   choices: ["The Everglades", "Monroe", "Cocoplum", "The Sawgrass"],
									   correctChoice: "a1",
									   answer: "The Everglades",
									   meme: "assets/images/everglades.gif"
									  },
									  {question: "In Miami Beach, more than 800 buildings feature this iconic style of architecture:",
									   choices: ["Gothic", "Revivalism", "Art Deco", "Streamline Moderne"],
									   correctChoice: "a3",
									   answer: "Art Deco",
									   meme: "assets/images/colony.gif"
									  },
									  {question: "The Miami area was inhabited for thousands of years prior to any by this native tribe:",
									   choices: ["The Miccosukee", "The Seminoles", "The Tequesta", "The Taino"],
									   correctChoice: "a3",
									   answer: "The Tequesta",
									   meme: "assets/images/ace.gif"
									  },
									  {question: "The only movie to have scenes filmed in Miami that has won an Academy Award for best picture is?:",
									   choices: ["The Golden Girls", "Scarface", "Dexter", "The Godfather II"],
									   correctChoice: "a4",
									   answer: "The Godfather II",
									   meme: "assets/images/refuse.gif"
									  },
									  {question: "How Many cities make up Miami (Miami-Dade County)?",
									   choices: ["1", "34", "12", "459"],
									   correctChoice: "a2",
									   answer: "34",
									   meme: "assets/images/wow.gif"
									  },
									  {question: "Miami was founded by?",
									   choices: ["George Merrick", "Julia Tuttle", "Emilio Estefan", "Ponce De Leon"],
									   correctChoice: "a2",
									   answer: "Julia Tuttle",
									   meme: "assets/images/woman.gif"
									  },
									  {question: "This famous fast food franchise first opened in miami:",
									   choices: ["Wendy's", "KFC", "Burger King", "Subway"],
									   correctChoice: "a3",
									   answer: "Burger King",
									   meme: "assets/images/king.gif"
									  },
									  {question: "The word Miami comes from the Tequesta word 'Mayaimi' which means?",
									   choices: ["Swamp", "Sweetwater", "Brickell", "Coconut Grove"],
									   correctChoice: "a2",
									   answer: "Sweetwater",
									   meme: "assets/images/icecream.gif"
									  },
									   {question: "Which of these is a Miami phone number area code?",
									   choices: ["212", "861", "954", "305"],
									   correctChoice: "a4",
									   answer: "305",
									   meme: "assets/images/pitbull.gif"
									  },
									   {question: "The official Miami football team is the Miami?",
									   choices: ["Braves", "Hurricanes", "Dolphins", "Peaches"],
									   correctChoice: "a3",
									   answer: "Dolphins",
									   meme: "assets/images/football.gif"
									  }],
					//Methods				  
					game: function(){
						console.log("game: " + triviaMiami.scoreCorrect);
						//Set display GUI
						$(".start").hide();
					    $(".question").show();
					    $(".meme").hide();
					    $("#playBtn").show();
					    $("#pauseBtn").show();

					    //set timer
						var time = setInterval(triviaMiami.timer, 1000);
							var stopper = function(){
							clearInterval(time);
						}

						setTimeout(stopper, 15000);

						//if a choice is selected stop the timer
						$(".btnC").click(function(){
							setTimeout(stopper, 100);
						});

						
						//Set the question
						$(".question").text(triviaMiami.triviaQuestions[triviaMiami.currQuestion].question);

						triviaMiami.showChoices();
					},

					//Sets the choices for the current question and displays the choices.
				    showChoices: function(){
				    	var x = triviaMiami.currQuestion;

					    $("[value='a1']").text(triviaMiami.triviaQuestions[x].choices[0]).show();
						$("[value='a2']").text(triviaMiami.triviaQuestions[x].choices[1]).show();
						$("[value='a3']").text(triviaMiami.triviaQuestions[x].choices[2]).show();
						$("[value='a4']").text(triviaMiami.triviaQuestions[x].choices[3]).show();
					},

					hideChoices: function(){
						var x = triviaMiami.currQuestion;

					    $("[value='a1']").text(triviaMiami.triviaQuestions[triviaMiami.currQuestion].choices[0]).hide();
						$("[value='a2']").text(triviaMiami.triviaQuestions[triviaMiami.currQuestion].choices[1]).hide();
						$("[value='a3']").text(triviaMiami.triviaQuestions[triviaMiami.currQuestion].choices[2]).hide();
						$("[value='a4']").text(triviaMiami.triviaQuestions[triviaMiami.currQuestion].choices[3]).hide();
					},

					//Time remaining during a question and running out of time
					timer: function(){
						console.log("the timer");
						triviaMiami.timeLeft -= 1;
			
						if(triviaMiami.timeLeft > 0 )
						{
							document.getElementById("time").innerHTML = "Time Remaining: " + triviaMiami.timeLeft;
						} else if(triviaMiami.timeLeft == 0){
							triviaMiami.questionDone = false;
							triviaMiami.questionNotAnswered();
						}
					},

					//checks if user guessed correct and adds score
					evaluator: function(checkValue){
						console.log("check value" + checkValue);
						if(checkValue == triviaMiami.triviaQuestions[triviaMiami.currQuestion].correctChoice){
						triviaMiami.scoreCorrect += 1;
 						return true;
						}
						else{
							return false;
						}
					},
					//If a question is answered do the following
					questionAnswered: function(checker){
						//evaluate and update score
						var status = triviaMiami.evaluator(checker);
						triviaMiami.qSummaryResult = status;
				 		var timeThis = setInterval(triviaMiami.questionSummary, 1000);
					
						//After 3 seconds stop the timeThis and move onto the next question
						var stopper = function(){
							clearInterval(timeThis);
							triviaMiami.nextQuestion();
						}

						setTimeout(stopper, 7000);
					},

						//If a question is answered do the following
					questionNotAnswered: function(){
						//evaluate and update score
				 		var timeThis = setInterval(triviaMiami.questionSummary, 1000);
					
						//After 3 seconds stop the timeThis and move onto the next question
						var stopper = function(){
							clearInterval(timeThis);
							triviaMiami.nextQuestion();
						}

						setTimeout(stopper, 7000);
					},

					//displays the meme and provides user with feedback on their choice or nonchoice
					questionSummary: function(){	
						$('.meme').css("background-image", "url(" + triviaMiami.triviaQuestions[triviaMiami.currQuestion].meme + ")");  
		
						if(triviaMiami.questionDone){
							
							if(triviaMiami.qSummaryResult){
								//triviaMiami.scoreCorrect += 1;
								$(".question").text(triviaMiami.triviaQuestions[triviaMiami.currQuestion].answer + " is correct!");
							}
							else{
								$(".question").text("Wrong, the correct answer is: " + triviaMiami.triviaQuestions[triviaMiami.currQuestion].answer);
							}

							$('.meme').show();
							triviaMiami.hideChoices();
						}
						else{
							$("#time").text("You ran out of time!");
							$(".question").text("The answer is: " + triviaMiami.triviaQuestions[triviaMiami.currQuestion].answer);
							$('.meme').show();
							triviaMiami.hideChoices();
						}
					},

					nextQuestion: function(){
						triviaMiami.totalQuestions -= 1;

						if(triviaMiami.totalQuestions > 0)
						{
						console.log("next question");
						triviaMiami.currQuestion += 1;
						triviaMiami.timeLeft = 15;
						triviaMiami.game();	
						}
						else
						{
							triviaMiami.gameEndScore();
						}		
					},

					gameEndScore: function(){
							$("#time").text("GAME OVER!!");
							$(".question").text("You scored: " + triviaMiami.scoreCorrect +  " out of 10");
							hideChoices();
							$(".meme").hide();

					},
				
					resetTrivia: function(){
						triviaMiami.timeLeft = 15;
					 	scoreCorrect = 0;
					 	totalQuestions = 10;	
					 	triviaMiami.currQuestion = 0;
					}
}; //Close Object









