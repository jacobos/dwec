<?php
    $matriculaa=$_GET["matriculaa"];
    $matriculan=$_GET["matriculan"];
    $dnicliente=$_GET["dnicliente"];
    $marca=$_GET["marca"];
    $modelo=$_GET["modelo"];
    $color=$_GET["color"];
    $kilometros=$_GET["kilometros"];
    
    include('conexion.php');
    mysqli_query($conexion,"UPDATE coches SET matricula='".$matriculan."',dni_cliente='".$dnicliente."',marca='".$marca."',modelo='".$modelo."',color='".$color."',km=".$kilometros." WHERE matricula='".$matriculaa."';");
mysqli_query($conexion,"UPDATE reparaciones SET matricula='".$matriculan."' WHERE matricula='".$matriculaa."';");

    echo $_GET['callback']. '('. json_encode("correcto") . ')';
?>