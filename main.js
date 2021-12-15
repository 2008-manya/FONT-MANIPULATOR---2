function setup(){
    canvas = createCanvas(400 , 400);
    canvas.position(620,180);

    video = createCapture(VIDEO);
    video.size(400 , 400);
    video.position(150,150)

    poseNet = ml5.poseNet(video , modelLoaded);

    poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Is Initialized");
}
function gotPoses(results){
console.log(results);
}