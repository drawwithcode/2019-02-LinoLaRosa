var colorList1 = ["teal", "darkturquoise", "aqua", "cadetblue"];
var colorList2 = ["indigo", "purple", "darkviolet", "magenta"]
var minDiameter = 1;
var maxDiameter = 30;

function preload() {

}

function setup() {

  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  background("black");

}

function draw() {

  var index1 = Math.round(random() * (colorList1.length - 1));
  var index2 = Math.round(random() * (colorList2.length - 1));
  
  for (var x = 0; x < windowWidth; x += 25) {

    for (var y = 0; y < windowHeight; y += 25) {

      if (x == 775 || x == 800 || x == 825 || x == 850 || x == 875 || x == 900 || x == 925 || y == 400 || y == 425 || y == 450 || y == 475 || y == 500 || y == 525 || y == 550) {
        fill(color(random(255), random(255), random(255)));
      } else if (x < 275 || x > 1425 || y < 162 || y > 813) {
        fill(color(colorList1[index1]));
      } else {
        fill(color(colorList2[index2]));
      }

      var d = minDiameter + random() * (maxDiameter - minDiameter);
      noStroke();
      ellipse(x, y, d);

    }
  }

  textAlign(CENTER, CENTER);
  textSize(25);
  strokeWeight(4);
  stroke(0);
  fill("white");
  text("CLICK AND HOLD TO STOP THIS MADNESS AND CONTEMPLATE RANDOMNESS", windowWidth / 2, windowHeight / 2);

}

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}
