<?php
    header("content-type: application/json");

	$con=mysqli_connect("mysql.nixiweb.com","u465892929_pro","pedro8003","u465892929_pro") or die('{"devuelve": "Error en conexion a lab      DB"}');
    
$nombre = $_GET["nom"];




    //the usuario table should exist in your database
mysqli_query($con,"DELETE FROM `u465892929_pro`.`persona` WHERE `persona`.`nombre` = $nombre");

 


	



    
    echo $_GET['callback3']. '('. json_encode($back) . ')';

?>
 