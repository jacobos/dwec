<?php

    include('conexion.php');


//MOSTRAR ---------------------------
    $todas = "SELECT * FROM `peliculas` where vista='si'";
    $eje_peliculas=mysqli_query($conexion, $todas);
    
    while($row = mysqli_fetch_array($eje_peliculas)){
        $array['id'] = $row[0];
        $array['nombre'] = $row[1];
        $array['pais'] = $row[2];
        $array['vista'] = $row[3];
        $back[] = $array;
    }

    echo $_GET['callback']. '('. json_encode($back) . ')';

?>