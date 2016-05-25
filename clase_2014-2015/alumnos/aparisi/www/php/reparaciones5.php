<?php
    $numa=$_GET["numreparaciona"];
    $numn=$_GET["numreparacionn"];
    $mat=$_GET["matricula"];
    $des=$_GET["descripcion"];
    $hor=$_GET["horas"];
    include('conexion.php');
    mysqli_query($conexion,"UPDATE reparaciones SET numreparacion='".$numn."',matricula='".$mat."',descripcion='".$des."',horas=".$hor." WHERE numreparacion='".$numa."';");
mysqli_query($conexion,"UPDATE detalles SET numreparacion='".$numn."' WHERE numreparacion='".$numa."';");

    echo $_GET['callback']. '('. json_encode("correcto") . ')';
?>