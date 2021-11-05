//grabs canvas element and stores it in a variable
var canvas = document.getElementById("myCanvas");

//set up canvas context - where the drawing will be
//get context by calling getcontext and pass it to a string 2d (drawing in 2d)
var context = canvas.getContext("2d");

//brush color with strokestyle or fillstyle
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";

//repeat steps to draw a rectangle; fillRect and strokeRect
context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100);

//canvas pattern -- createPattern
function drawPattern() {
    var canvas = document.getElementById("demo2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";

    var img = new Image(); 
    img.src = "../images/bg-bike.png";
    //loads the image after image has been loaded by browser
    img.onload = function() { 
    };
}

//gradient
function drawGradient() {
    var canvas = document.getElementById("demo3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var gradient = context.createLinearGradient(0, 0, 0, 200); 
}

//color stops
function drawGradient() {
    var gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue"); 
    gradient.addColorStop(1, "white"); 
    context.fillStyle = gradient; 
    context.fillRect(10, 10, 100, 100); 
    context.strokeRect(10, 10, 100, 100); 
}

//drawing other shapes with paths --beginPath()
function drawCircle(canvas) {
    var context = canvas.getContext("2d");
    context.beginPath();
}

//arc(x, y, radius, startAngle, endAngle, anticlockwise)
function drawCircle(canvas) {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI*2, true);
}

//saving drawings toDataURL
function saveDrawing() {
    var canvas5 = document.getElementById("demo5");
    window.open(canvas5.toDataURL("image/png"));
}

var button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing, false);

//draw image to canvas
window.addEventListener("load", drawImageToCanvas, false);
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var image = document.getElementById("myImageElem");
// draw the image at x=0 and y=0 on the canvas
context.drawImage(image, 68, 68);
var imageData = context.getImageData(0, 0, 1, 1);
var pixelData = imageData.data;
console.log(pixelData.length);

//converting to black and white
//First, we’ll call getImageData(0, 0, 200, 200) to retrieve the entire canvas. Then, we’ll grab the red, green, and blue values of each pixel, which appear in the array in that order:
function manipulateImage() {
    var canvas = document.getElementById("demo7");
    var context = canvas.getContext("2d");
    var image = document.getElementById("secondImage");
    context.drawImage(image, 68, 68);

    var imageData = context.getImageData(0, 0, 200, 200);
    
    var red, green, blue, greyscale;
    
    for (var i = 0; i < imageData.data.length; i += 4) {
    red = imageData.data[i];
    green = imageData.data[i + 1];
    blue = imageData.data[i + 2];
   
    var grayscale = red * 0.3 + green * 0.59 + blue * 0.11;
        
    imageData.data[i] = grayscale;
    imageData.data[i + 1] = grayscale;
    imageData.data[i + 2] = grayscale; 
    context.putImageData(imageData, 0, 0);
    }
}

//manipulating video
function makeVideoOldTimey() {
    var video = document.getElementById("video");
    var canvas = document.getElementById("canvasOverlay");
    var context = canvas.getContext("2d");

    video.addEventListener("play", function() { 
    draw(video,context,canvas);               
    }, false);  

}

function draw(video, context, canvas) {
    if (video.paused || video.ended) return false;
    
    drawOneFrame(video, context, canvas);
}

function drawOneFrame(video, context, canvas){
    // draw the video onto the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    var imageData = context.getImageData(0, 0, canvas.width, 
↵canvas.height);
    var pixelData = imageData.data; 
    // Loop through the red, green and blue pixels, 
    // turning them grayscale
    
    var red, green, blue, greyscale;  
    for (var i = 0; i < pixelData.length; i += 4) {
    red = pixelData[i];
    green = pixelData[i + 1];
    blue = pixelData[i + 2];
    //we'll ignore the alpha value, which is in position i+3
        
    grayscale = red * 0.3 + green * 0.59 + blue * 0.11;
        
    pixelData[i] = grayscale;
    pixelData[i + 1] = grayscale;
    pixelData[i + 2] = grayscale;
    }
            
    context.putImageData(imageData, 0, 0); 
}