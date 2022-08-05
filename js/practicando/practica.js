/*let nam = prompt( 'pon tu nombre')
let age = parseInt(prompt('que edad tienes'))



console.log(`hola ${nam} tienes ${age} años y el proximo tendras ${age+1} años`);  */

/* escribe programa para calcular area de 3  figuras 
triangulo  b*h/2
cuadradob*h
circulo 2r*pi

primero preguntar que figura
y solicitar datos para calcularlo */




let figura = prompt('escribe la figura geometrica:triangulo, circulo o cuadrado de laque quieras saber su area')

let radio;
let altura;
let base;

switch(figura){
    case'triangulo':
    base=prompt('introduce la base')
    altura=prompt('introduce la altura')
    console.log(`el area del triangulo es ${(base*altura)/2}`);
    break

    case'cuadrado':
    base=prompt('introduce la base')
    altura=prompt('introduce la altura')
    console.log(`el area del cuadrado es ${(base*altura)}`);
    break
    
    case'circulo':
    radio=prompt('introduce el radio')
    console.log(`el area del circulo es ${radio*3.1416}`);
    break
   default: console.log(`no corresponde`);
}