console.log("logic!");

$(document).ready(function()
{
	triviaMiami.hideChoices();

	//Listens for the start button press to begin
	$(".start").click(function(){
		triviaMiami.game();	
	});

	//When user makes a choice selection
	$(".btnC").click(function(){
		triviaMiami.questionDone = true;
		triviaMiami.questionAnswered(this.value);
	});
}); //document .ready





	   			