<?php
    header("content-type: application/json");

	$con=mysqli_connect("mysql.nixiweb.com","u465892929_pro","pedro8003","u465892929_pro") or die('{"devuelve": "Error en conexion a lab      DB"}');



   

$nombre = $_GET["nom"];
$apellido = $_GET["apell"];
$fijo = $_GET["tel"];
$movil = $_GET["mov"];
$direccion = $_GET["dire"];
$mail = $_GET["mail"];
$codigo = $_GET["codigo"];


    //the usuario table should exist in your database
mysqli_query($con,"UPDATE persona SET nombre = '".$nombre."', apellido = '".$apellido."', fijo = '".$fijo."', movil = '".$movil."', direccion = '".$direccion."', mail = '".$mail."' WHERE codigo = '".$codigo."'");
     




	//the usuario table should exist in your database
	$result = mysqli_query($con,"SELECT * FROM persona");
    $i = 0;
	while($row = mysqli_fetch_array($result))
	{
		
            //we use utf8_encode for special characters in the database (avoid errors with JSON data)
            $array['apellido'] = utf8_encode($row['apellido']);
            $array['nombre'] = $row['nombre'];
            $array['fijo'] = utf8_encode($row['fijo']);
            $array['movil'] = utf8_encode($row['movil']);
            $array['direccion'] = utf8_encode($row['direccion']);
            $array['mail'] = utf8_encode($row['mail']);
            $array['code'] = utf8_encode($row['codigo']);

            $array['img'] = "http://proyectophp.tk/070/www/images/silueta-hombre.png";

            $back[] = $array;
        
	}
 

    
    
    echo $_GET['callback3']. '('. json_encode($back) . ')';

?>
