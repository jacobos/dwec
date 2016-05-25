<?php
	
	$conexion = mysqli_connect("localhost", "nlopez_trabajo", "nlopez_trabajo", "nlopez_trabajo");

	if (mysqli_connect_errno()){
		echo "No ha podido conectarse a la base de datos: " . mysqli_connect_error();
	}

?>
