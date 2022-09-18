// setup canvas

const canvas = document.querySelector('canvas');// area dibujo etiqueta especifiva para js
const ctx = canvas.getContext('2d');// valor especifico de camvas con js para indicar lo q seva encribir en 2d

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

function Ball(x, y, velX, velY, color, size){  //generamos constructor
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size=  size;
}

// creamos pelotas
Ball.prototype.draw = function(){
  ctx.beginPath(); //empiece
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);//dibujamos pelotas 
  ctx.fill();//fin

}
Ball.prototype.update = function() {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}
var balls = []; // genereamos muchas pelotas

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  while (balls.length < 15) {
    var size = random(40,10);
    var ball = new Ball(
      // la posición de las pelotas, se dibujará al menos siempre
      // como mínimo a un ancho de la pelota de distancia al borde del
      // canvas, para evitar errores en el dibujo
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
      size
    );
    balls.push(ball);
  }for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
  }

  requestAnimationFrame(loop);
}
loop();


