const canvas1 = document.querySelector('#canvas1');
const ctx = canvas1.getContext('2d');
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;

//changes the fill color to the value
ctx.fillStyle = 'red';
//changes how thick the border is
ctx.lineWidth = 2;
ctx.beginPath();
/**
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

/**
 * 
 */

ctx.fillRect(0, 0, 100, 100);
