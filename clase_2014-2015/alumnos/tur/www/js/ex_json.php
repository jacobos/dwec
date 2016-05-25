<?php
header("content-type: application/json");

$al = $_GET["info"];
$array['arr'] = array(1,7,4,2,8,4,1,9,3,2,16,7,12);
$array['name'] = "El nuevo!!";
$array['price'] = (int)$al;
$array['description'] = "lo mas nuevo del 8";
$array['canPurchase'] = false;
$ar["full"] = "im/gem-06.gif";
$aru[0] = $ar;
$array['images'] = $aru;
$array['canPurchase'] = false;
$array['reviews'] = array();

//echo json_enconde($array);

echo $_GET['callback']. '('. json_encode($array) . ')';

?>
