//  De'Andre Brown
// 	09/24/19
//  This is a comment
//  The setup function function is called once when your program begins
class Ball{

  constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector (dx, dy);
    this.acc = createVector (0, .7);
    this.id = id;
    //this.clr = color(random(255), random(255), random(255));
  }

run(){
  this.checkEdges();
  this.update();
  this.render();
  this.removeBall();
  this.score();
}

checkEdges(){
  if(this.loc.x< 0) {this.vel. x = -this.vel.x}
  if (this.loc.x> width) this.vel.x = -this.vel.x;
  if (this.loc.y < 0) this.vel.y = - this.vel.y;
  if(this.loc.y> height) this.vel.y = -this.vel.y;
}

update(){
  this.vel.add(this.acc);
  this.loc.add(this.vel);
}

render(){
// if (this.id === 15){
//   fill (6,6,250);
// }
   if (this.id%2 === 0){ //makes half balls red
    fill (250, 0, 0);
  }else if (this.id%2 === 1){ //half the balls green
    fill (0, 250, 0);
  }
  ellipse(this.loc.x, this.loc.y, 30, 30);
}

isColliding(){
  if (this.loc.x> paddle.loc.x &&
  this.loc.x < paddle.loc.x +paddle.w &&
  this.loc.y > paddle.loc.y && this.loc.y < paddle.loc.y +paddle.h&&
  this.vel.y>0){
    return true;
  } else{
    return false;
  }
}

removeBall(){
  for (var i = balls.length-1; i >= 0; i--){
    if (balls[i].isColliding()){
      balls.splice(i, 1);

      }
    }
  }


score(){
  if (this.isColliding()===true && this.id %2 === 1){
    score ++;
  }else if (this.isColliding() === true && this.id %2 ===0){
    score--;
  }
}

}
