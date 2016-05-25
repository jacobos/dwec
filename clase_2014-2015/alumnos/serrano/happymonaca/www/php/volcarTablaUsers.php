<?php 
include('conexion.php');

   $consulta_usuarios =  mysqli_query($conexion,'SELECT * FROM usuarios ');
              while($user = mysqli_fetch_array($consulta_usuarios)){

              echo '<tr>';

                     echo '<td>'. $user[0] .'</td>';
                     echo '<td>'. $user[1] .'</td>';
                     echo '<td>'. $user[2] .'</td>';
                     echo '<td>'. $user[5] .'</td>';
                     echo '<td>';
                     echo ' <a type="button" class="btn btn-primary btn-large modificarUno  glyphicon glyphicon-wrench" href="#test_modal_mod" data-toggle="modal" ></a>';
                     echo ' <a type="button" class="btn btn-primary btn-large eliminarUno glyphicon glyphicon-trash " href="#test_modal" data-toggle="modal" ></a>';
                     echo '</td>';
               echo '</tr>';
               
            }

 ?>