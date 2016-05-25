<?php
    header("content-type: application/json");

	$con=mysqli_connect("localhost","proyectoJacob_","admin","proyectoJacob_") or die('{"devuelve": "Error en conexion a la DB"}');

$fecha = $_GET["fecha"];    
$hora = $_GET["hora"];
$nombre = $_GET["nombre"];
$apellidos = $_GET["apellidos"];
$dni = $_GET["dni"];
$tratamiento = $_GET["tratamiento"];



mysqli_query($con,"INSERT INTO `Cliente`(`Nombre`, `Apellido`, `DNI`) VALUES ('".$nombre."','".$apellidos."','".$dni."')");
mysqli_query($con,"INSERT INTO `Reserva`(`Fecha`, `Hora`, `Id_tratamiento`, `Id_cliente`) VALUES ('".$fecha."','".$hora."','$tratamiento','".$dni."')"); 


    echo $_GET['callback']. '('. json_encode($back) . ')';

?>
