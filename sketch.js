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
  stroke("green");
  strokeWeight(8);
  fill("black")
  arc(5,5,200,200,scAngle,10)
  push();
  rotate(scAngle);
  stroke("green");
  strokeWeight(5);
  line(0,0,100,0);
  pop();
  
  // scAngle1 = map(mn,0,60,0,360);
  scAngle = map(sc,0,60,0,360);
  translate(200,200);
  stroke("blue");
  strokeWeight(8);
  fill("black")
  arc(5,5,200,200,scAngle,10)
  translate(0,1.5);
    push();
  rotate(scAngle1);
  stroke("blue");
  strokeWeight(7);
  line(0,0,95,0);
  pop();
  
  
  scAngle2 = map(hr,0,60,0,360);
  scAngle = map(sc,0,60,0,360);
  translate(200,200);
  stroke("red");
  strokeWeight(8);
  fill("black")
  arc(5,5,200,200,scAngle,10)
  translate(0,1.5);
  
  push();
  rotate(scAngle2);
  stroke("red");
  strokeWeight(7);
  line(0,0,80,0);
  pop();
  
  // drawSprites();
}