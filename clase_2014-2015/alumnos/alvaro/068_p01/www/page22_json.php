<?php

    include('conexion.php');

    $peli = $_GET['peliborrar'];

    $consulta_borrar = "DELETE FROM `peliculas` WHERE `titulo`='$peli'";
    $ejecuta_consulta = mysqli_query($conexion, $consulta_borrar);

?>