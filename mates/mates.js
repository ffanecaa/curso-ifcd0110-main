/*const ladoCuadrado = 5;
const periCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    areaCuadrado,
    periCuadrado
})
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5 ;


const periTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase*alturaTriangulo)/2 ;

console.log({
    periTriangulo,
    areaTriangulo
});

//hay q usar funciones para evitar escribir codigo constantemente

function Triangulo ( lado1, lado2, base, altura){
    return {
     perimetro:(lado1 + lado2 + base),
     area:(base * altura/2),
    };
}
console.log(Triangulo(6,6,4,5.5));

function cuadrado (lado){
    return{
        perimetro:(lado *4),
        area:(lado * lado),
    }
}
console.log( cuadrado(4));

//console.warn  .table  .group

console.group('Triangulo');// no me funciona
console.groupEnd('Triangulo');*/
/*
console.group('Circle');
const radioCirculo = 3;
const diametrocirculo = radioCirculo * 2 ;
const Pi = 3.1415;

const periCircle = diametrocirculo* Pi ;

function circulo ( radio , Pi){
    return {
        perimetro: 2*radio * Pi,
        area: radio * radio * Pi ,
    }
}
console.log(circulo( 50, 3.1416));
console.log (periCircle);
 
// math 
 
 function circ (radio){
    return{
        perimetro: radio * 2* Math.PI,
        area: Math.pow(radio, 2)* Math.PI

 }}


 console.log(circ(500))





console.groupEnd('Circle')*/
//altura triangulo


