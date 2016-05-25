<?php

    $conexion = mysqli_connect("localhost", "cinemonaca", "Alvaro1", "cinemonaca");
    
        if(mysqli_connect_errno()){
            echo "no se pudo conectar la base de datos:".mysqli_connect_error();
        }
?>

