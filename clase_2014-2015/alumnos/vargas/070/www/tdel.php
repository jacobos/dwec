<?php
header("content-type: application/json");

    $con=mysqli_connect("localhost","tareas","tareas","tareas") or die('{"devuelve": "Error en conexion a la DB"}');
        $codigo = $_GET["cod"];

        mysqli_query($con, "DELETE FROM tareas WHERE codigo='$codigo'");

	$result = mysqli_query($con,"SELECT * FROM tareas");    
	while($row = mysqli_fetch_array($result))
	{
            $array['codigo'] = $row['codigo'];   
            $array['tarea'] = $row['tarea'];
            
            $back[] = $array;  
	}
 
echo $_GET['callback']. '('. json_encode($back) . ')';


?>