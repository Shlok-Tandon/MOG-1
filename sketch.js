var shlok;
var ballista,bombard,tarpump,stormcaller,rocketlauncher,flamer;
var ballImg,bombImg,tarImg,stormImg,rocketImg,flameImg;
var bubblies,blavy,magikmons,windy,bobby,blob,biggy,wond;
var star,starImg,star2;
var level,level1,levcel2,level3,level4,levelbutton1,levelbutton2;
var lb1,lb2,lb3,lb4;
var gameState = "enter";
var wall;

function preload() {

  shlok = loadImage("kingrugni.jfif");
  ballImg = loadImage("ballista.jpg");
  bombImg = loadImage("bombard.jpg");
  tarImg = loadImage("tarpump.jpg");
  stormImg = loadImage("stormcaller.jpg");
  rocketImg = loadImage("rocketlauncher.jpg");
  flameImg = loadImage("flamer.jpg");
  starImg = loadImage("star2.png");
  levelbutton1 = loadImage("levelbuttonf.jpg");
  levelbutton2 = loadImage("bluelevelbutton.png");
  wall = loadImage("wall,tree.png");
}

function setup() {
  createCanvas(1200,730);
  ballista = createSprite(205,150,50,50);
  ballista.addImage(ballImg);
  ballista.scale = 0.75;

  bombard = createSprite(125,170,50,50);
  bombard.addImage(bombImg);
  bombard.scale = 0.75;

  tarpump = createSprite(-221,330,50,50);
  tarpump.addImage(tarImg);
  tarpump.scale = 0.9;

  stormcaller = createSprite(27,333,50,50);
  stormcaller.addImage(stormImg);
  stormcaller.scale = 0.8;

  rocketlauncher = createSprite(100,230,50,50);
  rocketlauncher.addImage(rocketImg);
  rocketlauncher.scale = 0.8;

  flamer = createSprite(335,255,50,50);
  flamer.addImage(flameImg);
  flamer.scale = 0.75;

  star2 = createSprite(125,45,20,20);
  star2.addImage(starImg);
  star2.scale = 0.1;

  level = createSprite(445,600,20,20);
  level.addImage(levelbutton1);
  level.scale = 0.1;

  level2 = createSprite(545,600,20,20);
  level2.addImage(levelbutton2);
  level2.scale = 1;

  level3 = createSprite(645,600,20,20);
  level3.addImage(levelbutton1);
  level3.scale = 0.1;

  level4 = createSprite(745,600,20,20);
  level4.addImage(levelbutton2);
  level4.scale = 1;

  level = 0;
  star = 0;

  lb1 = createSprite(445,600,30,30);
  lb1.visible = false;
  lb2 = createSprite(545,600,30,30);
  lb2.visible = false;
  lb3 = createSprite(645,600,30,30);
  lb3.visible = false;
  lb4 = createSprite(745,600,30,30);
  lb4.visible = false;

  
  d1 = createSprite(10,330,10,500);
  d2 = createSprite(145,330,10,500);
  d3 = createSprite(280,330,10,500);
  d4 = createSprite(145,85,270,10);
  d5 = createSprite(145,220,270,10);
  d6 = createSprite(145,400,270,10);
  d7 = createSprite(145,580,270,10);
  
}


function draw() {
  background(shlok);  
  drawSprites();
  textSize(15);
  textFont("algerian");
  fill("black");
  stroke("black");
  strokeWeight(0.5);
  text(level,50,50);
  text("BALLISTA  [0]",23,200);
  text("BOMBARD  [3]",159,200);
  text("TAR PUMP  [9]",23,370);
  text("STORM CALLER  [18]",165,370,100);
  text("ROCKET LAUNCHER  [21]",40,520,50,100);
  text("FLAMER  [24]",160,547);
  textSize(20);
  text(star,150,50);
  

  if(mousePressedOver(lb1)) {
    level = 1;
    gameState = "l1";
  }

  if(mousePressedOver(lb2)) {
    level = 2;
    gameState = "l2";
  }

  if(mousePressedOver(lb3)) {
    level = 3;
    gameState = "l3";
  }

  if(mousePressedOver(lb4)) {
    level = 4;
    gameState = "l4";
  }

  if(gameState === "l1") {
    d7.visible = false;
    
  }
}