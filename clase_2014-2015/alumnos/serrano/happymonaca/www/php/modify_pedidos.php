<?php 
include('conexion.php');

$usuario = mysqli_query($conexion,"select cod_usuario from usuarios where nombre='".$_POST['usuario']."'");
$user = mysqli_fetch_array($usuario);

$cliente = mysqli_query($conexion,"select cod_cliente from clientes where nombre='".$_POST['clientes']."'");
$cli = mysqli_fetch_array($cliente);
 
// mysqli_query($conexion,"INSERT INTO pedidos (cod_usuario, cod_cliente, fecha, encargo, precio)VALUES ('".$user[0]."', '".$cli[0]."', '".$_POST['fecha']."','".$_POST['encargo']."', '".$_POST['precio']."')") ;

// ____________________________________________________________________-

mysqli_query($conexion,"UPDATE pedidos SET cod_usuario='" .$user[0]. "',cod_cliente='" .$cli[0]. "',fecha='" .$_POST['fechas']. "',encargo='" .$_POST['encargos']. "',precio='" .$_POST['precios']. "' WHERE cod_pedido=".$_POST['cod']);

 ?>
