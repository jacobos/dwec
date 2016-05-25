<?php
    $dni=$_GET["variable1"];
    
    include('conexion.php');
   mysqli_query($conexion,"DELETE FROM clientes WHERE dni='".$dni."';");

    echo $_GET['callback']. '('. json_encode("correcto") . ')';

?>