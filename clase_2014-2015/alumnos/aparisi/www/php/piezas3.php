<?php
    $ref=$_GET["variable1"];
    
    include('conexion.php');
   mysqli_query($conexion,"DELETE FROM piezas WHERE referencia='".$ref."';");

    echo $_GET['callback']. '('. json_encode("correcto") . ')';

?>