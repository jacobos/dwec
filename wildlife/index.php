<?php
if ($handle = opendir('.')) {

  echo "<a href='download_wildlife.zip' target='_blank'>DOWNLOAD ALL THE FOLDERS AND FILES</a><br>";
    while (false !== ($entry = readdir($handle))) {

        if ($entry != "." && $entry != ".." && $entry != "index.php" && $entry != "download_wildlife.zip") {

          if(is_dir($entry))
            echo "<a style='border: 1px solid black; color: black'>$entry</a><br>";
          else
            echo "<a style='border: 1px solid #abc' href='$entry'>$entry</a><br>";

        }
    }

    closedir($handle);
}
?>