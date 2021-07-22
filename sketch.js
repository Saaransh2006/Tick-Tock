var hr,m,s,clockImg,clock,mnAngle,hrAngle,scAngle,ticking,minuteS,hourS;

function preload() {
  clockImg = loadImage("clock2.png");
  ticking = loadSound("Ticking.mp3");
  minuteS = loadSound("minute.wav");
  hourS = loadSound("hour.wav");
}

function setup() {
  createCanvas(800,750);
  angleMode(DEGREES);

  ticking.loop();
  ticking.play();

  clock = createSprite(400,400,10,10);
  clock.addImage(clockImg);
  clock.scale = 2.3;
}

function draw() {
  background("black");
  drawSprites();

  hr = hour();
  m = minute();
  s = second();

  translate(400,400);
  rotate(-90)

  scAngle = map(s,0,60,0,360);
  mnAngle = map(m,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke("black");
  strokeWeight(9);
  line(0,0,200,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("red");
  strokeWeight(9);
  line(0,0,150,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(9);
  line(0,0,100,0);
  pop();

  strokeWeight(11);
  noFill();
  stroke("white");
  arc(0,0,605,605,0,scAngle);

  stroke("blue");
  arc(0,0,630,630,0,mnAngle);
  
  stroke("red");
  arc(0,0,655,655,0,hrAngle);

  if(s % 60 === 0 && m % 60 != 0) {
    minuteS.play();
  }
  if(m % 60 === 0 && s % 60 === 0) {
    hourS.play();
  }
}