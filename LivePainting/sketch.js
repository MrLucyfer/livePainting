function setup() {
  createCanvas(800, 800);
  background(0);
}

function mouseDragged() {
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 32, 32);
}
