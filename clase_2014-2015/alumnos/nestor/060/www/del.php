<?php
header('Access-Control-Allow-Origin: *');  
	$con=mysqli_connect("85.214.132.62","nlopez_onsen","nlopez_onsen","nlopez_onsen") or die('{"devuelve": "Error en conexion a la DB"}');

    
    $param = $_GET["info"];

	//the usuario table should exist in your database
	$result = mysqli_query($con,"DELETE FROM instruments WHERE name like '$param'");

?>
