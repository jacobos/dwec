<?php
    header("content-type: application/json");

	$con=mysqli_connect("localhost","proyectoJacob_","admin","proyectoJacob_") or die('{"devuelve": "Error en conexion a la DB"}');

    
    
	$result = mysqli_query($con,"SELECT c.Nombre, c.Apellido, c.DNI, r.Fecha, r.Hora,r.Id_trabajador FROM Cliente c JOIN Reserva r ON c.DNI=r.Id_cliente JOIN Trabajador t ON t.Codigo=r.Id_trabajador ");  
    
	while($row = mysqli_fetch_array($result))
	{
		
             //Guardamos los resultados de las consultas en un array de objetos
            
            
            $array['Nombre'] = $row['Nombre'];   
            $array['Apellido'] = $row['Apellido'];
            $array['DNI'] = $row['DNI'];
            $array['Fecha'] = utf8_encode($row['Fecha']);
            $array['Hora'] = utf8_encode($row['Hora']);
         
            
            
            $back[] = $array; 

    
} 
              
        
	



    
    echo $_GET['callback']. '('. json_encode($back) . ')';
mysqli_close();

?>
