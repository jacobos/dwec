<?php
    header("content-type: application/json");

	$con=mysqli_connect("localhost","juanfrantomas","juanfran13w.","onsjuanfran") or die('{"devuelve": "Error en conexion a la DB"}');
//include ('conexion.php');


	//the usuario table should exist in your database
	$result = mysqli_query($con,"SELECT * FROM alquileres");
  //$result = mysqli_query($conexion,"SELECT * FROM maquinas");


  while($row = mysqli_fetch_array($result))
	{
	          //we use utf8_encode for special characters in the database (avoid errors with JSON data)
            $array['nombre'] = utf8_encode($row['nombre']);
            $array['lugar'] = utf8_encode($row['lugar']);
            $array['hora'] = utf8_encode($row['hora']);

           $array['telefono']= utf8_encode($row['telefono']);


            $back[] = $array;
        }

        echo $_GET['callback']. '('. json_encode($back) . ')';
?>
