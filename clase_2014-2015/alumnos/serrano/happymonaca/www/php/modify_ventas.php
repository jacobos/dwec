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

mysqli_query($conexion,"UPDATE `ventas` SET `usuario`='" .$user[0]. "',`pedido`='" .$_POST['pedidos']. "',`cliente`='" .$cli[0]. "',`fecha_entrega`='" .$_POST['fechas']. "',`encargo`='" .$_POST['encargos']. "',`factura`='" .$factura. "',`precio_final`='" .$_POST['precios']. "',`pagado`='" .$pagado. "'WHERE cod_venta=".$_POST['cod'] );

 ?>

