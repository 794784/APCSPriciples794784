//  De'Andre Brown
// 	October 31, 2019
//  This is a comment
//  The setup function function is called once when your program begins
//  Elena Campell
// snake game
//  The setup function function is called once when your program begins

var difficulty;
var score =0;
var gameState = 1;
var win;
var btnEasy, btnMed, btnHard, btnInstructions, btnBTMI, btnBTME, btnReplay;
var head;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  newButton();
head = new Snake (400, 400,0 , 0, color(100,20, 10));
runObjects();
}
function runObjects(){
  head.run();
}

function draw(){

move();
}

function move(){
  if(keyCode === UP_ARROW){
    head.position(5,5);

  }
}



 function draw() {
   background(5,5,5);
      if (gameState ===1){
     startGame(); //start screen
   }else if (gameState === 2){
     playGame(); //game screen
   }else if (gameState === 3){
     instructionsText();
   }else if (gameState === 4){ //game over screen
     endGame();
 }
 }

 function loadObjects(x){ // load paddle and balls

 }

 function runObjects(){ //runs paddle and balls

   }


 function newButton(){
   btnEasy = new Button(50, 450, 200, 200, color(78, 219, 18) );
   btnMed = new Button(300, 450, 200, 200, color (250,250,7));
   btnHard = new Button(550, 450, 200, 200, color(250, 0, 0));
   btnInstructions = new Button (200, 700, 400, 74, color(255));
   btnBTMI = new Button (150, 150, 500, 100, color(255));
   btnReplay = new Button (66, 100, 300, 100, color (255));
   btnBTME = new Button (432, 100, 300, 100, color(255));
 }

 function startGame(){ // choose easy med hard

   }

   checkDifficulty(); // checks which difficulty is chosen



 function playGame(){

 }


 function endGame(){ //end game screen
   if (win === 'yes'){
     textSize(80);
     fill (255);
     text ("YOU WIN", 400, 450);
     text ("SCORE:" + score, 400, 550);
   }else if (win === 'no'){
     textSize(100);
     fill (255);
     text ("YOU LOSE", 400, 500);
   }

   btnReplay.render();
   btnBTME.render();

   fill(0);
   textSize(40);
   text ("REPLAY", 220, 145);
   text ("LEVEL", 220, 185)
   text ("BACK TO", 580, 145);
   text("MAIN MENU", 580, 185);
   if (btnBTME.isClicked()){ // go back to main menu
     gameState = 1;
     difficulty = 'startOver';
     clearEverything();
   }
   if (btnReplay.isClicked()=== true){ // replay level
     clearEverything();
     }
   }

 function checkDifficulty(){ //check which difficulty button is isClicked
   if (btnEasy.isClicked()=== true){
      difficulty = 'easy';
    }
   if (btnMed.isClicked()===true){
     difficulty = 'medium';
   } if (btnHard.isClicked()=== true){
     difficulty = 'hard';
   }
 }



 function clearEverything() { //clear gamestate and score for restarting level
   gameState = 1;
   score = 0 ;
 }
