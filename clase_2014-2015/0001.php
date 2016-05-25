<?php

$conexion = mysqli_connect("localhost", "jacobo", "jacobo", "jacobo") or die(mysql_error());

if(!empty($_GET))
{
	$introducido=(string)$_GET['tabla'];
	if(mysqli_query($conexion,'INSERT INTO usuario (info) VALUES ("'.addslashes($introducido).'")')){
		echo "GOOD";
	}
	else {
		echo "BAD";
	}

}
else{
	$qu = $conexion->query('SELECT info from usuario');
	while($r = $qu->fetch_array()){
		echo $r["info"];
	}

}
?>
