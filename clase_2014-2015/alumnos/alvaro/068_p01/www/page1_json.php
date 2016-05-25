<?php

    include('conexion.php');
    
    $titulo = $_GET['info'];
    $pais = $_GET['info1'];
    $vista = $_GET['info2'];

    $anadir_peli="INSERT INTO `peliculas`(`titulo`, `pais`, `vista`) VALUES ('$titulo','$pais','$vista')";
    $eje_peli=mysqli_query($conexion, $anadir_peli);


?>