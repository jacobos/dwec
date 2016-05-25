<?php
    header("content-type: application/json");

	$con=mysqli_connect("mysql.nixiweb.com","u465892929_pro","pedro8003","u465892929_pro") or die('{"devuelve": "Error en conexion a lab      DB"}');


	//the usuario table should exist in your database
	$result = mysqli_query($con,"SELECT * FROM persona");
    $i = 0;
	while($row = mysqli_fetch_array($result))
	{
		if($i < 33)
        {
            //we use utf8_encode for special characters in the database (avoid errors with JSON data)
            $array['apellido'] = utf8_encode($row['apellido']);
            $array['nombre'] = $row['nombre'];
            $array['fijo'] = utf8_encode($row['fijo']);
            $array['movil'] = utf8_encode($row['movil']);
            $array['direccion'] = utf8_encode($row['direccion']);
            $array['mail'] = utf8_encode($row['mail']);

            $array['img'] = "./images/silueta-hombre.png";

            $i++;
            $back[] = $array;
        }
	}
 

    
//$nombre = $_GET["nom"];
//$apellidos = $_GET["apell"];
//$fijo = $_GET["tel"];
//$movil = $_GET["mov"];
//$direccion = $_GET["dire"];
//$mail = $_GET["mail"];
//
//
//
//    //the usuario table should exist in your database
//mysqli_query($con,"INSERT INTO 'persona'('nombre', 'apellido', 'fijo','movil','direccion','mail') VALUES ('".$nombre."','".$apellidos."','".$fijo."','".$movil."','".$direccion."','".$mail."')");
    
    echo $_GET['callback']. '('. json_encode($back) . ')';

?>
