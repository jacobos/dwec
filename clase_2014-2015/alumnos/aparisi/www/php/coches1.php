<?php
header("content-type: application/json");
include('conexion.php'); 
$consulta1=mysqli_query($conexion, "SELECT * FROM coches;");
while($fila1=mysqli_fetch_array($consulta1)){ 
$obj['matricula'] = $fila1[ 'matricula'];
$obj['dni_cliente'] = $fila1[ 'dni_cliente'];
$obj['marca'] = $fila1[ 'marca'];
$obj['modelo'] = $fila1[ 'modelo'];
$obj['color'] = $fila1[ 'color'];
$obj['kilometros'] = $fila1[ 'km'];
$array[] = $obj;      
          }
//echo json_enconde($array);

echo $_GET['callback']. '('. json_encode($array) . ')';
?>