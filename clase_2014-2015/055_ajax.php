<?php
$a = $_GET["info"];
//if (json_decode($a) != null && $a != "") { /* sanity check */
//  $b = json_decode($a);
  //echo $a["dos"] ;
  $tab = "";
  for($x = 0; $x < count($a); $x++)
    $tab .= "<br>".$a[$x];
  var_dump($a);
  echo $tab;
//}
//else
//echo "<br>HOLA";
?>
