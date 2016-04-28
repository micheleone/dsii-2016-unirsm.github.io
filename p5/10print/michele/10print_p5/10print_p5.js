var w = 16;
var h = 16;
var index = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,130,200);
  strokeWeight(3);
  stroke(224);
  smooth();
  righe = int(windowHeight/h);
}

function draw() {
 var x1 = w*index;
 var x2 = x1 + w;
 var y1 = h*(righe - 1);
 var y2 = h*righe;
 
 if (random(2) < 1) {
    line(x2, y1, x1, y2);

} else {
line(x1, y1, x2, y2);
}
index++;

if (index >= windowWidth/w) {
    image = get(0, h, windowWidth, h*(righe-1));
    background(0,130,200);
    set(0, 0, image);
index = 0;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
 }
}
