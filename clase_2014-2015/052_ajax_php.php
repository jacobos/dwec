  <?php
    $a = $_POST["info"];
   if (json_decode($a) != null && $a != "") { /* sanity check */
       $b = json_decode($a);
       echo $b->uno ;
   }
else
    ; //"A";

    echo "<br>HOLA";
?>
