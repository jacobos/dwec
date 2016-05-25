<?php
 header("content-type: application/json");

	$con=mysqli_connect("85.214.132.62","xalfonso_jacobo","xavi1234","xalfonso_jacobo") or die('{"devuelve": "Error en conexion a la DB"}');


$name= $_GET['name'];
$name2= $_GET['name2'];
$desc= $_GET['desc'];
$date= $_GET['date'];


$result = mysqli_query($con,"UPDATE Chefs SET Nombre='$name', Descripcion='$desc', Lugar_nacimiento='$date' where Nombre='$name2' ");
    

  $result = mysqli_query($con,"SELECT * FROM Chefs");
    
	while($row = mysqli_fetch_array($result))
	{
	
            //we use utf8_encode for special characters in the database (avoid errors with JSON data)
            $array['Nombre'] =utf8_encode($row[1]);
            $array['Descripcion'] = utf8_encode($row[2]);
            $array['fecnac'] = utf8_encode($row[3]);
            $array['Imagen'] = utf8_encode("images/".$row[4]);
         
            $back[] = $array;
   
	}

echo $_GET['callback']. '('. json_encode($back) . ')';

?>