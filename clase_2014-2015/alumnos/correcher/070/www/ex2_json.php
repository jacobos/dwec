<?php
header("content-type: application/json");

$al = $_GET["info"];
$array['arr'] = array(1,7,4,2,8,4,1,9,3,2,16,7,12);
$array['name'] = "Default song";
$array['what'] = "Default song";
$array['desc'] = "when u dont have any imagination . . .";
$array['img'] = "http://cdn.flaticon.com/png/256/14625.png";
$array['canPurchase'] = false;

//echo json_enconde($array);

echo $_GET['callback']. '('. json_encode($array) . ')';

?>
