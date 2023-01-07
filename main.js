noseX=0;
noseY=0;
rightWristX=0;
leftWristX=0;
difference=0;
function preload(){

}
function setup(){
canvas=createCanvas(500,400);
canvas.position(560,150);

video=createCapture(VIDEO);
video.position(20,150);
video.size(500,400);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function gotPoses(results){
if (results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    rightWristX=results[0].pose.rightWrist.x;
    leftWristX=results[0].pose.leftWrist.x;
difference=floor(leftWristX-rightWristX);
console.log("left wrist="+leftWristX+"right wrist="+rightWristX+"difference="+difference);
}
}
function draw(){
background('black');
fill('yellow');
stroke('pink');
square(noseX,noseY,difference);
document.getElementById("square_size").innerHTML="The width and height of the square is "+difference;
}