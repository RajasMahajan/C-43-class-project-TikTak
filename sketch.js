function setup() {
  createCanvas(800,400);
 
}
function draw() { 
  background("black");  
  angleMode(DEGREES);
  var hr = hour();
  var mn = minute();
  var sc = second();
  scAngle = map(sc,0,60,0,360);
  translate(200,200);
  
  push();
  rotate(scAngle);
  stroke("green");
  strokeWeight(5);
  line(0,0,100,0);
  pop();
  
  scAngle = map(mn,0,60,0,360);
  translate(0,1.5);
  
  push();
  rotate(scAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,95,0);
  pop();
  
  
  scAngle = map(hr,0,12,0,360);
  translate(0,1.5);
  
  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,80,0);
  pop();
  
  // drawSprites();
}