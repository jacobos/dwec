<?php
    header("content-type: application/json");

	$con=mysqli_connect("localhost","proyectoJacob_","admin","proyectoJacob_") or die('{"devuelve": "Error en conexion a la DB"}');

    $dni = $_GET["dni"];    

    mysqli_query($con,"DELETE FROM `Reserva` WHERE `Id_cliente`='".$dni."'");

?>

