<?php
$matricula=$_GET["variable1"];
include('conexion.php'); 
$consulta1=mysqli_query($conexion, "select count(*) as cuenta from facturas join reparaciones on facturas.matricula=reparaciones.matricula where reparaciones.matricula='$matricula'");
while($fila1=mysqli_fetch_array($consulta1)){ 
$cuenta= $fila1['cuenta']; 
}
//echo json_enconde($array);

echo $_GET['callback']. '('. json_encode($cuenta) . ')';
?>