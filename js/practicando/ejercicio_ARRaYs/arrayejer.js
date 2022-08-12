/*

crea3 arrays
1 con 5 numeros
2 vacios uno pares y otro impares
multiplica los numeros del primer array por un numero
    aleatorioentre1 y 10
    el resultado se guarda enlos otros arrays
    imprime formato 2*3=6
    el array pares e impares
    


    */



    let numeros=[2,3,8,9,7];
    let pares=[ ];
    let impares=[ ];
    let muls=[]
  let y;
    let x= prompt('indica un numero menor 10')
    for(let numero of numeros){

      if( (numero*x)%2==0){
        pares.push((numero*x))
      }else{
        impares.push((numero*x))
      }

    }

    document.getElementById('ele').innerHTML=`si multiplicamos ${numeros} por el numero que indicaste ${x} 
     resultan estos numeros ${pares} que son  pares y estos  ${impares}  que son impares`

     for (let num of numeros){
    document.getElementById('ele').innerHTML+= `multiplicamos `
     }

     console.log( )

    
     

    /*
    //    muls.push(numero*x)
   // for(mul of )


  if(y%2==0){
    pares.push(y)
  }else{
    impares.push(y)
  }
    }

    console.log(y)
   // document.getElementById('ele').innerHTML=`los numeros ${pares}son pares y los ${impares}son impares`
 */