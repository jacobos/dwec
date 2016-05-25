<?php

    header("content-type: application/json");

	$con=mysqli_connect("localhost","xalfonso_jacobo","xavi1234","xalfonso_jacobo") or die('{"devuelve": "Error en conexion a la DB"}');

$email= $_GET['email'];
$pass= $_GET['pass'];
$pass2="";
	//the usuario table should exist in your database
	$result = mysqli_query($con,"SELECT Email, Password FROM Usuario where Email='".$email."' and Password='".$pass."' ");
while($fila = mysqli_fetch_array($result)){
$pass2 = $fila['Password'] ;

}
    if($pass2 == $pass || $_COOCKIE['acceso']=="inicio"){
         setcookie( "acceso", "inicio", time()+3600, "/", ""); 
        $back= true;
    echo $_GET['callback']. '('. json_encode($back) . ')';
    }else{
        $back= $pass2;
        echo $_GET['callback']. '('. json_encode($back) . ')';
    }
?>
