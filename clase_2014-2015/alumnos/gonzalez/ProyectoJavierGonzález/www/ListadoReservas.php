<?php
    header("content-type: application/json");

	$con=mysqli_connect("localhost","proyectobbdd","Troyano.89","jgonzalez_proyecto") or die('{"devuelve": "Error en conexion a la DB"}');

    
    //the usuario table should exist in your database
	$result = mysqli_query($con,"SELECT * FROM Reservas");  //Paran era cuando utilizabamos un input, y buscaremos la ciudad segun lo que hayamos escrito en el input y guardado en la variable ese valor
    
	while($row = mysqli_fetch_array($result))
	{
		
             //Guardamos los resultados de las consultas en un array de objetos
            
            
            $array['Codigo'] = $row['Codigo'];   
            $array['Idcliente'] = $row['Idcliente'];
            $array['Comensales'] = $row['npersonas'];
            $array['mesa'] = $row['mesa'];
            $array['Fecha'] = utf8_encode($row['Fecha']);
            $array['Hora'] = utf8_encode($row['Hora']);
            
            
 
            $back[] = $array;   //devolvemos ese array al archivo desde el que lo hemos llamado
        
	}



    
    echo $_GET['callback']. '('. json_encode($back) . ')';

?>
