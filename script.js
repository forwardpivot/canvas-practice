const canvas1 = document.querySelector('#canvas1');
const ctx = canvas1.getContext('2d');
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;

let xAxis = 500;
let yAxis = 500;
//let size = 0;
let angle = 0;

function draw() {
 //changes the fill color to the value
 ctx.fillStyle = 'red';
 //Changes the color of the border
 ctx.strokeStyle='orange';
 //changes how thick the border is
 ctx.lineWidth = 3;
 ctx.beginPath();
 /** CIRCLE
 *1st value moves it along the X axis
 *2nd value moves it along the Y axis
 *3rd value makes it bigger
 *4th value starts the angle
 *5th value finishes the angle
 */ 
 ctx.arc(xAxis, yAxis, 10, 0, Math.PI * 2);
 ctx.closePath()
 // The default color is black
 ctx.fill();
 //creates a border around it
 ctx.stroke();
}
/**
 * This function redraws the canvas over, and over creating
 * the illusion of movement
 */
function animate() {
    //This clears the previous frames, and only shows the current frame, but then
    //no meteor :(
    ctx.clearRect(0,0,canvas1.width,canvas1.height)
    /**
     * Math.sin will cause a wobble effect
     * Math.cos will cause it to do a circle
     */
    xAxis += 5 * Math.sin(angle);
    yAxis += 5 * Math.cos(angle);
    //size += 0.2;
    /**
     * Decreasing the angle variable causes it to have a wider range of movement
     */
    angle += 0.1;


   draw();
    //Recursion
    requestAnimationFrame(animate);
    }
animate();


/** RECTANGLE
 * 1st two values move it on the X, and Y axis respectively
 * The last two are width, and height respectively
 */

//ctx.fillRect(100, 50, 100, 100);
