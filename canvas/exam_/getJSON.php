<?php
   header('Access-Control-Allow-Origin: *');

   $str = file_get_contents('exam.json');
   $json = json_decode($str, true);

   echo json_encode($json);
 ?>
