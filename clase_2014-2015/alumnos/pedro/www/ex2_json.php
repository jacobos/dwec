					<?php 
$con=mysqli_connect("mysql.nixiweb.com","u465892929_pro","pedro8003","u465892929_pro") or die('{"devuelve": "Error en conexion a lab      DB"}');

$i1 = $_POST['i1'];
$i2 = $_POST['i2'];
$i3 = $_POST['i3'];
$i4 = $_POST['i4'];
$i5 = $_POST['i5'];
$i6 = $_POST['i6'];




$sql =  "INSERT INTO `persona`(`nombre`, `apellido`, `fijo`, `movil`, `direccion`, `mail`) VALUES ('$i1','$i2','$i3','$i4','$i5','$i6')";
           mysqli_query($con, $sql); 
include 'index.php';









?>	
