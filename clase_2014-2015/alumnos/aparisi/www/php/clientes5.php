<?php
    $dnia=$_GET["dnia"];
    $dnin=$_GET["dnin"];
    $nom=$_GET["nombre"];
    $ape=$_GET["apellidos"];
    $dir=$_GET["direccion"];
    $cod=$_GET["codigopostal"];
    $tel=$_GET["telefono"];
    $img=$_GET["imagen"];
    include('conexion.php');
    mysqli_query($conexion,"UPDATE clientes SET dni='".$dnin."',nombre='".$nom."',apellidos='".$ape."',direccion='".$dir."',codigopostal=".$cod.",telefono=".$tel.",imagen='".$img."' WHERE dni='".$dnia."';");
    mysqli_query($conexion,"UPDATE coches SET dni_cliente='".$dnin."' WHERE dni_cliente='".$dnia."';");

    echo $_GET['callback']. '('. json_encode("correcto") . ')';
?>