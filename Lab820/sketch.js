//  De'Andre Brown
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins

var x,y;
var speedY
var speedX
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  x=1;
  y=3;
speedY=2;
speedX=4;
}

//  The draw function is called @ 30 fps
function draw() {
x= x + speedX;
y= y+ speedY;
fill(200,15,0)
ellipse(x,y,400,400)
fill(10,0,350)
ellipse(x,y,300,300)
fill(0,222,20)
ellipse(x,y,200,200)
}
