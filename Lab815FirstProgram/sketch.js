// De'Andre Brown JR
// 	8/15/19
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  fill(200,0,0)
  rect(200,200,500,500)
  fill(0,200,0)
  ellipse(350,247,300,400)
  fill(150,200,0)
  triangle(350,247,300,400,350,400)
}
