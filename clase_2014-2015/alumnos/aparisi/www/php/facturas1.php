<?php
header("content-type: application/json");
include('conexion.php'); 
$consulta1=mysqli_query($conexion, "SELECT * FROM facturas;");
while($fila1=mysqli_fetch_array($consulta1)){ 
$obj['numfactura'] = $fila1[ 'numfactura'];
$obj['dni_cliente'] = $fila1[ 'dni_cliente'];
$obj['matricula'] = $fila1[ 'matricula'];
$obj['numreparacion'] = $fila1[ 'numreparacion'];
$obj['referencia'] = $fila1[ 'referencia'];
$obj['fecha'] = $fila1[ 'fecha'];
$obj['precio'] = $fila1[ 'preciototal'];
$array[] = $obj;      
          }
//echo json_enconde($array);

echo $_GET['callback']. '('. json_encode($array) . ')';
?>