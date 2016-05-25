<?php

header("content-type: application/json");


$json = file_get_contents('getJSON2.json');
$result = json_decode ($json);

echo $_GET['callback']. '('. json_encode($result) . ')';

?>
