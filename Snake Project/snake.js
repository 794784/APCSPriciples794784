//  De'Andre Brown
// 	October 31, 2019
//  This is a comment
//  The setup function function is called once when your program begins


class Snake{
  constructor(x,y,dx,dy){
    this.head = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.clr = color(random(255), random(255), random(255));
    this.body = [];
    this.loadSegment()
  }

  loadSegment(){
    //load new body segment
    this.body.push(createVector(0,0));
  }

  run(){
    //run update, checkEdges, and render functions
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
//up arrow
    if(keyCode===38){
      this.vel.x = 0;
      this.vel.y = -w;
    }
//down arrow
    else if (keyCode===40) {
      this.vel.x = 0;
      this.vel.y = w;
    }
//left arrow
    else if (keyCode===37) {
      this.vel.x = -w;
      this.vel.y = 0;
    }
//right arrow
    else if (keyCode===39) {
      this.vel.x = w;
      this.vel.y = 0;
    }
  }

  update(){
    //add segment
    if(this.head.x === food.food.x &&
       this.head.y === food.food.y){
         this.loadSegment();
       }
    // update the body
    for(var i = 0; i < this.body.length; i++){
      this.body[0].x = this.head.x;
      this.body[0].y = this.head.y;
      this.body[i].x = this.body[i-1].x;
      this.body[i].y = this.body[i-1].y;
    }
    // update the head
    this.head.add(this.vel);

}

  render(){
  // render head
  fill(this.clr);
  rect(this.head.x, this.head.y, w, w);
  // render the body
  for(var i = 0; i < this.body.length; i++){
    rect(this.body[i].x, this.body[i].y, w, w);
    }
  }
}
