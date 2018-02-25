
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
var timeLeft = 31;



$(".start").click(function(){
    start();
});

var start = function(){
    console.log("hello!");
    $(".start").hide();
    game();
};


var game = function(){

	var timeLeft = setInterval(timer, 1000);
};


var timer = function(){

	timeLeft -= 1;
	
	if(timeLeft > 0 )
	{
		document.getElementById("time").innerHTML = "Time Left is: " + timeLeft;
	}
};