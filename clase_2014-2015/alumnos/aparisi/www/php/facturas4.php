<?php
    $faca=$_GET["numfacturaa"];
    $facn=$_GET["numfacturan"];
    $dni=$_GET["dni_cliente"];
    $mat=$_GET["matricula"];
    $rep=$_GET["numreparacion"];
    $ref=$_GET["referencia"];
    $fec=$_GET["fecha"];
    $pre=$_GET["precio"];
    include('conexion.php');
    mysqli_query($conexion,"UPDATE facturas SET numfactura='".$facn."',dni_cliente='".$dni."',matricula='".$mat."',numreparacion='".$rep."',referencia='".$ref."',fecha='".$fec."',preciototal='".$pre."' WHERE numfactura='".$faca."';");

    echo $_GET['callback']. '('. json_encode("correcto") . ')';
?>