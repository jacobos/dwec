<?php
    header("content-type: application/json");

	$con=mysqli_connect("localhost","nlopez_onsen","nlopez_onsen","nlopez_onsen") or die('{"devuelve": "Error en conexion a la DB"}');


	//the usuario table should exist in your database
	$result = mysqli_query($con,"SELECT * FROM instruments");
	while($row = mysqli_fetch_array($result))
	{
            //we use utf8_encode for special characters in the database (avoid errors with JSON data)
            $array['name'] =  utf8_encode($row[0]);
            $array['family'] = utf8_encode($row[1]);
            $array['material'] = utf8_encode($row[2]);
            $array['description'] = utf8_encode($row[3]);
            $array['img'] = utf8_encode($row[4]);
            $back[] = $array;
	}
    
    echo $_GET['callback']. '('. json_encode($back) . ')';

?>
