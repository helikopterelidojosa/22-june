//drawing randomly

var canvas = document.getElementById("123");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#fff";
ctx.fillRect(0,0,200,200);


setInterval(


	function draw() {
    
    let x = Math.random()*100 +50;
    let y = Math.random()*100 +50;
    let xx = Math.random()*100 +50;
    let yy = Math.random()*100 +50;
    
    ctx.moveTo(x,y);
	ctx.lineTo(xx,yy);
	ctx.stroke();

}, 3000);