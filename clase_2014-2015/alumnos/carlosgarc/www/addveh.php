<?php
    header("content-type: application/json");

	$con=mysqli_connect("localhost","carlos93","Simpsons22","proyecto4_php") or die('{"devuelve": "Error en conexion a la DB"}');

    $Matricula = $_GET["mat"];
    $Marca = $_GET["mar"];
    $Modelo = $_GET["mod"];
    $Ciudad = $_GET["ciu"];
    $Precio_diario = $_GET["pre"];

    mysqli_query($con,"INSERT INTO `Flota`(`Matricula`, `Marca`, `Modelo`, `Ciudad`, `Precio_diario`) VALUES ('".$Matricula."','".$Marca."','".$Modelo."','".$Ciudad."','".$Precio_diario."')");

?>
