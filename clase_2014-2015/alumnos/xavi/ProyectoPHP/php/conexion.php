<?php
$conexion = mysqli_connect("localhost","xavi","xavi1234","ProyectoPHP");
if(mysqli_connect_errno()){
    echo "No se puede conectar a la base de datos: ".mysqli_connect_error();
} 
    ?>