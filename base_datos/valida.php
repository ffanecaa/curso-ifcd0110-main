<?php
$nombre = htmlspecialchars($_POST['name']); // variable propia de php  para que no injecten codigo
$apellido = $_POST['apellido'];
$Email = $_POST['email'];
$direccion = $_POST['direccion'];
$telefono = $_POST['tlf'];
$edad = $_POST['age'];
$contrasinal = $_POST['contrasinal'];
$recontrasinal = $_POST['recontrasinal'];

$fecha = date('j-m-y');// envia fecha del dia 

                                // punto antes y despues para q concatene  // hueco entre comillas generar espacio 
echo "los datos recibidos son:" .$nombre." " .$apellido." <br>".$Email." ".$direccion." " .$telefono." ".$edad."<br> ".$contrasinal." " .$recontrasinal;
echo "<br>".$fecha;
// vamos generar un archivo de texto no para tabla
$archivo ="datosformulario.txt";// variable nombre archivo

$creofichero = fopen ($archivo , "a"); // creamos funcion  pare que abra la fila con el nombre del archivo y la a es que vaya engadindo al final
fwrite($creofichero, $Nombre."-" .$apellido. "-" .$Email. "-" .$edad."-" .$telefono."-" .$direccion."-" .$contrasinal."-" .$fecha. "\n"); //escribe en el fichero

fclose($file);




?>