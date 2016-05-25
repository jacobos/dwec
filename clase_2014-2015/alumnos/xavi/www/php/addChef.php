<?php
 header("content-type: application/json");

	$con=mysqli_connect("85.214.132.62","xalfonso_jacobo","xavi1234","xalfonso_jacobo") or die('{"devuelve": "Error en conexion a la DB"}');


$name= $_GET['name'];
$desc= $_GET['desc'];
$date= $_GET['date'];
$img= $_GET['img'];
$result = mysqli_query($con,"insert into Chefs(Nombre,Descripcion,Lugar_nacimiento,Imagen) values('$name','$desc','$date', '$img')");
    


?>