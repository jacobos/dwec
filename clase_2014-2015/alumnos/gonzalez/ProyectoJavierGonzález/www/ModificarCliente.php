<?php
    header("content-type: application/json");

	$con=mysqli_connect("localhost","proyectobbdd","Troyano.89","jgonzalez_proyecto") or die('{"devuelve": "Error en conexion a la DB"}');

$codigo = $_GET["cod"];    
$nombre = $_GET["nom"];
$apellidos = $_GET["apell"];
$telefono = $_GET["tel"];


    //the usuario table should exist in your database
mysqli_query($con,"UPDATE Clientes SET nombre = '".$nombre."', apellidos = '".$apellidos."', telefono = ".$telefono." WHERE codigo = ".$codigo."");
      //Paran era cuando utilizabamos un input, y buscaremos la ciudad segun lo que hayamos escrito en el input y guardado en la variable ese valor




	$result = mysqli_query($con,"SELECT * FROM Clientes");  //Paran era cuando utilizabamos un input, y buscaremos la ciudad segun lo que hayamos escrito en el input y guardado en la variable ese valor
    
	while($row = mysqli_fetch_array($result))
	{
		
             //Guardamos los resultados de las consultas en un array de objetos
            
            
            $array['codigo'] = $row['codigo'];   
            $array['nombre'] = $row['nombre'];
            $array['apellidos'] = $row['apellidos'];
            $array['Telefono'] = $row['telefono'];
         
            
            
 
            $back[] = $array;   //devolvemos ese array al archivo desde el que lo hemos llamado
        
	}



    
    echo $_GET['callback']. '('. json_encode($back) . ')';

?>
