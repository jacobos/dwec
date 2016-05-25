<?php
include('conexion.php');
session_destroy();
$conectado="no conectado";

echo $_GET['callback']. '('. json_encode($conectado) . ')';
?>