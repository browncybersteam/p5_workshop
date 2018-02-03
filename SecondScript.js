/*
 * Sets up script.
 */
function setup() {
  createCanvas(640, 480);
}

/*
 * Renders script.
 */
function draw() {
  if (mouseIsPressed) {
    fill(0, 255, 0);
  } else {
    fill(255, 0, 0);
  }
  ellipse(mouseX, mouseY, 5, 5);
}
