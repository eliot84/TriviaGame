
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

var triviaQuestions = [ ["Miami is the home to which National Park?", "The Everglades", "Monroe", "Cocoplum", "The SawGrass", "a1"], 
						["In Miami Beach, more than 800 buildings feature this iconic style of architecture:", "Gothic", "Revivalism", "Art Deco", "Streamline Moderne"]
					  ];

var timeLeft = 15;

	$(".start").show();
    $("[value='a1']").hide();
	$("[value='a2']").hide();
	$("[value='a3']").hide();
	$("[value='a4']").hide();
	$(".question").hide();




$(".start").click(function(){
    start();
});

var start = function(){
    
    //Set interface for Game
    $(".start").hide();
    $("[value='a1']").show();
	$("[value='a2']").show();
	$("[value='a3']").show();
	$("[value='a4']").show();
	$(".question").show();

    game();
};


var game = function(){

	var timeLeft = setInterval(timer, 1000);
    $(".question").text(triviaQuestions[0][0]);

    choices();
	choiceListener();
};



var choices = function(){
    $("[value='a1']").text(triviaQuestions[0][1]);
	$("[value='a2']").text(triviaQuestions[0][2]);
	$("[value='a3']").text(triviaQuestions[0][3]);
	$("[value='a4']").text(triviaQuestions[0][4]);	
}



var choiceListener = function(){
	$(".btn").click(function(){
		console.log("you clicked me!");

		if(this.value == triviaQuestions[0][5]){
			console.log("CORRECT!");
		}

	});
}



var timer = function(stopTimer){

	timeLeft -= 1;
	
	if(timeLeft > 0 )
	{
		document.getElementById("time").innerHTML = "Time Left is: " + timeLeft;
	} else if(timeLeft == 0){
		document.getElementById("time").innerHTML = "You ran out of time!";
	}
};