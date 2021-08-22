object="";
status=[];

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
    if(Status!=""){
        if(object[i].label == object_name){
            document.getElementById("status").innerHTML="Status:object detected";
            document.getElementById("number_of_object").innerHTML="mumber_of_object:"+object.length
            
             document.getElementById("Id_of_the_input_box").value;
             fill("#ff0000");
             percante=floor(object[i].confidence*100)
            text(object[i].label+""+percante+"%",object[i].x+15,object[i].y+15);
            nofill();
            stroke("#ff0000");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
}
    }
}
function gotresults(error,results){
    if(error){
        console.error(error)
}
console.log(results);
object=results
}


function modelloaded(){
    console.log("model loaded");
    status=true;
    video.loop();
    video.speed(1.5);
    video.volume(0.5);
}