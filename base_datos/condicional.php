<?php

$variable1 = 25;
$variable2 = 45;
$varaible3 = 'hola';

if ( $variable1 < 18 ){
    echo "no puedes entrar";
    $varaible3 = "usuario";
    echo $varaible3;
} else if ($variable1 > 67){
    $varaible3 = "usuario";
    echo "jubilado". " ". $varaible3; 
} else {
    echo "bienvenido". " ";
}




//anidados 
if($varaible3 == "hola"){
    if($variable1 = 85){

        echo "todo correcto";
     }
}
// swith case si hay muchos anidades es mejor


?>