const canvas = document.querySelector('canvas');// area dibujo etiqueta especifiva para js
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth; // ancho prdeterminado es 300 y 150 de height aqui indicamos ancho viewport
const height = canvas.height = window.innerHeight;


function cantidad(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;// devuelve lemax  entero menor o igul al numero
  }

  function cantidadRGB (){
    return`rgb(${cantidad(0, 240)},${cantidad(0, 235)},${cantidad(0, 225)})`;
  }
  
function pelotas(x, y, velX, velY, color, size){  //generamos constructor
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size=  size;
  }
  pelotas.prototype.draw = function(){
    ctx.beginPath(); //empiece
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);//dibujamos pelotas 
    ctx.fill();}
    pelotas.prototype.update = function() {
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
      var pelotillas = []; // genereamos muchas pelotas
      
      function loop() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
        ctx.fillRect(0, 0, width, height);
      
        while (pelotillas.length < 15) {
          var size = cantidad(20,10);
          var pelo = new pelotas(
            // la posición de las pelotas, se dibujará al menos siempre
            // como mínimo a un ancho de la pelota de distancia al borde del
            // canvas, para evitar errores en el dibujo
            cantidad(0 + size,width - size),
            cantidad(0 + size,height - size),
            cantidad(-7,7),
            cantidad(-7,7),
            'rgb(' + cantidad(0,255) + ',' + cantidad(0,255) + ',' + cantidad(0,255) +')',
            size
          );
          pelotillas.push(pelo);
        }for (var i = 0; i < pelotillas.length; i++) {
          pelotillas[i].draw();
          pelotillas[i].update();
        }
      
        requestAnimationFrame(loop);
      }
      loop();