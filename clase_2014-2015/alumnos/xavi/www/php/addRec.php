<?php
 header("content-type: application/json");

	$con=mysqli_connect("85.214.132.62","xalfonso_jacobo","xavi1234","xalfonso_jacobo") or die('{"devuelve": "Error en conexion a la DB"}');




$name= $_GET['name'];
$desc= $_GET['desc'];
$chef= $_GET['chef'];
$img= $_GET['img'];
$result = mysqli_query($con,"insert into Recetas(Nombre,Descripcion,Imagen,Cod_chef) values('$name','$desc','$img',$chef)");



?>