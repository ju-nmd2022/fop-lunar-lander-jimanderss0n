background(0, 0, 0);
let x = 300;
let y = 200;
noStroke();

//Stars

let starX = [];
let starY = [];
let starAlpha = [];
for (let i = 0; i < 200; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}

//Rocket graphics

//base rocket

function rocket(x, y) {
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

  //Left wing

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

  //Right wing

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
}

//Moon

//Base shape

function moon() {
  fill(150, 150, 180);
  ellipse(x, y + 350, 800, 200);
  fill(120, 120, 150);
  ellipse(x - 100, y + 340, 800, 110);
}

//Thrust animation

let particles = [];

function createParticle(x, y) {
  const v = 0.2 + Math.random();
  const a = Math.PI * 2 + Math.random() * Math.PI;
  const maxLife = 100 + Math.floor(Math.random() * 100);
  return { x: x, y: y, velocity: v, angle: a, life: 0, maxLife: maxLife };
}

function drawParticle(particle) {
  push();
  translate(particle.x, particle.y);
  noStroke();
  fill(255, 110, 0, 20);
  ellipse(0, 0, 15);
  pop();
}

function updateParticle(particle) {
  particle.x = particle.x + Math.cos(particle.angle) * particle.velocity;
  particle.y = particle.y + Math.sin(particle.angle) * particle.velocity;
  particle.velocity = particle.velocity * 1.04;
  particle.life = particle.life + 4;

  if (particle.life > particle.maxLife) {
    const particleIndex = particles.indexOf(particle);
    particles.splice(particleIndex, 1);
  }
}

// start screen graphics
push();
function startFunction() {
  fill(0, 0, 0, 200);
  rect(0, 0, width, height);
  fill(255, 255, 255);
  text("Welcome to Luna Lander!", x - 260, y - 100, [x, y]);
  textSize(30);
  text("Press Mouse1 to start", x - 135, y - 35, [x, y]);
  text("Control thrust with space key", x - 185, y, [x, y]);
  textSize(50);
}
pop();

// crash screen graphics
push();
function crashFunction() {
  fill(0, 0, 0, 100);
  rect(0, 0, width, height);
  fill(255, 255, 255);
  text("Crashed", x - 70, y - 100, [x, y]);
  textSize(30);
  text("Press Mouse1 to try again", x - 155, y - 35, [x, y]);
  textSize(50);
}
pop();

// land screen graphics
push();
function landFunction() {
  fill(0, 0, 0, 100);
  rect(0, 0, width, height);
  fill(255, 255, 255);
  text("You Landed!", x - 100, y - 100, [x, y]);
  textSize(30);
  text("Press Mouse1 to play again", x - 155, y - 35, [x, y]);
  textSize(50);
}
pop();

//Activate all functions

let isGameActive = false;

let startScreen = true;

let crashScreen = false;

let landScreen = false;

let rocketY = 100;
let velocity = 4;
let acceleration = 0.2;

function draw() {
  noStroke();
  background(0, 0, 0);

  //Activate game
  if (mouseIsPressed) {
    isGameActive = true;
    startScreen = false;
  }

  //stars
  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 3);
    starAlpha[index] = starAlpha[index] + 0.03;
  }
  moon(x, y);

  //Thrust
  for (let particle of particles) {
    drawParticle(particle);
    updateParticle(particle);
  }

  if (keyIsDown(32)) {
    for (let i = 0; i < 80; i++) {
      let particle = createParticle(x, rocketY + 52);
      particles.push(particle);
    }
  }

  //make rocket fall down
  rocket(300, rocketY);
  if (isGameActive) {
    rocketY = rocketY + velocity;
    velocity = velocity + acceleration;

    //make rocket stop
    if (rocketY > 415) {
      isGameActive = false;
    }

    //make rocket accelerate up
    if (keyIsDown(32)) {
      velocity = velocity - 0.5;
    }
  }

  //startscreen
  if (startScreen) {
    startFunction(x, y);
  }

  //Crash screen
  if (rocketY > 415 && velocity > 3) {
    crashScreen = true;
    }
    if (mouseIsPressed) {
      crashScreen = false;
      rocketY = 100;
      velocity = 4;
      acceleration = 0.2;
      isGameActive = true;
    }
  }
  if (crashScreen) {
    crashFunction(x, y);
  }

  //Land screen
  if (rocketY > 415 && velocity < 3) {
    landScreen = true;
    if (mouseIsPressed) {
      landScreen = false;
      rocketY = 100;
      velocity = 4;
      acceleration = 0.2;
      isGameActive = true;
    }
  }
  if (landScreen) {
    landFunction(x, y);
  }
}
