// Alvin Yang - unidentified flying thing
let circleX = 150;
let circleY = 300;
let triangleX = 200;
let triangleY = 200;
let rectX = 250;
let rectY = -300;
let backgroundR = 255;
let backgroundG = 255;
let backgroundB = 255;
function setup() {
	createCanvas(800, 800);
}
function draw() {
  background(backgroundR, backgroundG, backgroundB);
  strokeWeight(3)
	fill ("white")
  triangle (mouseX, mouseY, mouseX+25, mouseY+25, mouseX-25, mouseY+25);
	strokeWeight(3)
	fill (0, 255, 0)
circle(circleX, circleY, 150);
fill(255, 0, 0)
angleMode(DEGREES);
triangle (triangleX, triangleY, triangleX-50, triangleY+150, triangleX+500, triangleY+350)
rotate(105);
strokeWeight (2);
rectMode(CENTER);
strokeWeight (5); 
fill (125,125,125)
rect (rectX, rectY, 300, 130, 150);
circleX = circleX + 1;
triangleX = triangleX + 1;
rectX = rectX + 1;
circleY = circleY + 1;
triangleY = triangleY + 1;
rectY = rectY + 1;
mouseX = mouseX;
mouseY = mouseY;
}

function mousePressed(){
  backgroundR = 105;
  backgroundG = 200;
  backgroundB= 220;
}