
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = true;
var level = 0;
var highscore=0;

$(document).keypress(function(event) {
 var keypress=event.key;

  if (started) {
  if (keypress==="s") {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = false;
  }
  else
  {
    alert("Enter S key to start Game");

  }

  }

});


$("input").keypress(function(event) {
 var keypress=event.key;

  if (started) {
  if (keypress==="s") {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = false;
  }
  else
  {
    alert("Enter S key to start Game");

  }

  }

});


$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
        nextSequence();
      },1000);
      }
    } 
    else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press S Key to Restart");
    
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
 userClickedPattern=[];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
    $("#highscore").text("Highscore : "+ highscore);

    highscore=highscore+5;


  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = true;
  highscore=0;
}
