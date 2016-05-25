<?php

    header("content-type: application/json");

	$con=mysqli_connect("localhost","xalfonso_jacobo","xavi1234","xalfonso_jacobo") or die('{"devuelve": "Error en conexion a la DB"}');

$email= utf8_decode($_GET['email']);

	//the usuario table should exist in your database
	$result = mysqli_query($con,"SELECT Email, Usuario,Imagen, Nombre, Apellido  FROM Usuario where Email='".$email."'");

while($row = mysqli_fetch_array($result))
	{
	
            //we use utf8_encode for special characters in the database (avoid errors with JSON data)
            $array['Usuario'] =utf8_encode($row[1]);
            $array['Email'] = utf8_encode($row[0]);
            $array['Nombre'] = utf8_encode($row[3]);
            $array['Apellido'] = utf8_encode($row[4]);
            $array['Imagen'] = utf8_encode("images/".$row[2]);
                     
            $back[] = $array;
   
	}
echo $_GET['callback']. '('. json_encode($back) . ')';

?>