<?php

    $delete = $_POST['delete'];
    
    include('conexion.php');

    $query1 = 'DELETE FROM productos WHERE id_producto = "' . $delete . '"';
	$query2 = 'select p.id_producto, p.nom_producto, p.personaje, o.nom_origen, f.nom_fabricante, p.precio_yen, p.precio_dol, p.precio_eur from productos p, fabricantes f, origen o where f.id_fabricante = p.id_fabricante and o.id_origen = p.id_origen';
      
        $ej_query1 = mysqli_query($conexion, $query1);
        
      $ej_query2 = mysqli_query($conexion, $query2);		
		
        echo '<h1>Delete</h1>';
        echo "<h2>Delete Successful</h2>";

		while ($fig = mysqli_fetch_array($ej_query2)) {
            
		 echo '   
      <table class="table data">
      <tbody>';
	  
		  echo '
        <tr>
          <th>' . $fig[0] . '</th>
        </tr>';
        
        echo '
        <tr>
          <th>' . $fig[1] . '</th>
        </tr>';
        
        echo '
        <tr>
          <th>' . $fig[2] . '</th>
        </tr>';
            
        echo '
        <tr>
          <th>' . $fig[3] . '</th>
        </tr>';
            
        echo '
        <tr>
          <th>' . $fig[4] . '</th>
        </tr>';
            
        echo '
        <tr>
          <th>' . $fig[5] . ' ¥</th>
        </tr>';
            
        echo '
        <tr>
          <th>' . $fig[6] . ' $</th>
        </tr>';
            
        echo '
        <tr>
          <th>' . $fig[7] . ' €</th>
        </tr>';
            
        echo '
        <tr>
          <th><button id="' . $fig[0] . '" class="btn btn-danger delete">Delete</button></th>
        </tr>';
            
        echo '</tbody></table>';  
        
        }

       

		mysqli_close($conexion);

?>
