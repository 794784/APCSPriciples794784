//  De'Andre Brown
// 	October 31, 2019
//  This is a comment
//  The setup function function is called once when your program begins

var snake, score, food, header_height;
var bodySegments = [];
function setup() {
  var cnv = createCanvas(800, 600);
  cnv.position((windowWidth-width)/2, 30);
  background(217, 189, 124);
  header_height = 800;
  newGame();
}

function draw(){
  snake.run();
  food.render();
  if (checkTangled === true){
    newGame();
  }
  if (getFood === true ){
    startNewRound();
  }
}// end draw

function newGame(){ //create snake and food objects
  score = 0;
  snake = new Snake (random(50, 750), random(50, 750), color(227, 69, 7));
  food = new Food (random (300,500), random (300,500), color(70));


}
function checkTangled(){
  return snake.tangled();
}
function startNewRound(){

}

function run(){
  snake.update();
  snake.render();

}
function getFood() {

}

function runObjects(){
  head.run();
}




function move(){
  if(keyCode === UP_ARROW){
    head.position(5,5);

  }
}
