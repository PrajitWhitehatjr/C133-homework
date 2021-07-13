status="";

function preload(params) {
  img= loadImage("Cricket_field.jpg");
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status= Detecting Objects";
}

function modelLoaded() {
    console.console("Model Loaded!");
    status=true;
    objectDetector.detect(img,gotResult);
}

function draw() {
  image(img,0,0,640,420)
  fill(255,0,0);
  text("Batsman",115,55);
  noFill()
  stroke(255,0,0);
  rect(100,60,275,350)

  fill(255,0,0);
  text("Fielder",315,75);
  noFill()
  stroke(255,0,0);
  rect(300,80,275,350)

}

function gotResult(error,results) {
  if (error) {
    console.error(error);
  } else {
    
  }
}