<?php
    header("content-type: application/json");

	$con=mysqli_connect("localhost","proyectobbdd","Troyano.89","jgonzalez_proyecto") or die('{"devuelve": "Error en conexion a la DB"}');

    
$id = $_GET["nom"];
$num = $_GET["num"];
$Mesas = $_GET["mes"];
$fecha = $_GET['fec'];
$hora = $_GET['hor'];

$menu = $_GET["men"];
$bebida = $_GET["beb"];


mysqli_query($con,"INSERT INTO `Reservas`(`idcliente`, `npersonas`, `mesa`,`Fecha`,`Hora`) VALUES ('".$id."','".$num."','".$Mesas."','".$fecha."','".$hora."')");


//SELECT id FROM table ORDER BY id DESC LIMIT 1;


$variable="SELECT Codigo FROM Reservas ORDER BY Codigo DESC LIMIT 1";  //Hago un select
$var2=mysqli_query($con,$variable);




$row=mysqli_fetch_array($var2);
$id_res=$row[0];



mysqli_query($con,"INSERT INTO `Carta`(`Menu`, `Bebida`, `idreserva`) VALUES ('$menu','$bebida',$id_res)");
         
            
      






$result = mysqli_query($con,"SELECT * FROM Reservas");  //Paran era cuando utilizabamos un input, y buscaremos la ciudad segun lo que hayamos escrito en el input y guardado en la variable ese valor
    
	while($row = mysqli_fetch_array($result))
	{
		
             //Guardamos los resultados de las consultas en un array de objetos
            
            
          
            $array['Idcliente'] = $row['Idcliente'];
            $array['npersonas'] = $row['npersonas'];
            $array['mesa'] = $row['mesa'];
            $array['Fecha'] = utf8_encode($row['Fecha']);
            $array['Hora'] = utf8_encode($row['Hora']);
         
            
            
 
            $back[] = $array;   //devolvemos ese array al archivo desde el que lo hemos llamado
        
	}



    
    echo $_GET['callback']. '('. json_encode($back) . ')';

?>
