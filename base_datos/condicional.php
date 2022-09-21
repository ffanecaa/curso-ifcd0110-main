<?php

$variable1 = 5;
$variable2 = 45;
$variable3 = 'hola';

if ( $variable1 < 18 ){
    echo "no puedes entrar";
    $variable3 = "usuario";
    echo $variable3."<br>";
} else if ($variable1 > 67){
    $variable3 = "usuario";
    echo "jubilado". " ". $variable3; 
} else {
    echo "bienvenido". "<br> ";
}




//anidados 
if($variable3 == "hola"){
    if($variable1 == 85){

        echo "todo correcto <br>";
     }
}


 if( ($variable3 == "hola") AND ( $variable1 == 85)){
    echo "todo correcto <br>";
}
// swith case si hay muchos anidades es mejor

switch($variable1 ){
    case 1: echo "lunes ";
      break;
    case 2: echo "martes ";
      break; 
    case 3: echo "miercoles ";
      break;
      case 4: echo "jueves";
      break;
      case 5: echo "viernes ";
      break;
      default: echo "no es laborable";
      break;
}

$i= 1; // los contadores son 
 
while ($i<=10){
  echo " <br>vuelta numero $i <br>";
  $i++;
}
 
// no solo se usan con numeros 
while (($variable3 == "usuario") or($variable3 == "Usuario" )){
  echo "hola com estas";
  $variable3="adios";
}
  //while booleana
  $var_bool =true;
  while($var_bool){
    echo"lo que sea";
    $var_bool=false;
  }
  $k=16;
  do{
    echo "entra por lo menos 1 vez"
  }

// validar 


for($i = 0 ; $i<=10 ; $i++){
  echo "<br> dando voltas $i <br>";
}
// sumamos el valor 2
for($i = 0 ; $i<=10 ; $i+=2){
  echo "<br> dando voltas $i";
}






?>