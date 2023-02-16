background(0, 0, 0);
let x = 200;
let y = 200;
noStroke();
//Rocket graphics

//base rocket

fill(30, 160, 255);
beginShape();
vertex(x - 25.5, y + 50);
vertex(x - 25.5, y - 60);
bezierVertex(x - 25, y - 85, x - 20, y - 110, x, y - 123);
bezierVertex(x + 20, y - 110, x + 25, y - 85, x + 25.5, y - 60);
vertex(x + 25.5, y + 50);
vertex(x - 25.5, y + 50);
endShape();

//Nose

fill(255, 180, 0);
beginShape();
vertex(x - 25, y - 70);
bezierVertex(x - 25, y - 85, x - 20, y - 110, x, y - 123);
bezierVertex(x + 20, y - 110, x + 25, y - 85, x + 25, y - 70);
endShape();

//Windows

push();
fill(0, 0, 0);
stroke(255, 180, 0);
strokeWeight(2.5);
beginShape();
ellipse(x, y - 50, 18);
endShape();

strokeWeight(3);
beginShape();
ellipse(x, y - 15, 27);
endShape();

stroke(255, 255, 255);
beginShape();
vertex(x + 8, y - 15);
bezierVertex(x + 8, y - 15, x + 8, y - 21, x + 2, y - 22);
endShape();

strokeWeight(2);
beginShape();
vertex(x + 5, y - 50);
bezierVertex(x + 4, y - 55, x, y - 55, x + 1, y - 54);
endShape();
pop();

//Shadow Base Rocket

push();
beginShape();
fill(20, 20, 20, 60);
noStroke();
vertex(x - 25.5, y + 50);
vertex(x - 25.5, y - 60);
bezierVertex(x - 25, y - 85, x - 20, y - 110, x, y - 123);
vertex(x, y + 50);
endShape();
pop();

//Left thrust

beginShape();
vertex(x - 40, y + 70);
vertex(x - 20, y + 70);
vertex(x - 20, y - 10);
bezierVertex(x - 35, y + 30, x - 37, y + 27, x - 40, y + 70);
endShape();

push();
beginShape();
fill(20, 20, 20, 60);
noStroke();
vertex(x - 20, y + 70);
vertex(x - 28, y + 70);
vertex(x - 28, y + 10);
bezierVertex(x - 35, y + 30, x - 37, y + 27, x - 40, y + 70);
endShape();
pop();

//Right thrust

beginShape();
vertex(x + 40, y + 70);
vertex(x + 20, y + 70);
vertex(x + 20, y - 10);
bezierVertex(x + 35, y + 30, x + 37, y + 27, x + 40, y + 70);
endShape();

push();
beginShape();
fill(20, 20, 20, 60);
noStroke();
vertex(x + 40, y + 70);
vertex(x + 20, y + 70);
vertex(x + 20, y - 10);
bezierVertex(x + 25, y + 30, x + 33, y + 27, x + 30, y + 70);
endShape();
pop();

//Middle thrust

beginShape();
vertex(x - 15, y + 55);
vertex(x + 15, y + 55);
vertex(x + 10, y + 50);
vertex(x - 10, y + 50);
vertex(x - 15, y + 55);
endShape();

push();
beginShape();
fill(20, 20, 20, 60);
noStroke();
vertex(x - 15, y + 55);
vertex(x, y + 55);
vertex(x, y + 50);
vertex(x - 10, y + 50);
vertex(x - 15, y + 55);
endShape();
pop();
