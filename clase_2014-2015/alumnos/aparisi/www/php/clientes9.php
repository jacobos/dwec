<?php
$buscar=$_GET["buscar"];
$por=$_GET["por"];
include('conexion.php');
$consulta1=mysqli_query($conexion, "SELECT * FROM clientes where ".$buscar."='".$por."';");
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