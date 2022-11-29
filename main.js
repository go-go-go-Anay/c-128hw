song = "";

leftWrist_x = "";
leftWrist_y = "";
rightWrist_x = "";
rightWrist_y = ""

function preload(){
song = loadSound("All my friends are toxic.mp3")
}

function setup(){
canvas = createCanvas(600, 500);
canvas.position(468, 200);

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelloaded);
poseNet.on('pose', gotPoses);
}

function draw(){

    image(video, 0, 0, 600, 500);

}

function play(){
    song.play();

    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results){
 if(results.length > 0){

    leftWrist_x = results[0].pose.leftWrist.x;
    leftWrist_y = results[0].pose.leftWrist.y;

    console.log("x position of left wrist is " + leftWrist_x +" , y position of left wrist is " + leftWrist_y);

    rightWrist_x = results[0].pose.rightWrist.x;
    rightWrist_y = results[0].pose.rightWrist.y;

    console.log("x position of right wrist is " + rightWrist_x + " , y position of right wrist is " + rightWrist_y);
 }
}

function modelloaded(){
    console.log("posenet is loaded");
}