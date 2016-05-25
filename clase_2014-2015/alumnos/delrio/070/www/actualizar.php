<?php
    header("content-type: application/json");

	$con=mysqli_connect("localhost","proyectoJacob_","admin","proyectoJacob_") or die('{"devuelve": "Error en conexion a la DB"}');

	$fecha_update = $_GET["fecha"];    
	$hora_update = $_GET["hora"];
	$nombre_update = $_GET["nombre"];
	$apellido_update = $_GET["apellidos"];
	$dni = $_GET["dni"];
	//$tratamiento = $_GET["tratamiento"];




    mysqli_query($con,"UPDATE Cliente SET Nombre='".$nombre_update."',Apellido='".$apellido_update."' WHERE DNI ='".$dni."'");

    mysqli_query($con,"UPDATE `Reserva` SET `Fecha`='".$fecha_update."',`Hora`='".$hora_update."' WHERE `Id_cliente` ='".$dni."'");



    echo $_GET['callback']. '('. json_encode($back) . ')';

?>