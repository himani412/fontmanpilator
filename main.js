leftwristx=0;
rightwristx=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
video.size(550,500);

canvas=createCanvas(550,550);
canvas.position(560,150);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotposes);
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
       
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx - rightwristx);

    }
}
function modelLoaded(){
    console.log('ModelLoaded!');
}
function draw(){
    background('#FFD700');
    textSize(10);
    fill('#adff2f');
    stroke('#0000FF');
text('Himani',50,400)}