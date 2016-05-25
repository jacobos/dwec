<?php
    header("content-type: application/json");

    $con=mysqli_connect("localhost","juanfrantomas","juanfran13w.","onsjuanfran") or die('{"devuelve": "Error en conexion a la DB"}');
//include ('conexion.php');

$nombre = $_GET['nombre'];

$lugar = $_GET['lugar'];
$hora = $_GET['hora'];

$telefono = $_GET['telefono'];

	//the usuario table should exist in your database
	$result = mysqli_query($con,"INSERT INTO `onsjuanfran`.`alquileres` (`codigo`, `nombre`, `lugar`, `hora`, `telefono`) VALUES (NULL, '$nombre', '$lugar', '$hora', '$telefono')");
  //$result = mysqli_query($conexion,"SELECT * FROM maquinas");

?>
