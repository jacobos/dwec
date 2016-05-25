<?php 
	include('conexion.php');

        $clientSelect =  mysqli_query($conexion,"SELECT cod_cliente FROM pedidos where cod_pedido=".$_POST['codCiemPedi']);
        $cod_client = mysqli_fetch_array($clientSelect);

        $nomClient =  mysqli_query($conexion,"SELECT nombre  FROM clientes where cod_cliente=".$cod_client[0]);
        $name = mysqli_fetch_array($nomClient);
        $limpio = str_replace($name[0]);
       
       
        

        echo json_encode($name[0]);


?>

