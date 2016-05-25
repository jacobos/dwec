<?php
session_start();
unset($_SESSION['acceso']);
  setcookie( "sesion", "Sesion cerrada<br>", time()+3600, "/", ""); 
header('Location:http://www.franciscoalfonso.tk/php/ProyectoPHP/index.php');
?>