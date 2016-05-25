<?php
    header("content-type: application/json");

	$con=mysqli_connect("mysql.nixiweb.com","u465892929_pro","pedro8003","u465892929_pro") or die('{"devuelve": "Error en conexion a lab      DB"}');
    
$nombre = $_GET["nom"];
$apellido = $_GET["apell"];
$fijo = $_GET["tel"];
$movil = $_GET["mov"];
$direccion = $_GET["dire"];
$mail = $_GET["mail"];



    //the usuario table should exist in your database
mysqli_query($con,"INSERT INTO `persona`(`nombre`, `apellido`, `fijo`, `movil`, `direccion`, `mail`) VALUES ('".$nombre."','".$apellido."','".$fijo."','".$movil."','".$direccion."','".$mail."')");
      //Paran era cuando utilizabamos un input, y buscaremos la ciudad segun lo que hayamos escrito en el input y guardado en la variable ese valor

 
$nombre2 = $_GET["nom2"];




    //the usuario table should exist in your database
mysqli_query($con,"DELETE FROM `persona` WHERE `nombre` = '$nombre2'");

	



    
    echo $_GET['callback2']. '('. json_encode($back) . ')';

?>
 