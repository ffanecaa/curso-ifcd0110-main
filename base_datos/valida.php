<?php
$nombre = htmlspecialchars($_POST['name']); // variable propia de php  para que no injecten codigo
$apellido = $_POST['apellido'];
$Email = $_POST['email'];
$direccion = $_POST['direccion'];
$telefono = $_POST['tlf'];
$edad = $_POST['age'];
$contrasinal = $_POST['contrasinal'];
$recontrasinal = $_POST['recontrasinal'];

                                // punto antes y despues para q concatene  // hueco entre comillas generar espacio 
echo "los datos recibidos son:" .$nombre." " .$apellido." <br>".$Email." ".$direccion." " .$telefono." ".$edad."<br> ".$contrasinal." " .$recontrasinal;

?>