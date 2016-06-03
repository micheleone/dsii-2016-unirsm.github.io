var serie = 0;
var serieDIcolori = 0.5;
 
 
function setup(){
createCanvas(windowWidth, windowHeight);
  background(255);
 colorMode(RGB)
}
 
 
function draw(){
  cambiaColore();
  drawLine();
}


 ///////////////////////////disegna linea/////////////////////
function drawLine(){
  var line_lengthX = (noise(serie) * 2*width)-width;
  var line_lengthY = (noise(serie+10) * 2*height)-height;
  serie += 0.01;
  line(width/2, height/2, (width/2)+line_lengthX, (height/2)+line_lengthY);
}


 ////////////////cambia colore alla linea/////////////////////////
function cambiaColore(){
  var red = noise(serieDIcolori)*255+50;
  var green = noise(serieDIcolori+10)*255+50;
  var blue = noise(serieDIcolori+20)*255+50;
  stroke(red, green, blue);
  serieDIcolori += 0.01;
}
 

 

function keyTyped() {
  if (key === 's') {
    saveCanvas();
  }
  return false;
}
  
  function mousePressed() {
	  
	  background(255);

  }
