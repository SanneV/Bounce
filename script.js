
/**
 * variabelen
 * hier staan alle variabelen waarvan gebruik wordt gemaakt
 */

/*var x1 = 25;
var x2 = 25;
var x3 = 25;
var x4 = 25;
var x5 = 25;*/

var y1 = 0;
var y2 = 0;
var y3 = 0;
var y4 = 0;
var y5 = 0;

var speedy1 = 5;
var speedy2 = 4;
var speedy3 = 3;
var speedy4 = 2;
var speedy5 = 1;

var speedx1 = 5;
var speedx2 = 4;
var speedx3 = 3;
var speedx4 = 2;
var speedx5 = 1;

var x = [25, 25, 25, 25, 25];
var y =[0, 0, 0, 0, 0];

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
  ellipse(x[0], y1, 50, 50);

  y1 = y1 + speedy1;
  x[0] = x[0] + speedx1;

  if(y1 > 695){
    speedy1 = -5;
  }
  if(y1 < 25){
    speedy1 = 5;
    }

  if(x[0] > 1255){
  speedx1 = -5;
    }
  if(x[0] < 25){
  speedx1 = 5;
  }

}

var balletje2 = function(){
  fill(200, 200, 0);
  ellipse(x[1], y2, 50, 50);

  y2 = y2 + speedy2;
  x[1] = x[1] + speedx2;

  if(y2 > 695){
    speedy2 = -4;
  }
  if(y2 < 25){
    speedy2 = 4;
  }

  if(x[1] > 1255){
  speedx2 = -4;
  }
  if(x[1] < 25){
  speedx2 = 4;
  }

}

var balletje3 = function(){
  fill(0, 255, 0);
  ellipse(x[2], y3, 50, 50);

  y3 = y3 + speedy3;
  x[2] = x[2] + speedx3;

  if(y3 > 695){
  speedy3 = -3;
  }
  if(y3 < 25){
  speedy3 = 3;
  }

  if(x[2] > 1255){
  speedx3 = -3;
  }
  if(x[2] < 25){
  speedx3 = 3;
  }

}

var balletje4 = function(){
  fill(0, 0, 255);
  ellipse(x[3], y4, 50, 50);

  y4 = y4 + speedy4;
  x[3] = x[3] + speedx4;

  if(y4 > 695){
  speedy4 = -2;
  }
  if(y4 < 25){
  speedy4 = 2;
  }

  if(x[3] > 1255){
  speedx4 = -2;
  }
  if(x[3] < 25){
  speedx4 = 2;
  }

}

var balletje5 = function(){
  fill(200, 0, 200);
  ellipse(x[4], y5, 50, 50);

  y5 = y5 + speedy5;
  x[4] = x[4] + speedx5;

  if(y5 > 695){
  speedy5 = -1;
  }
  if(y5 < 25){
  speedy5 = 1;
  }

  if(x[4] > 1255){
  speedx5 = -1;
  }
  if(x[4] < 25){
  speedx5 = 1;
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