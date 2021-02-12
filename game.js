var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern =[];
var level = 0;


$(document).keypress(function () {
   if(level===0){ nextSequence();
   }
});

$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
    //console.log(userClickedPattern);
});

function checkAnswer(currentLevel) {
    
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
    {
        if (userClickedPattern.length === gamePattern.length){ 
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    }

    else{
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("#level-title").html("Game Over, Press Any Key to Restart");
        gamePattern=[];
        userClickedPattern=[];
        level=0;
        $("body").addClass("game-over");
        $(document).keypress(function () {
            $("body").removeClass("game-over");
         });
    } 

}
function nextSequence()
{
    userClickedPattern=[];
    $("#level-title").html("Level "+level);
    level+=1;

    var randomNumber =Math.random();
    randomNumber=randomNumber*4;
    randomNumber = Math.floor(randomNumber);

    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(120).fadeIn(120);
    playSound(randomChosenColor);
   
}
function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
   }, 100); 
    
}
function playSound(clr) {
    var audio = new Audio("sounds/"+clr+".mp3");
    audio.play();
    
}

console.log("hiiii");