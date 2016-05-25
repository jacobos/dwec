<?php
    header("content-type: application/json");

	$con=mysqli_connect("localhost","solvam","solvam","solvam") or die('{"devuelve": "Error en conexion a la DB"}');

    $param = $_GET["info"];

    //the usuario table should exist in your database
	$result = mysqli_query($con,"SELECT * FROM City where District='$param'");
    $i = 0;
	while($row = mysqli_fetch_array($result))
	{
		if($i < 100)
        {
            //we use utf8_encode for special characters in the database (avoid errors with JSON data)
            $array['where'] = utf8_encode($row['Name']);
            $array['what'] = $row['Population']." people living there";
            $array['desc'] = "In the ".utf8_encode($row['District']). " district";
            $num = $i % 4+1;
            $array['img'] = "http://components.onsen.io/patterns/images/location".$num.".png";
            $i++;
            $back[] = $array;
        }
	}


    for($i = 0; $i < 10; $i++)
    {
        $array['where'] = $back2[$i]["where"]."Situado en la latitud 1.3.".$i;
        $array['what'] = "jaco tok";
        $array['desc'] = "lo mas nuevo de Tokio";
        $array['img'] = "http://components.onsen.io/patterns/images/location4.png";
        $array['canPurchase'] = false;
        //$back[] = $array; 
    }
    
    echo $_GET['callback']. '('. json_encode($back) . ')';

?>
