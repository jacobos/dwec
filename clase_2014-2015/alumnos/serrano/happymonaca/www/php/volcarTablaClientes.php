<?php 
  include('conexion.php');

   $consulta_clientes =  mysqli_query($conexion,'SELECT * FROM clientes ');      
            while($clientes = mysqli_fetch_array($consulta_clientes)){

			echo ' <tr>';
                echo '<td>'. $clientes[0] .'</td>';
				echo '<td>'. $clientes[1] .'</td>';
				echo '<td>'. $clientes[2] .'</td>';
				echo '<td>'. $clientes[3] .'</td>';
				echo '<td>'. $clientes[4] .'</td>';
				echo '<td>'. $clientes[5] .'</td>';
				
            echo '<td>';
            echo '<a type="button" class="btn btn-primary btn-large modificarUno  glyphicon glyphicon-wrench" href="#test_modal_mod" data-toggle="modal" ></a>';        
            echo ' <a type="button" class="btn btn-primary btn-large eliminarUno glyphicon glyphicon-trash " href="#test_modal" data-toggle="modal"></a>';
            echo '</td>';
            echo '</tr>';
              
             }
 ?>