
var canvas = document.getElementById("1234"); //see canvas respected html file for canvas id
var ctx = canvas.getContext("2d"); //making of drawing in 2d on canvas

ctx.fillStyle = "cyan";  //background color in canvas
ctx.fillRect(0,0,200,200);  // drawing the background
//the biggest numbers must be as same as width and height respectfully 

let x = 0; //set starting point of the graph
//somehow it happens that it must be global or it did not worked



// vvvvv this is how the action is going  vvvvv
setInterval( 

    //making the drawing function
	function draw() {
    
    
    //making the random number the max corresponding to the height of the canvas
    let y = Math.floor(Math.random()*200); 
   
    //making the line horisontal
    let xx = x;

    //making line ends on point 0 and starts with random
    //dont know how to make it opposite or making graph start from  the down of the canvas ie the max height
    let yy = 0;
    
    ctx.moveTo(x,y);  //start of line
	ctx.lineTo(xx,yy); //end of line
	ctx.stroke();  //draw line
    x+=2; //draw next line 2 units aside
    



}, 300); // the numberhow fast it draws graph until it is full 
    //small number is fast, big number is slow
    //1000 is excacty one second per line




