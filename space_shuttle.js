objects=[]
status="";

function preload(params) {
  img= loadImage("https://c8.alamy.com/comp/KY48RJ/astronaut-and-space-shuttle-exploring-space-near-planet-earth-digital-KY48RJ.jpg");
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status= Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img,gotResult);
}

function draw() {
  image(img,0,0,640,640)
  if (status != "") {
    for(i=0; i < objects.length; i++) {
     document.getElementById("status").innerHTML="Status = Objects Detected";
     r= random(255);
     g= random(255);
     b= random(255);
     fill(r,g,b);
     percent=floor(objects[i].confidence*100);
     text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y+25);
     noFill()
     stroke(r,g,b);
     rect(objects[i].x-100 ,objects[i].y + 25 , objects[i].width,objects[i].height);
   
    }
 }

}

function gotResult(error,results) {
  if (error) {
    console.error(error);
  } else {
    objects=results;
    console.log(results)
  }
}