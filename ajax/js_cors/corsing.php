<?php
  header("Access-Control-Allow-Origin: *");

  $users = array
  (
          array("name" => "John Doe", "age" => 42),
          array("name" => "Jane Doe", "age" => $_GET['callback'])
  );
  echo json_encode($users);

?>
