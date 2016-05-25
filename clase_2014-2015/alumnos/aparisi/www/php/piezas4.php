<?php
$ref=$_GET["referencia"];
$des=$_GET["descripcion"];
$pre=$_GET["precio"];
$sto=$_GET["stock"];
$img=$_GET["imagen"];
include('conexion.php');
mysqli_query($conexion,"INSERT INTO piezas VALUES ('".$ref."','".$des."',".$pre.",'".$sto."','".$img."');");

$consulta1=mysqli_query($conexion, "SELECT * FROM piezas where referencia='".$ref."';");
while($fila1=mysqli_fetch_array($consulta1)){ 
$obj['referencia'] = $fila1[ 'referencia'];
$obj['descripcion'] = $fila1[ 'descripcion'];
$obj['precio'] = $fila1[ 'precio'];
$obj['stock'] = $fila1[ 'stock'];
$obj['imagen'] = $fila1[ 'imagen'];
$array[] = $obj;      
          }
//echo json_enconde($array);

echo $_GET['callback']. '('. json_encode($array) . ')';
?>