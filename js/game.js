// alert("iglkl");

var buttonColors = ["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPatterns = [];
var level=0;
var start = false;

function startOver(){
    level =0;
    gamePattern = [];
    start = false;
}

function checkAnswer(currentLevel){
 if(userClickedPatterns[currentLevel] === gamePattern[currentLevel]){
    console.log("Success");

    if(userClickedPatterns.length == gamePattern.length){
    //Calling nextSequence() Function
    setTimeout(function(){
      nextSequence();
      
    },1000);
}
 }
 else{
    console.log("Fail");
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function(){
     $("body").removeClass("game-over");
    },200);

    $(".title").text("Game Over, Press Any Key to Restart");
    startOver();
 }
}

$(document).keydown(function(){
    if(start === false){

     $(".title").text("Level "+level);
     nextSequence();
     start = true;
    }
});

$(".btn").click(function(event){
    // console.log(event.target);
    // var x = event.target;
    // console.log(this);
  var userChosenColour = $(this).attr('id');
  userClickedPatterns.push(userChosenColour);
  console.log(userClickedPatterns);
  playSound(userChosenColour);
  animatePress(userChosenColour);

  // Calling checkAnswer Function
  checkAnswer((userClickedPatterns.length)-1);
});

function playSound(name){
    var sound = name+".mp3"
    var audio = new Audio("sounds/"+sound);
    audio.play();
}

function animatePress(currentColour){
 $("#"+currentColour).addClass("pressed");
 setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
 },100);
 
}

function nextSequence(){
    userClickedPatterns = [];

    level++;
    $(".title").text("Level "+level);

    var n = Math.random();
    n = n*4;
    var randomNumber = Math.floor(n);
    console.log(randomNumber); //extra
    
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("."+randomChosenColor).delay(100).fadeOut('fast').fadeIn('fast');

    playSound(randomChosenColor);
}
// nextSequence();
// var randomNo = nextSequence();
// var randomChosenColor = buttonColors[nextSequence()];
// console.log(randomChosenColor);

// gamePattern.push(randomChosenColor);
// console.log(gamePattern);

// $(document).ready(function(){
//     //  setInterval(() => {
//     //     $("."+randomChosenColor).fadeIn();
//     //     $("."+randomChosenColor).fadeOut();
//     // }, 500);
//     $("."+randomChosenColor).delay(100).fadeOut('fast').fadeIn('fast');
    
//     console.log( $("."+randomChosenColor));
// });

// var sound = randomChosenColor+".mp3"
// var audio = new Audio("sounds/"+sound);
// audio.play();