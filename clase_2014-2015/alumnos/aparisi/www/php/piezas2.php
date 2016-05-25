<?php
    $refa=$_GET["referenciaa"];
    $refn=$_GET["referencian"];
    $des=$_GET["descripcion"];
    $pre=$_GET["precio"];
    $sto=$_GET["stock"];
    $img=$_GET["imagen"];
    include('conexion.php');
    mysqli_query($conexion,"UPDATE piezas SET referencia='".$refn."',descripcion='".$des."',precio=".$pre.",stock='".$sto."',imagen='".$img."' WHERE referencia='".$refa."';");
mysqli_query($conexion,"UPDATE detalles SET referencia='".$refn."' WHERE referencia='".$refa."';");

    echo $_GET['callback']. '('. json_encode("correcto") . ')';
?>