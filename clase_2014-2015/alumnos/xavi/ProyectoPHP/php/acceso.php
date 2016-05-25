<?php

$error ="";
$conexion = mysqli_connect("localhost","xavi","xavi1234","ProyectoPHP");
if(mysqli_connect_errno()){
    echo "No se puede conectar a la base de datos: ".mysqli_connect_error();
} 


    
$user =$_POST['us'];
$pass=$_POST['cont'];

$sql = "SELECT * from Usuarios where Usuario= '$user' and Pass='$pass'";
$consulta = mysqli_query($conexion,$sql);

if($consulta){
  $fila = mysqli_fetch_array($consulta);
    if($user == $fila[1]  && $pass == $fila[2] ){
        session_start();
  setcookie( "acceso", "inicio", time()+3600, "/", "");  
    $_SESSION['usuario']= $user; 
  $_SESSION['acceso']="inicio";
        

}else{

}
 
}

?>