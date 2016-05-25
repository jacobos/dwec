<?php
 header("content-type: application/json");

	$con=mysqli_connect("85.214.132.62","xalfonso_jacobo","xavi1234","xalfonso_jacobo") or die('{"devuelve": "Error en conexion a la DB"}');


$name= $_GET['name'];

$result = mysqli_query($con,"DELETE FROM Recetas WHERE Nombre='".$name."'");
    

   $result = mysqli_query($con,"SELECT r.Nombre, r.Descripcion, r.Imagen,  ch.Nombre FROM Recetas r  JOIN Chefs ch on ch.Id = r.Cod_chef");
    
	while($row = mysqli_fetch_array($result))
	{
	
            //we use utf8_encode for special characters in the database (avoid errors with JSON data)
            $array['Nombre'] =utf8_encode($row[0]);
            $array['Descripcion'] = utf8_encode($row[1]);
          
            $array['Imagen'] = utf8_encode("images/".$row[2]);
    
        $array['Chef'] = utf8_encode($row[3]);
         
            $back[] = $array;
   
	}

echo $_GET['callback']. '('. json_encode($back) . ')';

?>