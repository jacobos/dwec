<?php
    $num=$_GET["variable1"];
    
    include('conexion.php');
   mysqli_query($conexion,"DELETE FROM reparaciones WHERE numreparacion='".$num."';");

    echo $_GET['callback']. '('. json_encode("correcto") . ')';

?>