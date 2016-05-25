<?php
    header("content-type: application/json");

	$con=mysqli_connect("localhost","tareas","tareas","tareas") or die('{"devuelve": "Error en conexion a la DB"}');




    $codigo = $_GET["cod"];
    $estado = $_GET["esta"];

    
    if(isset($_GET['cod']) && isset($_GET['esta'])){
            mysqli_query($con," UPDATE `tareas` SET `estado`='$estado' WHERE `codigo`='$codigo'");
    }







	$result = mysqli_query($con,"SELECT * FROM tareas");  //Paran era cuando utilizabamos un input, y buscaremos la ciudad segun lo que hayamos escrito en el input y guardado en la variable ese valor
    
	while($row = mysqli_fetch_array($result))
	{
		
             //Guardamos los resultados de las consultas en un array de objetos
            
            $array['tarea'] = $row['tarea'];   
            $array['estado'] = $row['estado'];   
            $array['codigo'] = $row['codigo'];   
            

            $back[] = $array;   //devolvemos ese array al archivo desde el que lo hemos llamado
        
	}

    echo $_GET['callback']. '('. json_encode($back) . ')';

?>
