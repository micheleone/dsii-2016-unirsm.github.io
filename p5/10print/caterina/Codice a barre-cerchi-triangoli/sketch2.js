// Codice a barre

var x = 0;  // store current x position on the grid
var y = 0;  // store current y position on the grid
var g = 10; // grid size
var colore = 255; // current grid color
var diametro = random (50,200); //variabile dei cerchi
var ciclo= 1;



function setup() {
   pixelDensity(displayDensity());
   createCanvas(windowWidth, windowHeight);
   //
   background(200);
   //
   url = getURL();
   //strokeJoin(ROUND);
   cursor(HAND);
 }

function draw() {
  preparaQuadretto();
  // riga proporzionale alla griglia
  strokeWeight(g/random(5));


  // lancio la monetina e disegno 
  if (testa()) {

    //variante linee
  if (ciclo <= 1){
    line(x*g,y,x*g,height); //linee dritte
  } //variante linee

    //variante cerchi
  else (ciclo <= 2){
  ellipse(x*g,y,diametro,diametro); //cerchi casuali sulla linea ad altezza e dimensione random
   }//variante cerchi

  // passo alla casella a lato
  x++;

  }  // lancio la monetina e disegno 


  // se sono in fondo alla riga vado a capo alla riga successiva
  if (x*g >= width) {
    x=0;
    ciclo++
//se le righe arrivano in fondo ricomincia dall'inizio e lancia la moneta
    colore = random(255); 
    g = 5+random(width);
    background(colore-255);
    preparaQuadretto();
  }
//finiti i cicli ricomincia da capo
  if (ciclo >=3 ){
    ciclo = 1;
  }//finiti i cicli ricomincia da capo

  } //chiudi draw

// riparti se premi il mouse
function mousePressed() {
  x=0;
  y=0;
  colore = random(255);
  g = 10+random(width);
  preparaQuadretto();
  ciclo++;// al click del mouse cambia ciclo
}

// lancio della monetina
function testa() {
  if (random(2) <= 1) {
    return(true); // testa
  } else {
    return(false); // croce
  }
}

// cancella un quadretto prima di disegnarci
function preparaQuadretto() {
   noStroke(); 
   stroke(255-colore);
}

// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// se premi "s" salva come immagine
function keyTyped() {
  if (key === 's') {
    saveCanvas();
  }
  return false;
}
