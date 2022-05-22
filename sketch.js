//Self-drawing Folding structure organic tube like in randon colors leavinf traces.
//Black lines border
//random color background.

//Perlin noise algorithm to look more organic
//https://marlonbarrios.github.io/organic-tube-noc1/




var w;
var w2;
var w3;
var w4;
var w5;
var w6;
var w7;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Make a Walker object
  w = new Walker();
  w2 = new Walker();
 w3 = new Walker();
 w4 = new Walker();
 w5 = new Walker();
 w6 = new Walker();
 w7 = new Walker();

 background(Math.random(255) * 100, Math.random(255) * 100,Math.random(255) * 100)
}

function draw() {

  // Update and display object
  w.update();
  w.display();
  w2.update();
  w2.display();
  w3.update();
  w3.display();
  w4.update();
  w4.display();
  w5.update();
  w5.display();
  w6.update();
  w6.display();
  w7.update();
  w7.display();
 
}


 

function Walker() {

  // Random Creation in Space 
  this.pos = createVector( random(width), random(height));
  // Start with 0 velocity 
  this.vel = createVector(0.0);

  this.update = function() {
   
  var space = createVector(random(width), random(height));
   

    // Vector pointing from Walker to randon direction 
    this.acc = p5.Vector.sub(space, this.pos);
    this.acc.mult(0.02);
    // Setting the magnitude of that vector
    this.acc.setMag(0.02);

    // Physics engine algorithm
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  

this.display = function() {
    // Draw Walker as circle
 // map mouseY to modulator freq between a maximum and minimum frequency



    fill(Math.random(255) * 100, Math.random(255) * 100,Math.random(255) * 100)
    // Perlin Noise to make it oooks more organic
     
    stroke(0)
    // Perlin Noise to make it oooks more organic
        ellipse(this.pos.x , this.pos.y  , noise(width)* 150, noise(height)* 150);
    
  }
}


function mousePressed() {
  saveFrames('morphing_rainbows', 'png', 1, 1)
  }
