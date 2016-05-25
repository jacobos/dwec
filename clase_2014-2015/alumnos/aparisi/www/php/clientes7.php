<?php
$dnin=$_GET["dni"];
$nom=$_GET["nombre"];
$ape=$_GET["apellidos"];
$dir=$_GET["direccion"];
$cod=$_GET["codigopostal"];
$tel=$_GET["telefono"];
$img=$_GET["imagen"];
include('conexion.php');
mysqli_query($conexion,"INSERT INTO clientes VALUES ('".$dnin."','".$nom."','".$ape."','".$dir."',".$cod.",".$tel.",'".$img."');");

$consulta1=mysqli_query($conexion, "SELECT * FROM clientes where dni='".$dnin."';");
while($fila1=mysqli_fetch_array($consulta1)){ 
$obj['dni'] = $fila1[ 'dni'];
$obj['nombre'] = $fila1[ 'nombre'];
$obj['apellidos'] = $fila1[ 'apellidos'];
$obj['direccion'] = $fila1[ 'direccion'];
$obj['codigopostal'] = $fila1[ 'codigopostal'];
$obj['telefono'] = $fila1[ 'telefono'];
$obj['imagen'] =$fila1[ 'imagen']; 
$array[] = $obj;      
}
echo $_GET['callback']. '('. json_encode($array) . ')';
?>