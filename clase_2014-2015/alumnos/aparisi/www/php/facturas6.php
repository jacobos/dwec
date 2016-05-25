<?php
    $facn=$_GET["numfactura"];
    $dni=$_GET["dni_cliente"];
    $mat=$_GET["matricula"];
    $rep=$_GET["numreparacion"];
    $ref=$_GET["referencia"];
    $fec=$_GET["fecha"];
    $pre=$_GET["precio"];
include('conexion.php');
mysqli_query($conexion,"INSERT INTO facturas VALUES ('".$facn."','".$dni."','".$mat."','".$rep."','".$ref."','".$fec."','".$pre."');");

$consulta1=mysqli_query($conexion, "SELECT * FROM facturas where numfactura='".$facn."';");
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