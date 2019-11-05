//  De'Andre Brown
// 	October 31, 2019
//  This is a comment
//  The setup function function is called once when your program begins

class Snake{
  constructor(x, y,w, c){
    this.loc=createVector(x,y);
    this.vel = createVector(0,0);
    this.w = 30;
    this.clr = c;

  }// end constructor

  run(){
    this.update();
    this.render();
  } //end run

  update(){
    this.keyPressed();
     bodySegments[0].x = this.loc.x;
     bodySegments[0].y = this.loc.y;

     for(var i = bodySegments.length - 1; i >= 1; i--){
         bodySegments[i].x = this.segments[i - 1].x;
         bodySegments[i].y = this.segments[i - 1].y;
       }

  this.loc.add(this.vel);
  this.loc.x = constrain(this.loc.x, 0, width-this.w);
  this.loc.y = constrain(this.loc.y, 0, width-this.w);

  //once snake eats food then add a segment and move food location
  if(this.loc.dist(food.loc) === 0){
    bodySegments.push(createVector(0,0));
    for(i = 0; i < bodySegments.length; i++){
      if(food.loc != bodySegments[i].loc){
        food.loc = createVector(width / 2 - Math.floor(Math.random()*16-8)*this.w, height / 2+Math.floor(Math.random()*12-6)*this.w);
      }
    }
  }

  }//end update

  render(){
    fill(this.clr);
    var row = Math.floor(this.loc.x/this.w);
    var col = Math.floor(this.loc.y/this.w);
    rect(row*this.w, col*this.w + header_height, 10, 10);
    rect(this.loc.x, this.loc.y, this.w, this.w );
    for(var i = 1; i <= bodySegments.length -1; i++){
      rect(bodySegments[i].x, bodySegments[i].y, this.w, this.w);
    }
  }//end render

  tangled(){
    //for loop checking each segment in the segment array
    for(i = 0; i < bodySegments.length; i++){
      //if stament checking if the locations are equal to each other
      if(this.loc.x == bodySegments[i].x && this.loc.y == bodySegments[i].y){
        console.log("Game Over");
      }
    }
  }

   keyPressed(){
    if(keyCode === UP_ARROW){
      this.loc.y = this.loc.y - this.w;
    }
    if(keyCode === DOWN_ARROW){
      this.loc.y = this.loc.y + this.w;
    }
    if(keyCode === LEFT_ARROW){
      this.loc.x = this.loc.x - this.w;
    }
    if(keyCode === RIGHT_ARROW){
      this.loc.x = this.loc.x + this.w;
    }

  }//end keyPressed
} //++++++++++++++++ End Snake
