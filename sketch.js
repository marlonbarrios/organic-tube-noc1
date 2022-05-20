//Self-drawing Folding structure organic tube like

//create walker and dont' erase traces with the size of the ellispse with perlin noise to look more organic
//https://marlonbarrios.github.io/organic-tube-noc1/
var w;

function setup() {
  createCanvas(1400, 800);
  // Make a Walker object
  w = new Walker();
background(156, 9, 51)
}

function draw() {

  // Update and display object
  w.update();
  w.display();

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
    // Setting the magnitude of that vector
    this.acc.setMag(0.1);

    // Physics engine algorithm
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  this.display = function() {
    // Draw Walker as circle

      fill(200);
    // Perlin Noise to make it oooks more organic
        ellipse(this.pos.x - 100, this.pos.y - 100 , noise(width)* 200, noise(height)* 200);
      
  
  }

 
}
function mousePressed() {
  saveFrames('foldingtube', 'png', 1, 1)
  }
