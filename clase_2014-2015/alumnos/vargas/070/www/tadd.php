<?php
header("content-type: application/json");

	$con=mysqli_connect("localhost","tareas","tareas","tareas") or die('{"devuelve": "Error en conexion a la DB"}');
    //insertar
    $tarea = $_GET["task"];
    if(isset($_GET['task'])){
    mysqli_query($con,"INSERT INTO `tareas`(`tarea`) VALUES ('$tarea')");
    }

//esto se utiliza para guardar en un array la consulta y poder dibujar el la lista o donde quieras ponerlos los datos de la bbdd	
$result = mysqli_query($con,"SELECT * FROM tareas");
    
	while($row = mysqli_fetch_array($result))
	{
		
             //Guardamos los resultados de las consultas en un array de objetos
            
            $array['tarea'] = $row['tarea'];   
            $array['estado'] = $row['estado'];   
            

            $back[] = $array;   
        //devolvemos ese array al archivo desde el que lo hemos llamado
        
	}

    echo $_GET['callback']. '('. json_encode($back) . ')';
?>