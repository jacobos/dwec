<?php
    header("content-type: application/json");

	$con=mysqli_connect("localhost","carlos93","Simpsons22","proyecto4_php") or die('{"devuelve": "Error en conexion a la DB"}');
  
    $Ciudad = $_GET["ciu"];

	$result = mysqli_query($con,"SELECT * FROM Flota where Ciudad='$Ciudad'"); 
    
	while($row = mysqli_fetch_array($result)){ 
        $array['Matricula'] = $row['Matricula'];   
        $array['Marca'] = $row['Marca'];
        $array['Modelo'] = $row['Modelo'];
        $array['Ciudad'] = $row['Ciudad'];
        $array['Precio_diario'] = $row['Precio_diario'];

        $back[] = $array;      
	}
    echo $_GET['callback']. '('. json_encode($back) . ')';
?>
