
/**
 * variabelen
 * hier staan alle variabelen waarvan gebruik wordt gemaakt
 */

var x1 = 80;
var x2 = 80;
var x3 = 80;
var x4 = 80;
var x5 = 80;

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
  ellipse(x1, y1, 50, 50);

  y1 = y1 + speedy1;
  x1 = x1 + speedx1;

  if(y1 > 720){
    speedy1 = -5;
  }
  if(y1 < 0){
    speedy1 = 5;
    }

  if(x1 > 1280){
  speedx1 = -5;
    }
  if(x1 < 0){
  speedx1 = 5;
  }

}

var balletje2 = function(){
  fill(200, 200, 0);
  ellipse(x2, y2, 50, 50);

  y2 = y2 + speedy2;
  x2 = x2 + speedx2;

  if(y2 > 720){
    speedy2 = -4;
  }
  if(y2 < 0){
    speedy2 = 4;
  }

  if(x2 > 1280){
  speedx2 = -4;
  }
  if(x2 < 0){
  speedx2 = 4;
  }

}

var balletje3 = function(){
  fill(0, 255, 0);
  ellipse(x3, y3, 50, 50);

  y3 = y3 + speedy3;
  x3 = x3 + speedx3;

  if(y3 > 720){
  speedy3 = -3;
  }
  if(y3 < 0){
  speedy3 = 3;
  }

  if(x3 > 1280){
  speedx3 = -3;
  }
  if(x3 < 0){
  speedx3 = 3;
  }

}

var balletje4 = function(){
  fill(0, 0, 255);
  ellipse(x4, y4, 50, 50);

  y4 = y4 + speedy4;
  x4 = x4 + speedx4;

  if(y4 > 720){
  speedy4 = -2;
  }
  if(y4 < 0){
  speedy4 = 2;
  }

  if(x4 > 1280){
  speedx4 = -2;
  }
  if(x4 < 0){
  speedx4 = 2;
  }

}

var balletje5 = function(){
  fill(200, 0, 200);
  ellipse(x5, y5, 50, 50);

  y5 = y5 + speedy5;
  x5 = x5 + speedx5;

  if(y5 > 720){
  speedy5 = -1;
  }
  if(y5 < 0){
  speedy5 = 1;
  }

  if(x5 > 1280){
  speedx5 = -1;
  }
  if(x5 < 0){
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