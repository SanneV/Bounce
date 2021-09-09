
/**
 * variabelen
 * hier staan alle variabelen waarvan gebruik wordt gemaakt
 */

var x = [0, 0, 0, 0, 0];
var y = [0, 0, 0, 0, 0];
var speedX = [5, 4, 3, 2, 1];
var speedY = [5, 4, 3, 2, 1];


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  
}

/**
 * alle functies
 * alle balletjes (1 t/m 5) hebben allemaal een eigen 
 * functie met eigen variabelen
 */

var balletje1 = function(){
  fill(255, 0, 0);
  ellipse(x[0], y[0], 50, 50);

  y[0] = y[0] + speedY[0];
  x[0] = x[0] + speedX[0];

  if(y[0] > 695){
    speedY[0] = -5;
  }
  if(y[0] < 25){
    speedY[0] = 5;
    }

  if(x[0] > 1255){
  speedX[0] = -5;
    }
  if(x[0] < 25){
  speedX[0] = 5;
  }

}

var balletje2 = function(){
  fill(200, 200, 0);
  ellipse(x[1], y[1], 50, 50);

  y[1] = y[1] + speedY[1];
  x[1] = x[1] + speedX[1];

  if(y[1] > 695){
    speedY[1] = -4;
  }
  if(y[1] < 25){
    speedY[1] = 4;
  }

  if(x[1] > 1255){
  speedX[1] = -4;
  }
  if(x[1] < 25){
  speedX[1] = 4;
  }

}

var balletje3 = function(){
  fill(0, 255, 0);
  ellipse(x[2], y[2], 50, 50);

  y[2] = y[2] + speedY[2];
  x[2] = x[2] + speedX[2];

  if(y[2] > 695){
  speedY[2] = -3;
  }
  if(y[2] < 25){
  speedY[2] = 3;
  }

  if(x[2] > 1255){
  speedX[2] = -3;
  }
  if(x[2] < 25){
  speedX[2] = 3;
  }

}

var balletje4 = function(){
  fill(0, 0, 255);
  ellipse(x[3], y[3], 50, 50);

  y[3] = y[3] + speedY[3];
  x[3] = x[3] + speedX[3];

  if(y[3] > 695){
  speedY[3] = -2;
  }
  if(y[3] < 25){
  speedY[3] = 2;
  }

  if(x[3] > 1255){
  speedX[3] = -2;
  }
  if(x[3] < 25){
  speedX[3] = 2;
  }

}

var balletje5 = function(){
  fill(200, 0, 200);
  ellipse(x[4], y[4], 50, 50);

  y[4] = y[4] + speedY[4];
  x[4] = x[4] + speedX[4];

  if(y[4] > 695){
  speedY[4] = -1;
  }
  if(y[4] < 25){
  speedY[4] = 1;
  }

  if(x[4] > 1255){
  speedX[4] = -1;
  }
  if(x[4] < 25){
  speedX[4] = 1;
  }

}

/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {

  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond zwart, zodat je het kunt zien
  background(0, 0, 0);

  // Kleur van de omlijning van de balletjes
  stroke(255, 255, 255);

  // Hier worden alle functies van de 5 balletjes aangeroepen
  balletje1();
  balletje2();
  balletje3();
  balletje4();
  balletje5();

}