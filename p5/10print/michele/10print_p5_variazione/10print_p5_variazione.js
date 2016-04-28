var theta;

function setup() {
 createCanvas(640, 420);
 background(0,130,200);
}

function draw(30) {
	frameRate(); // Numero di frame
	 strokeWeight(1); // Spessore delle linee
	 var a = (mouseX / (var) width) * 360f; // Generazione di un angolo da 0 a 360 gradi in base alla posizione del mouse
	 theta = radians(a); // Conversione in radianti
	 translate(width/2, height); // Posizione delle linee sull'asse x
	  translate(0, -170); // Posizione delle linee sull'asse y
	  //slash(120); // Numero di ramificazioni
}
function slash(var h) {
h *= 0.66; // Ogni linea è lunga 2/3 rispetto alle dimensioni di quella precedente
		if (mouseIsPressed) {
    background(0,130,200); // Cliccando con il mouse si resetta la schermata
  } else {
		if (h > 20) {
			push();    // Salvataggio dello stato attuale della trasformazione (cioè il sistema di coordinate corrente)
			rotate(theta);   // Rotazione delle linee
			var c = map(mouseX, 0, width, 255, 0); // Controllo del movimento del primo gruppo attraverso il mouse
			stroke(255, c, 0); // Colorazione della linea
			line(-10, 0, 0, -h);  // Creazione della prima linea   
            translate(0, -h); // Posizionamento sugli assi x e y della prima linea
            line(-10, 0, 0, h); 
            translate(h, 0);
            slash(h); // Creazione di sottogruppi di linee
            pop(); // Ripristino dello stato precedente della matrice
// Ripetizione delle operazione per il secondo gruppo di linee
            push();    // Salvataggio dello stato attuale della trasformazione (cioè il sistema di coordinate corrente)
			rotate(-theta);   // Rotazione delle linee
			var c = map(mouseX, 0, width, 0, 255); // Controllo del movimento del primo gruppo attraverso il mouse
			stroke(255); // Colorazione della linea
			line(10, 0, 0, -h);  // Creazione della prima linea   
            translate(0, -h); // Posizionamento sugli assi x e y della prima linea
            line(10, 0, 0, h); 
            translate(-h, 0);
            slash(h);       // Creazione di sottogruppi di linee
            pop();
        }
    }
    if (keyIsPressed) { // premendo il tasto "s", l'immagine "frame.jpg" viene salvata nello Sketch folder
    	if (key == 's') {
    		save("frame.jpg");
    	}
    }
}

