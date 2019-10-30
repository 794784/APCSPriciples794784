class Bar {

constructor (x, y, w, h){
this.loc = createVector(x,y);

this.w = w;
this.h = h;
}

render(){
  fill(10, 20, 200 );
rect (this.loc.x, this.loc.y, this.w, this.h);

}

run(){
  this.render();
}

set(i){
  this.loc.x=i*25;

}


}// end bar class
