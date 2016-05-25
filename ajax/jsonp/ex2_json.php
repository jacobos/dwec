<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Max-Age: 1000');
header("content-type: application/json");

$al = $_POST["info"]." jeje";
$array['arr'] = array(1,7,4,2,8,4,1,9,3,2,16,7,12);
$array['nombre'] = $al;
//echo json_enconde($array);
echo json_encode($array);

?>
