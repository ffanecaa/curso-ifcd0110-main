<?php
if (empty($_POST)){
   header ("location:index.html"); // genera nueva locvacion 
   die();  // que no este vacia  el formulario 
} else{
 if(empty($_POST['name'])){
   echo "campo nombre vacio";
   die();
 }else{
$nombre = htmlspecialchars($_POST['name']);} // variable propia de php  para que no inyecten codigo
$apellido = $_POST['apellido'];
$Email = $_POST['email'];
$direccion = $_POST['direccion'];
$telefono = $_POST['tlf'];
$edad = $_POST['age'];
$contrasinal = $_POST['contrasinal'];
$recontrasinal = $_POST['recontrasinal'];

//verificar contraseñas son iguales
if($contrasinal != $recontrasinal){
    echo "las contraseñas no coinciden";
    header ("location:index.html");
    die();

}


$fecha = date('j-m-y');// envia fecha del dia 

   /*                             // punto antes y despues para q concatene  // hueco entre comillas generar espacio 
echo "los datos recibidos son:" .$nombre." " .$apellido." <br>".$Email." ".$direccion." " .$telefono." ".$edad."<br> ".$contrasinal." " .$recontrasinal;
echo "<br>".$fecha;
// vamos generar un archivo de texto no para tabla
$archivo ="datosformulario.txt";// variable nombre archivo

$creofichero = fopen ($archivo , "a"); // creamos funcion  pare que abra la fila con el nombre del archivo y la a es que vaya engadindo al final
fwrite($creofichero, $nombre."-" .$apellido. "-" .$Email. "-" .$edad."-" .$telefono."-" .$direccion."-" .$contrasinal."-" .$fecha. "\n"); //escribe en el fichero

fclose($creofichero);
*/
// conectar base de datos bd
// creamos 4 variable 
$nombreServidor = "localhost";
$nombreUsuario = "Admin";
$pwd = "12345";
$Basededatos = "agenda";
//creamos la conexion : una  variable mew mysqli con las variable anteriores en el orden exacto.
$conexionn = new mysqli($nombreServidor,$nombreUsuario,$pwd,$Basededatos);

// probamos conexion 
 if($conexionn ->connect_error){
    echo "error en la conexion";

 } else {
    echo "conexion ok";
 }

$sql = "INSERT INTO `usuarios`(`ID`, `NOMBRE`, `APELLIDOS`, `EMAIL`, `TELEFONO`, `DIRECCION`, `EDAD`, `CONTRASINAL`, `FECHA_ALTA`) VALUES 
  (' ','$nombre', '$apellido', '$Email','$telefono','$direccion','$edad','$contrasinal','$fecha')";

// sentencia que hace ejecutar  es $conexionn -> query ($sql)

 if ($conexionn ->query($sql) ===TRUE){  //query() ejecuta una sentencia SQL en una única llamada a función, devolviendo el conjunto de resultados (si los hay) que devuelve la sentencia como un objeto PDOStatement.
    echo "datos guardados";
   
 } else{
    echo "nooo";
 }
}
?>