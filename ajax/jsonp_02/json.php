<?php
$users = array
(
        array("name" => "John Doe", "age" => 42),
        array("name" => "Jane Doe", "age" => $_GET['callback'])
);
echo $_REQUEST['callback'] . "(" . json_encode($users) . ")";
?>
