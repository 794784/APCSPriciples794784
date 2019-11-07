//  De'Andre Brown
// 	October 31, 2019
//  This is a comment
//  The setup function function is called once when your program begins

var gameState = 1
var w = 10

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  // slow down snake movement
  frameRate(1);
  loadThings();
}

//creates snake and food
function loadThings(){
  snake = new Snake(Math.floor(random(0,79))*w, Math.floor(random(0,79))*w, w, w);
  food = new Food(Math.floor(random(0,79))*w,Math.floor(random(0,79))*w);
}

function runThings(){
  food.run();
  snake.run();
}

//runs the snake and food classes
function draw(){
  background(5,5,5);
    if(gameState === 1){
      startGame()
    }
    else if(gameState === 2){
        playGame()
    }
    else if(gameState === 3){
        loseGame()
    }
  }

  function startGame(){
      background(20,20,20);
  //title
      fill(250, 250, 250);
      textSize(100);
      text("Snake Game", 100, 300);
  //easy
        fill(0, 250, 0);
        textSize(20);
        text("Press E for Easy", 100, 500);
         if (keyCode === 69) {
           health = 3
           score = 0
           gameState = gameState + 1
     }
  //medium
        fill(255,165,0);
        textSize(20);
        text("Press M for Medium", 325, 500);
        if (keyCode === 77) {
           health = 4
           score = 0
           gameState = gameState + 1
       }
  //hard
        fill(255,0 ,0 );
        textSize(20);
        text("Press H for Hard", 600, 500);
         if (keyCode === 72) {
           health = 8
           score = 0
           gameState = gameState + 1
      }
  //how to play
      fill(255, 100 ,0);
      textSize(20);
      text("The goal of the game is to become as long of a snake as you can.", 100, 625);
      text( "If you hit one part of your snake with anohter, the game ends.", 100, 650);
      text( "Beat your own highscore to win the game.", 100, 675);
  }

  function playGame(){
      background(20,20,20);
      runThings();
//      if (snake touchs snake
//          or snake touches the edge) {
//          gameState = gameState + 1
//       }
    }

function loseGame(){
    background(20,20,20);
//score
    fill(0, 250, 0);
    textSize(32);
    text("Score: " + score, 650, 30);
//lose
    // if(highscore > new score){
    fill(250, 250, 250);
    textSize(100);
    text("Try Again", 150, 300);
// }
//win
    // if(highscore < new score){
    fill(250, 250, 250);
    textSize(100);
    text("Try Again", 150, 300);
  // }
//restart
    fill(250, 250, 250);
    textSize(50);
    text("To restart, press R", 200, 600);
    if (keyCode === 82) {
      gameState = 1
    }
  }
