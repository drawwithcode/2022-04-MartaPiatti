let tip, r, g, b, nBox, imgC, imgF, rText, gText, bText, cx, cy;
let robotoBold,
  kitty,
  fish,
  i = 0;

//upload the fonts and images
function preload() {
  robotoBold = loadFont("assets/Roboto/Roboto-Bold.ttf");
  imgC = loadImage("assets/cat.png");
  imgF = loadImage("assets/fish.png");
}

function setup() {
  setShakeThreshold(20);
  createCanvas(windowWidth, windowHeight);
  background("#f7f0eb");
  image(imgC, 0, 0, width, width * 2);
  //create html elemnts: sliders
  r = createSlider(0, 255, 255);
  r.position(20, 20);
  g = createSlider(0, 255, 0);
  g.position(20, 50);
  b = createSlider(0, 255, 0);
  b.position(20, 80);
  //create button. When pressed the function setKitty is activated
  kitty = createButton("Cat");
  kitty.size(75, 30);
  kitty.position(20, 130);
  kitty.mousePressed(setKitty);
  kitty.style("font-family", robotoBold);
  kitty.style("background-color", "#854008");
  kitty.style("color", "#ffffff");
  kitty.style("font-size", "20px");
  kitty.style("text-align", "center");
  kitty.style("font-weight", "bold");
  kitty.style("border", "none");
  kitty.style("border-radius", "4px");
  //create button. When pressed the function setFish is activated
  fish = createButton("Fish");
  fish.size(75, 30);
  fish.position(120, 130);
  fish.mousePressed(setFish);
  fish.style("font-family", robotoBold);
  fish.style("background-color", "#f67f00");
  fish.style("color", "#ffffff");
  fish.style("font-size", "20px");
  fish.style("text-align", "center");
  fish.style("font-weight", "bold");
  fish.style("border", "none");
  fish.style("border-radius", "4px");
  //set the position of the tip
  cx = 129;
  cy = 443;
  noStroke();
  tip = circle(cx, cy, 5);
}

function draw() {
  create();
}

//create the function create o it can be activated also at different moments
function create() {
  noStroke();
  fill("#dedede");
  rect(0, 0, 220, 185);
  //get the values from the sliders to change the color of the tip
  const rValue = r.value();
  const gValue = g.value();
  const bValue = b.value();
  textFont(robotoBold);
  fill("red");
  rText = text("R: " + rValue, r.x * 2 + r.width, 35);
  fill("green");
  gText = text("G: " + gValue, g.x * 2 + g.width, 65);
  fill("blue");
  bText = text("B: " + bValue, b.x * 2 + b.width, 95);
  //change the tip position following the rotation of the device and mapping it to control better the value
  const dx = map(rotationY, -90, 90, -1, 1);
  const dy = map(rotationX, -180, 180, -1, 1);
  fill(rValue, gValue, bValue);
  tip = circle(cx, cy, 5);
  cx += dx * 2.5;
  cy += dy * 2.5;
  //puts a limit to its value
  cx = constrain(cx, 0, width);
  cy = constrain(cy, 0, height);
}

//when cat is pressed to change drawing
function setKitty() {
  background("#f7f0eb");
  image(imgC, 0, 0, width, width * 2);
  cx = 129;
  cy = 443;
  i = 0;
  create();
  kitty.style("background-color", "#854008");
  fish.style("background-color", "#f67f00");
}

//when fish is pressed to change drawing
function setFish() {
  background("#f7f0eb");
  image(imgF, 0, 0, width, width * 2);
  cx = 87;
  cy = 424;
  i = 1;
  create();
  fish.style("background-color", "#854008");
  kitty.style("background-color", "#f67f00");
}

//checks which one is the current selection and restores its original aspect
function deviceShaken() {
  if (i == 0) {
    setKitty();
  } else {
    setFish();
  }
}

//asks for the permission to use the gyroscope datas
function touchEnded(event) {
  if (DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
    DeviceOrientationEvent.requestPermission();
  }
}
