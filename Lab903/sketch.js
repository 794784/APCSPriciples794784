//  De'Andre
// 	September 
//  This is a comment
//  The setup function function is called once when your program begins
var BallSack=[]
var bigballs;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
background(30,30,30);
loadBalls(200);

}


function draw() {
  background(30,30,30,207);
  runBalls();
  // runTriangle()
}

function loadBalls(n){
  bigballs = new Ball (random(width), random(height), random(-1,1), random(-1,1),-1,50,50);
  for(var i = 0; i < n ; i++){
    BallSack[i] = new Ball(random(width), random(height), random(-2,2), random(-2,2),i,20,20);

  }
}
function runBalls(){
  for(var i = ; i < Balls.length; i++)
}
}
