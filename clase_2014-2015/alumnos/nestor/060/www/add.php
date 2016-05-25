<?php

header('Content-Type: application/javascript');  
header('Access-Control-Allow-Origin: *');

	$con=mysqli_connect("85.214.132.62","nlopez_onsen","nlopez_onsen","nlopez_onsen") or die('{"devuelve": "Error en conexion a la DB"}');

    
    $name = $_GET["name"];
    $family = $_GET["family"];
    $material = $_GET["material"];
    $description = $_GET["description"];
    $image = $_GET["image"];

	//the usuario table should exist in your database
	$result = mysqli_query($con,"INSERT INTO instruments (`name`, `family`, `material`, `description`, `img`) VALUES ('$name', '$family', '$material', '$description', '$image');");

    echo $_GET['callback']. '('. json_encode("nice") . ')';
//echo "Instrument added";


?>
