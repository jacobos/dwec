<?php
   $num = $_GET['id'];
   $answer['title'] = "Working on it ;)";
   $answer['miArr'] = array(1,7,4,2,8,4,1,"hola",3,2,16,7,12);
   $answer['info'] = "<b>".$num."</b> * 2 = ".($num*2);

   echo json_encode($answer);

?>
