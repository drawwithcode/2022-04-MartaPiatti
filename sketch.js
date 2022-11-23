const urlString = window.location.href;

let url = new URL(urlString);

let robotoBold, robotoRegular, sansita;

function preload() {
  robotoBold = loadFont("assets/Roboto/Roboto-Bold.ttf");
  robotoRegular = loadFont("assets/Roboto/Roboto-Regular.ttf");
  sansita = loadFont("assets/Sansita/Sansita-ExtraBold.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#ffbf6e");
  textSize(70);
  fill("white");
  textFont(sansita);
  textAlign(CENTER);
  text("CONNECT", windowWidth / 2, 235);
  text("THE DOTS", windowWidth / 2, 305);
  textSize(30);
  fill("#854008");
  textFont(robotoRegular);
  text("Use the sliders", windowWidth / 2, 386);
  text("to change the tip color", windowWidth / 2, 426);
  text("Tilt your phone to draw", windowWidth / 2, 466);
  text("shake it to restart", windowWidth / 2, 506);
  let enter = createButton("START DRAWING");
  enter.size(320, 50);
  enter.position(windowWidth / 2 - 160, 616);
  enter.mousePressed(changePage);
  enter.style("font-family", robotoBold);
  enter.style("background-color", "#f67f00");
  enter.style("color", "#ffffff");
  enter.style("font-size", "30px");
  enter.style("text-align", "center");
  enter.style("font-weight", "bold");
  enter.style("border", "none");
  enter.style("border-radius", "4px");
}

function draw() {}

function changePage() {
  window.open(url + "first.html", "_self");
}

function touchEnded(event) {
  if (DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
    DeviceOrientationEvent.requestPermission();
  }
}
