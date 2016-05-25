<?php

    $origin = $_POST['origin'];
    
    include('conexion.php');

     $query1 = 'select p.nom_producto, p.personaje from productos p, origen o 
                        where o.id_origen = p.id_origen
                        and o.nom_origen like "%' . $origin .'%"';
	
	      
              
           /*echo '                                        
             
      <table class="table data">
      <thead>
        <tr>
          <th scope="row"></th>
          <th>Name</th>
          <th>Character</th>
        </tr>
      </thead>
      <tbody>';*/
      
      $ej_query1 = mysqli_query($conexion, $query1);		
		
		while ($fig = mysqli_fetch_array($ej_query1)) {
	  
		  echo '
        <tr>
          <th scope="row"></th>
          <th>' . $fig[0] . '</th>
          <th>' . $fig[1] . '</th>
        </tr>';       
          
        
      //echo "</tbody></table>";
    
		}

		mysqli_close($conexion);

?>
