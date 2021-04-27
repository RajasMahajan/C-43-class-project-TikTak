var hr = hour();
var mn = minute();
var sc = second();
function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 angleMode(DEGREES);
}
function draw() {
  background(0,0,0);  
 
  scAngle = map(sc,0,60,0,360);
  stroke(255,0,0);
  stokeWeight(7);
  line(0,0,100,0);
  // drawSprites();
}