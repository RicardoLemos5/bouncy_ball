var canvas, ctx;
var fps = 60;
window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    auto();
    loop();
};
var r, g, b;
var color;
var width = 800;
var height = 600;
var size = 50;
var speed = 10;

var x = size;
var y = size;
var randX = 0;
var randY = 0;
var radius = 1;

var testX = false;
var testY = false;

function loop(){
    setTimeout(function(){
        ctx.fillStyle = "#000";
        ctx.rect(0, 0, width, height);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x, y, size, 0, 2*Math.PI);
        ctx.fill();
        
        x += randX;
        y += randY;
        size += radius;
        
        if(x >= width - size){
            x = width - size;
            randX = -randX
            testX = true;
        }else if(x <= size){
            x = size;
            randX = -randX;
            testX = false;
        }
        
        if(y >= height - size){
            y = height - size;
            randY = -randY;
            testY = true;
        }else if(y <= size){
            y = size;
            randY = -randY;
            testY = false;
        }
        
        if(size >= 100){
            radius = -radius;
        }else if(size <= 5){
            radius = -radius;
        }
        
        loop();
    }, 1000/fps);
}

function auto(){
    randX = Math.floor((Math.random() * speed) + 1);
    randY = Math.floor((Math.random() * speed) + 1);
    if(testX) randX = -randX;
    if(testY) randY = -randY;
    r = Math.floor((Math.random() * 255) + 1);
    g = Math.floor((Math.random() * 255) + 1);
    b = Math.floor((Math.random() * 255) + 1);
    color = "rgb(" + r +"," + g + "," + b + ")";
    setTimeout(auto, 1000);
}
