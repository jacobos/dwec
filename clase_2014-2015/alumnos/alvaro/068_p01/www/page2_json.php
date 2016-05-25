<?php

    include('conexion.php');


//MOSTRAR ---------------------------
    $todas = "SELECT * FROM `peliculas`";
    $eje_peliculas=mysqli_query($conexion, $todas);
    
    while($row = mysqli_fetch_array($eje_peliculas)){
        $array['nombre'] = $row[0];
        $array['pais'] = $row[1];
        $array['vista'] = $row[2];
        $back[] = $array;
    }

    echo $_GET['callback']. '('. json_encode($back) . ')';

?>