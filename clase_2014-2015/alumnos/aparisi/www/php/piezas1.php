<?php
header("content-type: application/json");
include('conexion.php'); 
$consulta1=mysqli_query($conexion, "SELECT * FROM piezas;");
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