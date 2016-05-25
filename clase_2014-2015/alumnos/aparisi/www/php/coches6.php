<?php
$matn=$_GET["matricula"];
$dni=$_GET["dni"];
$mar=$_GET["marca"];
$mod=$_GET["modelo"];
$col=$_GET["color"];
$km=$_GET["kilometros"];
include('conexion.php');
mysqli_query($conexion,"INSERT INTO coches VALUES ('".$matn."','".$dni."','".$mar."','".$mod."','".$col."',".$km.");");

$consulta1=mysqli_query($conexion, "SELECT * FROM coches where matricula='".$matn."';");
while($fila1=mysqli_fetch_array($consulta1)){ 
$obj['matricula'] = $fila1[ 'matricula'];
$obj['dni_cliente'] = $fila1[ 'dni_cliente'];
$obj['marca'] = $fila1[ 'marca'];
$obj['modelo'] = $fila1[ 'modelo'];
$obj['color'] = $fila1[ 'color'];
$obj['kilometros'] = $fila1[ 'km'];
$array[] = $obj; 
}
echo $_GET['callback']. '('. json_encode($array) . ')';
?>