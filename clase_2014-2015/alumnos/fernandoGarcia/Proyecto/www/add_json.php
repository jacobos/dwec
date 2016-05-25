<?php
header("content-type: application/json");

$con=mysqli_connect("localhost","root","ferne1949","peliculas") or die('{"Devuelve": "Error en la conexion a la DB"}');

$var1 = $_POST['variable1'];
$var2 = $_POST['variable2'];
$var3 = $_POST['variable3'];
$var4 = $_POST['variable4'];
$var5 = $_POST['variable5'];

$sql = "INSERT INTO peliculas_added (nombre,director,duracion,ano,genero) VALUES ('$var1', '$var2', $var3, $var4, '$var5')";

if ($conexion->query($sql) === TRUE) {		
}else {echo "Error: " . $sql  . $conexion->error;}

echo $_GET['callback']. '('. json_encode($back) . ')';

?>
