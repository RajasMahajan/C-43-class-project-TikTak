var hr = hour();
var mn = minute();
var sc = second();
function setup() {
  createCanvas(800,400);
 
}
function draw() { 
  background("black");  
  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360);
  translate(200,200);
  
  push();
  rotate(scAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  // drawSprites();
}