var osc = new p5.SinOsc();
var fft = new p5.FFT();
var shiftPressed = false

/*
 * Sets up script.
 */
function setup() {
  osc.amp(0.5);
  osc.start();
  createCanvas(750, 250);
}

/*
 * Produces a tone corresponding to the mouse's position, and Renders
 * a visual representation of it.
 */
function draw() {

  background(0, 70, 150);

  var waveform = fft.waveform();
  beginShape();
  strokeWeight(3);
  fill(0, 70, 150);
  for (var i = 0; i < waveform.length; i++) {
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();

  if (!shiftPressed) {
    // change oscillator frequency based on mouse x
    var freq = map(mouseX, 0, width, 40, 880);
    osc.freq(freq);

    // change oscillator amplitude based on mouse y
    var amp = map(mouseY, 0, height, 1, 0.01);
    osc.amp(amp);
  }
}

/*
 * Key listener.
 */
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    this.osc.setType("triangle");
  } else if (keyCode === DOWN_ARROW) {
    this.osc.setType("sine");
  } else if (keyCode === UP_ARROW) {
    this.osc.setType("sawtooth");
  } else if (keyCode === LEFT_ARROW) {
    this.osc.setType("square");
  } else if (keyCode === SHIFT) {
    shiftPressed = true;
  }
}

function keyReleased() {
  if (keyCode === SHIFT) {
    shiftPressed = false;
  }
}
