<?php
//traer datos a fichero 
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

 // sentencia para llar sql

$sql = "SELECT * from  `usuarios` ";
echo "<table border=1>";
if ($resultado= $conexionn -> query ($sql)){
    while($row = $resultado -> fetch_assoc()){
        $ID =$row['ID']; // $ROW E FUNCION DE SQL PARA GENRAR LOS COLUMAS 
        $nombre = $row['NOMBRE']; 
        $apellido =$row['APELLIDOS'];
        $Email= $row['EMAIL']; 
        $telefono= $row['TELEFONO']; 
        $direccion= $row['DIRECCION']; 
        $edad= $row['EDAD']; 
        $contrasinal= $row['CONTRASINAL']; 
        $fecha= $row['FECHA_ALTA']; 

        echo "<tr>
              <td> $nombre </td>
              <td>$apellido</td>
              <td>$Email</td>
              <td>$telefono</td>
              <td>$direccion</td>
              <td>$edad</td>
              <td>$contrasinal</td>
              <td>$fecha</td> ";
            
    }
    $resultado -> free ();
    echo "</table>";
}


 ?>