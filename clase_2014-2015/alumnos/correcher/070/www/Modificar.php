<?php
    header("content-type: application/json");

	$con=mysqli_connect("localhost","Administrador","Skuldugery_7","jcorrecher_prom") or die('{"devuelve": "Error en conexion a lab      DB"}');



   

$nombre = $_GET["nombre"];
$ano = $_GET["ano"]; 
$genero = $_GET["genero"];
$duracion = $_GET["duracion"];
$codigo = $_GET["codigo"];

    //the usuario table should exist in your database
mysqli_query($con,"UPDATE Canciones SET nombre = '".$nombre."', ano = '".$ano."', genero = '".$genero."', duracion = '".$duracion."' WHERE codigo = '".$codigo."'");
      //Paran era cuando utilizabamos un input, y buscaremos la ciudad segun lo que hayamos escrito en el input y guardado en la variable ese valor




	//the usuario table should exist in your database
	$result = mysqli_query($con,"SELECT * FROM Canciones");
    $i = 0;
	while($row = mysqli_fetch_array($result))
	{
		if($i < 100)
        {
            //we use utf8_encode for special characters in the database (avoid errors with JSON data)
            $array['nombre'] = utf8_encode($row['nombre']);
            $array['ano'] = $row['ano'];
            $array['genero'] = utf8_encode($row['genero']);
            $array['duracion'] = utf8_encode($row['duracion']);
            $array['codigo'] = utf8_encode($row['codigo']);
            

            $i++;
            $back[] = $array;
        }
	}
 

    
    
    echo $_GET['callback3']. '('. json_encode($back) . ')';

?>
