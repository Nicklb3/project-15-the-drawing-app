const canvas = document.getElementById('drawing-canvas');
const increaseBtn = document.querySelector('#increase');
const decreseBtn = document.querySelector('#decrese');
const strokeThinkness = document.querySelector('#size');
const colorBtn = document.querySelector('#color');
const clearBtn = document.querySelector('#clear');

/*  
******************* Canvas getContext() Method *********************
https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext#:~:text=getContext()%20method%20returns%20a,to%20a%20different%20context%20mode.

******************* CanvasRenderingContext2D ********************
https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
*/

const ctx = canvas.getContext('2d');
// console.log(ctx);

let size = 10;
let isPressed = false;
let color = 'black';
let x = undefined;
let y = undefined;