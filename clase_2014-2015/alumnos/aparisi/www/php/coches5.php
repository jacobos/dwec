<?php
    $matricula=$_GET["variable1"];
    
    include('conexion.php');
    mysqli_query($conexion,"DELETE FROM coches WHERE matricula='".$matricula."';");

    echo $_GET['callback']. '('. json_encode("correcto") . ')';

?>