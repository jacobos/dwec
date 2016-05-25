<?php

    $var1 = $_POST['variable1'];
    $var2 = $_POST['variable2'];
	error_reporting(E_ERROR | E_PARSE);
	$con=mysqli_connect("localhost",$var1,$var2,"solvam") or die('{"devuelve": "Error en conexion a la DB"}');


	//the usuario table should exist in your database
	$result = mysqli_query($con,"SELECT * FROM usuario");
	$devuelve = "<table border=1>";

		$devuelve = $devuelve. "<tr><td> " . "Info" . "</td></tr>";
	while($row = mysqli_fetch_array($result))
	{
		// name and number are the columns you have in the people table
		$devuelve = $devuelve. "<tr><td> " . $row['info'] . "</td></tr>";
	}
	$devuelve = $devuelve."</table>";

    // Array with the answer
    $respuesta['devuelve'] = $devuelve;

   echo json_encode($respuesta); // we return it as an object

?>
