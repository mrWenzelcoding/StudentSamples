function setup() {
  createCanvas(700, 400);
}

function draw() {
  background("darkslateblue");
  
        //Variables//
  
//Star
let Star=["#5246a0","#ada6d8","#ccffff"];
let Twinkle=random(Star);
let twinkle=random(Star);
let stwinkle=random(Star);
  
//Cell Tower Light
let Tower=["#cc0000","darkslateblue"];
let Flicker=random(Tower);

        //Structures//

//Wires
  strokeWeight(1.5)
  fill("darkslateblue");
arc(580,230,100,120,50, PI + QUARTER_PI, OPEN);  
arc(598,200,70,100,0, PI + QUARTER_PI, OPEN);  
arc(535,70.5,60,110,40, PI + QUARTER_PI, OPEN);
arc(100,300,80,80,50, PI + QUARTER_PI, OPEN);
  
//Stars
  frameRate(2);
  stroke(Twinkle);
  strokeWeight(5);
point(135,62);
point(355,34);
point(224,71);
point(24,31);
point(442,184);
point(587,186);
  
  frameRate(4);
  stroke(twinkle);
point(374,237);
point(325,145);
point(123,354);
point(11,223);
point(573,52);
point(424,84)
  
  frameRate(6);
  stroke(stwinkle);
point(654,123);
point(214,32);
point(184,132);
point(2603,321);
point(601,296);
  
//Cell Tower
  stroke("dimgray");
  strokeWeight(2);
line(505,50,500,100);
line(510,50,515,100);
line(504,60,512,70);
line(512,70,503,80);
line(503,80,513,88);
line(513,88,502,95);
line(505,50,510,50);
line(507.5,46,507.5,50);
  
  frameRate(0.5);
  stroke(Flicker);
  strokeWeight(7);
point(507.5,42);
 
//Moon
  stroke("silver");
  strokeWeight(5);
  fill("lightgrey");
ellipse(400,380,150);

//Craters
  strokeWeight(3)
  fill("lightgray");
ellipse(395,376,30);
ellipse(436,355,15);  
ellipse(380,330,30);
ellipse(440,400,40);
  
//Water Tower
  stroke("grey");
  strokeWeight(2);
  fill("darkgray");
triangle(200,140,175,160,225,160);
rect(185,160,30,20);
  
  stroke("dimgray");
line(185,180,185,200);
line(215,180,215,200);
line(185,180,215,200);
line(215,180,185,200);
  
//Vent
  stroke("Black");
  strokeWeight(1);
  fill("dimgray");
rect(36,87,27,14); 
rect(75,76,20,24);

//Smoke
  fill("#8c8c8c");
ellipse(81,37,35);
  
  fill("#737373");
ellipse(87,60,27);  
  
  fill("#a6a6a6");
ellipse(79,52,25);
ellipse(89,39,20);
  
  fill("#8c8c8c");
ellipse(83,60,20);

//Buildings
  fill("grey");
rect(20,100, 90, 300);
rect(130,200, 110, 200);
rect(270,170, 90, 330);
rect(480,100, 90, 300);
rect(620,190, 90, 310);
  
//Building lights off
  fill("#333333");
rect(72,150,25,20);
rect(30,180,25,20);
rect(72,270,25,20);
rect(72,330,25,20); 
rect(30,270,25,20); 
rect(30,390,25,20);  
rect(140,310,50,20);
rect(173,280,25,20);
rect(205,280,25,20);
rect(205,370,25,20);
rect(200,220,30,20);
rect(140,250,25,20);
rect(280,340,70,20);
rect(280,370,25,20);
rect(325,370,25,20);  
rect(325,220,25,20);
rect(280,250,70,20);
rect(532,180,25,20);
rect(493,210,25,20);
rect(532,210,25,20); 
rect(493,330,25,20); 
rect(493,270,25,20);
rect(532,270,25,20);  
rect(493,150,25,20);
rect(630,270,25,20);
rect(662,270,70,20); 
rect(630,360,25,20);
rect(662,360,25,20);
rect(694,360,25,20);  
rect(662,390,25,20);  
rect(662,210,25,20);
rect(694,210,25,20); 
  
//Building lights 1
  fill("#ffff33");
rect(30,120,25,20);
rect(72,120,25,20);
rect(30,150,25,20);
rect(72,180,25,20);
rect(72,210,25,20);
rect(30,210,25,20);
rect(72,240,25,20);
rect(30,240,25,20);
rect(72,300,25,20);
rect(30,300,25,20);
rect(30,330,25,20);
rect(72,360,25,20);
rect(30,360,25,20);
rect(72,390,25,20);

//Building lights 2
rect(140,220,50,20);
rect(173,250,25,20);
rect(205,250,25,20);
rect(140,280,25,20);
rect(200,310,30,20);
rect(140,340,25,20);
rect(173,340,25,20);
rect(205,340,25,20);
rect(140,370,25,20);
rect(173,370,25,20);
rect(140,398,50,20);
rect(200,398,30,20);
  
//Building lights 3 
rect(280,190,25,20);
rect(325,190,25,20);
rect(280,220,25,20);
rect(280,280,70,20);
rect(280,310,25,20);
rect(325,310,25,20);
rect(280,398,25,20);
rect(325,398,25,20);
  
//Building Lights 4
rect(493,120,25,20);
rect(532,120,25,20);
rect(532,150,25,20);
rect(493,180,25,20);
rect(493,240,25,20);
rect(532,240,25,20);
rect(493,300,25,20);
rect(532,300,25,20);
rect(532,330,25,20);
rect(493,360,25,20);
rect(532,360,25,20);
rect(493,390,25,20);
rect(532,390,25,20);
 
//Building Lights 5
rect(630,210,25,20);
rect(630,240,70,20);
rect(630,300,70,20);
rect(630,330,25,20);
rect(662,330,70,20);
rect(630,390,25,20);
rect(694,390,25,20);
}