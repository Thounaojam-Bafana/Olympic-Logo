var canvas = document.getElementById("MyCanvas");
var ctx =canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle  = "red";
ctx.lineWidth = 2;
ctx.rect(150, 150, 450,220);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle  = "blue";
ctx.lineWidth = 7;
ctx.arc(200, 210, 40, 0, 2 * Math.PI);
ctx.stroke();



