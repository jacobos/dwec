<?php
$conexion = mysqli_connect("localhost","xavi","xavi1234","ProyectoPHP");
if(mysqli_connect_errno()){
    echo "No se puede conectar a la base de datos: ".mysqli_connect_error();
}
$us = $_POST['us'];
$cont = $_POST['cont'];
$email = utf8_decode($_POST['email']);
$sql2 = "INSERT INTO Usuarios (Usuario,Pass,Email) VALUES ('".$us."','".$cont."','".$email."')";

$consulta = mysqli_query($conexion,$sql2);




?>