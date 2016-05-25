<?php
$dni=$_GET["variable1"];
include('conexion.php'); 
$consulta1=mysqli_query($conexion, "select count(*) as cuenta from facturas join clientes on facturas.dni_cliente=clientes.dni where clientes.dni='$dni'");
while($fila1=mysqli_fetch_array($consulta1)){ 
$cuenta= $fila1['cuenta']; 
}
//echo json_enconde($array);

echo $_GET['callback']. '('. json_encode($cuenta) . ')';
?>