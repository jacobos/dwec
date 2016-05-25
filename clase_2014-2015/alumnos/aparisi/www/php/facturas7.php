<?php include( 'conexion.php'); 
$consulta2=mysqli_query($conexion, "SHOW COLUMNS FROM facturas"); while($fila2=mysqli_fetch_array($consulta2)){ 
    $obj['resultado']= $fila2[0]; 
$array[] = $obj;   
}

echo $_GET['callback']. '('. json_encode($array) . ')';
?>