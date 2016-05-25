<?php
header("content-type: application/json");

$al = $_GET["info"];
$array['arr'] = array(1,7,4,2,8,4,1,9,3,2,16,7,12);
$array['nombre'] = $al;
//echo json_enconde($array);
echo $_GET['callback']. '('. json_encode($array) . ')';

?>
