const canvas1 = document.querySelector('#canvas1');
const ctx = canvas1.getContext('2d');
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;


/**
 * This function redraws the canvas over, and over creating
 * the illusion of movement
 */
function animate() {
//changes the fill color to the value
ctx.fillStyle = 'red';
//Changes the color of the border
ctx.strokeStyle='blue';
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
ctx.arc(200, 200, 50, 0, Math.PI * 2);
ctx.closePath()
// The default color is black
ctx.fill();
//creates a border around it
ctx.stroke();

//Recursion
requestAnimationFrame(animate);
}
animate();


/** RECTANGLE
 * 1st two values move it on the X, and Y axis respectively
 * The last two are width, and height respectively
 */

//ctx.fillRect(100, 50, 100, 100);
