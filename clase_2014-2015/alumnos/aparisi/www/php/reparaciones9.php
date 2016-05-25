<?php
$buscar=$_GET["buscar"];
$por=$_GET["por"];
header("content-type: application/json");
include('conexion.php'); 
$consulta1=mysqli_query($conexion, "SELECT * FROM reparaciones where ".$buscar."='".$por."';");
while($fila1=mysqli_fetch_array($consulta1)){ 
$obj['numreparacion'] = $fila1[ 'numreparacion'];
$obj['matricula'] = $fila1[ 'matricula'];
$obj['descripcion'] = $fila1[ 'descripcion'];
$obj['horas'] = $fila1[ 'horas'];
$array[] = $obj;      
          }
//echo json_enconde($array);

echo $_GET['callback']. '('. json_encode($array) . ')';
?>