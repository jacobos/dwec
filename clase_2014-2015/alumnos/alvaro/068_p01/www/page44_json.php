<?php

    include('conexion.php');

    $id = $_GET['id'];

    $consulta_update= "UPDATE `peliculas` SET `vista`='si' WHERE id='$id'";
    $ejecuta_consulta = mysqli_query($conexion, $consulta_update);

?>