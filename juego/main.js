// setup canvas

const canvas = document.querySelector('canvas');// area dibujo etiqueta especifiva para js
const ctx = canvas.getContext('2d');// valor especifico de cambas con js para indicar lo q seva encribir en 2d

const width = canvas.width = window.innerWidth; // ancho prdeterminado es 300 y 150 de height aqui indicamos ancho viewport
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;// devuelve lemax  entero menor o igul al numero
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

function Ball(x, y, velX, velY, color, size){
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size=  size;
}

// creamos pelotas
Ball.prototype.draw = function(){
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();

}






 