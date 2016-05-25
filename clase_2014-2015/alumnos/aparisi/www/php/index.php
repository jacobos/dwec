<?php
$nombre= $_GET['variable1'];
$contrasena= $_GET['variable2'];
include('conexion.php');
$consulta=mysqli_query($conexion,"SELECT password from usuarios where usuario='$nombre'"); 
$fila=mysqli_fetch_array($consulta);
if($contrasena==$fila['password']){
			$conectado="conectado";
    session_start();
}else{
    $conectado="no conectado";
}
echo $_GET['callback']. '('. json_encode($conectado) . ')';
?>