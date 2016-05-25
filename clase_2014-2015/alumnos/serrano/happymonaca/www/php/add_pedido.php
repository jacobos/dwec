<?php 
include('conexion.php');

$usuario = mysqli_query($conexion,"select cod_usuario from usuarios where nombre='".$_GET['usuario']."'");
$user = mysqli_fetch_array($usuario);

$cliente = mysqli_query($conexion,"select cod_cliente from clientes where nombre='".$_GET['cliente']."'");
$cli = mysqli_fetch_array($cliente);
 
mysqli_query($conexion,"INSERT INTO pedidos (cod_usuario, cod_cliente, fecha, encargo, precio)VALUES ('".$user[0]."', '".$cli[0]."', '".$_POST['fecha']."','".$_POST['encargo']."', '".$_POST['precio']."')") ;
 ?>
