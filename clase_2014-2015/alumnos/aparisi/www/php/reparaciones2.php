<?php
$matricula=$_GET["variable1"];
include('conexion.php'); 
$consulta1=mysqli_query($conexion, "select dni_cliente as dni from coches join reparaciones on coches.matricula=reparaciones.matricula where reparaciones.matricula='$matricula'");
while($fila1=mysqli_fetch_array($consulta1)){ 
$cuenta= $fila1['dni']; 
}
//echo json_enconde($array);

echo $_GET['callback']. '('. json_encode($cuenta) . ')';
?>