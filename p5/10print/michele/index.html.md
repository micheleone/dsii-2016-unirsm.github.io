/* Questo algoritmo utilizza i caratteri "/" e "\" tipici di 10print per disegnare una figura speculare che si sviluppa su una angolo di 360 gradi.
L'immagine prodotta può essere salvata premendo il tasto "s", mentre per produrre una nuova figura basta cliccare una volta sulla finestra. */

float theta;   

void setup() {
  background(#0082c8);
  size(640, 420);
}

void draw() {
  frameRate(30); // Numero di frame
  strokeWeight(1); // Spessore delle linee
  float a = (mouseX / (float) width) * 360f; // Generazione di un angolo da 0 a 360 gradi in base alla posizione del mouse
  theta = radians(a); // Conversione in radianti
  translate(width/2, height); // Posizione delle linee sull'asse x
  translate(0, -170); // Posizione delle linee sull'asse y
  slash(120); // Numero di ramificazioni
}
void slash(float h) {
  h *= 0.66; // Ogni linea è lunga 2/3 rispetto alle dimensioni di quella precedente
  if (mousePressed) {
    background(#0082c8); // Cliccando con il mouse si resetta la schermata
  } else {
    if (h > 20) {
      pushMatrix();    // Salvataggio dello stato attuale della trasformazione (cioè il sistema di coordinate corrente)
      rotate(theta);   // Rotazione delle linee
      float c = map(mouseX, 0, width, 255, 0); // Controllo del movimento del primo gruppo attraverso il mouse
      stroke(255, c, 0); // Colorazione della linea
      line(-10, 0, 0, -h);  // Creazione della prima linea   
      translate(0, -h); // Posizionamento sugli assi x e y della prima linea
      line(-10, 0, 0, h); 
      translate(h, 0);
      slash(h);       // Creazione di sottogruppi di linee
      popMatrix();     // Ripristino dello stato precedente della matrice
      // Ripetizione delle operazione per il secondo gruppo di linee
      pushMatrix();
      rotate(-theta);
      float d = map(mouseX, 0, width, 0, 255);
      stroke(255);
      line(10, 0, 0, -h);
      translate(0, -h);
      line(10, 0, 0, h);
      translate(-h, 0);
      slash(h);
      popMatrix();
    }
  }
  if (keyPressed) { // premendo il tasto "s", l'immagine "frame.jpg" viene salvata nello Sketch folder
    if (key == 's') {
      save("frame.jpg");
    }
  }
}
