img = "";
status = "";

function preload(){
    img =  loadImage("dog_cat.jpeg");
}
function setup(){
canvas =     createCanvas(640,640);

    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";

}
function modelLoaded(){
    console.log("modeLoaded");
    status = true;
    objectDetector.detect(img,gotResults);
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("dog",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);

    fill("#FF0000");
    text("cat",320,320);
    noFill();
    stroke("#FF0000");
    rect(300,90,270,320)
}