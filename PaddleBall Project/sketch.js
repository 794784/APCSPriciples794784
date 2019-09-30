//  De'Andre Brown
// 	09/24/19
//  This is a comment
//  The setup function function is called once when your program begins
var balls= []
var paddle;
var score=0;
var gameState=1;
var gameMode;
var health=10;
var win;
var iteration=1;
var buttons=[];

function setup() {
  // put setup code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadButtons();
}

class Button{
  constructor(x,y,w,h){
    this.loc= createVector(x,y);
    this.w=w;
    this.h=h;
    this.clr= color(random(255),random(255),random(255));
  }
  run(){
    this.render();
    this.checkEdges();

  }
  render(){
    fill(this.clr);
    rect(this.loc.x,this.loc.y,this.w,this.h);
    fill(0,255,0);
    text('Difficult',150,700);
    fill(0,0,255);
    text('Hard',375,700);
    fill(255,0,0);
    text('Impossible',525,700);
  }
  checkEdges(){
    isTouching();
  }
}

function draw() {
  background(20,150,20);
  if(gameState===1){
    startGame();
  }else if(gameState===2){
    playGame();
  }else if(gameState===3){
    endGame();
  }
}

function startGame(){
  //title
  textSize(75);
  fill(255,255,255);
  text(' The Paddle Game',75,200);
  textSize(50);
  runButtons();
  textSize(25);
  fill(255,255,255);
  text('Select what difficulty mode youd like then the game will begin,',50,350);
  text('move the paddle with your mouse to hit the balls.',50,375);
  text('You have to try and have the balls only hit the top of the paddle.',50,400);
  text('If the balls hit the top of the paddle, the score will go up by 1.',50,425);
  text('If the balls hit the bottom of the paddle, health will drop.', 50,450);
  text('If you got no more health you dead. If you survive its a dub.',50,475);
  //checks if user touches the box
  //moves to next screen
  if(gameMode==='easy'||gameMode==='medium'||gameMode==='hard'){
    clear();
    if(gameMode==='easy'){
      loadObjects(5);
    }
    if(gameMode==='medium'){
      loadObjects(10);
    }
    if(gameMode==='hard'){
      loadObjects(25);
    }
    gameState=2;
  }
}

function isTouching(){
  //if touching easy
  if(mouseIsPressed&&
      mouseX>200&&
      mouseX<250&&
      mouseY>600&&
      mouseY<650){
        gameMode='easy'
      }
      //if touching medium
  if(mouseIsPressed&&
      mouseX>400&&
      mouseX<450&&
      mouseY>600&&
      mouseY<650){
        gameMode='medium'
      }
      //if touching hard
  if(mouseIsPressed&&
      mouseX>600&&
      mouseX<650&&
      mouseY>600&&
      mouseY<650){
        gameMode='hard'
      }

}
function playGame(){
  background(20,20,20);
  textSize(25);
  fill(255,0,0);
  text('Score:'+score,20,20);
  text('Health:'+health,650,20);
  runBalls();
  if(health<=0){
    clear();
    gameState=3;
    win='no';
  }
  if(iteration===4){
    clear();
    gameState=3;
    win='yes';
  }
}

function endGame(){
  background(20,20,20);
  if(win==='no'){
    textSize(100);
    fill(255,0,0);
    text("You Lose!",200,400);
  }
  if(win==='yes'){
    textSize(100);
    fill(255,0,0);
    text("You Win!",200,400);
  }
  fill(0,255,0);
  rect(300,600,50,50);
  textSize(25);
  text('Play Again?',275,575);
  fill(255,0,0);
  rect(500,600,50,50);
  text('Quit?',500,575);
  if(mouseIsPressed&&
      mouseX>300&&
      mouseX<350&&
      mouseY>600&&
      mouseY<650){
        clear();
        score=0;
        gameMode='';
        iteration=1;
        balls=[];
        win='no';
        health=10;
        gameState=1;
      }
      //if touching quit
  if(mouseIsPressed&&
      mouseX>500&&
      mouseX<550&&
      mouseY>600&&
      mouseY<650){
        remove();
        clear();
      }
}

function loadButtons(){
  if (gameState===1){
    for(var i=0;i<3;i++){
      buttons[i]= new Button(200*(i+1),600,50,50);
    }
  }
  if(gameState===3){
    buttons=[]
    for(var i=0; i<2;i++){
      buttons[i]= new Button(300+(200*i),600, 50, 50);
    }
  }
}

function runButtons(){
  for (var i=0; i<buttons.length;i++){
    buttons[i].run();
  }
}
function loadObjects(n){
    paddle= new Paddle(350,500,150,50);
    for(var i=0; i<n; i++){
      balls[i]= new Ball(random(0,400), random(0,400),random(-8,8),random(0,8),i);
    }
}

function runBalls(){
  paddle.run();
  for(var i=0; i<balls.length; i++){
    balls[i].run();
  }
}
