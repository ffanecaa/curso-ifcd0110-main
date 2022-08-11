/*
const fecha1 = new Date('03/25/2015').getTime()

const fecha2 = new Date('03/25/2022').getTime()




let diferncia = fecha1 - fecha2;

let diferneciaDias = diferncia/1000/3600/24

alert(diferneciaDias)

*/// asi lo positivizamos 
let fecha1 = new Date('03/25/2015').getTime()

let fecha2 = new Date('03/25/2022').getTime()
 

if(fecha1 < fecha2){
    let fecha3 =fecha1
    fecha1= fecha2
    fecha2 =fecha3
} 
let diferncia = fecha1 - fecha2;

let diferneciaAnos = Math.floor(diferncia/1000/3600/24)// dias
let anos= Math.floor(diferneciaAnos/365) //2557  dias 
//alert(diferneciaD.
let redondeo = diferneciaAnos%365//250 no llega al año
let meses = anos/30 // 7 años
 
// 7 meses cin 31  4 con 30 y 1 con 28/29

 let sobra = anos%30  //

console.log(diferncia)
console.log(diferneciaAnos) //2557
console.log(redondeo)//2
console.log(anos)//7


