<?php
$num=$_GET["numreparacion"];
$mat=$_GET["matricula"];
$des=$_GET["descripcion"];
$hor=$_GET["horas"];
include('conexion.php');
mysqli_query($conexion,"INSERT INTO reparaciones VALUES ('".$num."','".$mat."','".$des."',".$hor.");");

$consulta1=mysqli_query($conexion, "SELECT * FROM reparaciones where numreparacion='".$num."';");
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