<?php
  $json = $_POST['json'];

  if (json_decode($json) != null) { /* sanity check */
    $file = fopen('../file.json','w') or die ("can't open file");
    fwrite($file, $json);
    fclose($file);
  } else {
    // handle error
  }
?>
