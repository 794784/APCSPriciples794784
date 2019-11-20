//  De'Andre Brown
// 	October 31, 2019
//  This is a comment
//  The setup function function is called once when your program begins

segments=[];
numberFood=0;
food=[];
score=0;
gameState=1;
function setup() {
  // put setup code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(200, 0, 255);
  endGame='no';
  hitFood='no';
  loadHead();
  loadFood();
  frameRate(14);
}

function draw() {
  if(gameState===1){
    startScreen();
  }
  if(gameState===2){
    playGame();
  }
  if(gameState===3){
    finalScreen();
  }
}

function startScreen(){
  textSize(75);
  fill(50, 50, 50);
  text('Da Snake Game',125,200);
  textSize(25);
  fill(0,255,0)
  text('Start',373,550);
  rect(375,575,50,50);
  fill(0,0,255);
  if(mouseIsPressed&&
      mouseX>375&&
      mouseX<425&&
      mouseY>575&&
      mouseY<625){
        clear();
        gameState=2;
      }
}

function playGame(){
  runSnake();
  runFood();
  if(hitFood==='yes'){
    numberFood=numberFood+1;
    hitFood='no';
  }
if (endGame==='yes'){
  clear();
  gameState=3;
}
}

function finalScreen(){
  background(20,20,20);
  textSize(25);
  fill(0,200,0);
  text('you dead boy, your score was '+ numberFood, 225,400);
  //if(keyIsPressed&&
  //  keyCode===SHIFT){
      //gameState=1;
  //  }
}

function loadHead(){
  head= new Snake(0,0,0,0,20,color(0, 0, 255));
}

function loadFood(){
  food[0]= new Food(int(random(40)),int(random(40)),20,0);
}

function runFood(){
  food[0].run();
}

function runSnake(){
  background(200, 0, 255);
  head.run();
}
