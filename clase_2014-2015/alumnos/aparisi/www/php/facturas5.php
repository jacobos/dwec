<?php
    $fac=$_GET["variable1"];
    
    include('conexion.php');
   mysqli_query($conexion,"DELETE FROM facturas WHERE numfactura='".$fac."';");

    echo $_GET['callback']. '('. json_encode("correcto") . ')';

?>