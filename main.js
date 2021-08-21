

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function start(){
    ObjectDetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="Status:object detecting";
}
function draw(){
    image(video,0,0,480,380);
    document.getElementById("Id_of_the_input_box").value;
}
function modelloaded(){
    console.log("model loaded");
    status=true;
    video.loop();
    video.speed(1.5);
    video.volume(0.5);
}