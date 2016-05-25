<?php 
include('conexion.php');

$pagado = $_POST['pagados'];
$factura = $_POST['facturas'];

if($pagado == "Sí"){
	$pagado=1;
}else{
	$pagado=0;
}


if($factura == "Sí"){
	$factura=1;
}else{
	$factura=0;
}

$usuario = mysqli_query($conexion,"select cod_usuario from usuarios where nombre='".$_POST['usuarios']."'");
$user = mysqli_fetch_array($usuario);

$cliente = mysqli_query($conexion,"select cod_cliente from clientes where nombre='".$_POST['clientes']."'");
$cli = mysqli_fetch_array($cliente);

mysqli_query($conexion,"INSERT INTO ventas (usuario, pedido, cliente, fecha_entrega, encargo, factura,
 precio_final ,pagado)VALUES ('".$user[0]."', '".$_POST['pedidos']."', '".$cli[0]."',
  '".$_POST['fechas']."', '".$_POST['encargos']."' , '".$factura."' , '".$_POST['precios']."' , 
  '".$pagado ."')") ;
	

 ?>
