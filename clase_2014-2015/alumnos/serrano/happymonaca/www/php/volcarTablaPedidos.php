<?php 
include('conexion.php');

  $consulta_pedidos =  mysqli_query($conexion,'SELECT * FROM pedidos ');
          while($pedidos = mysqli_fetch_array($consulta_pedidos)){
 
           echo '<tr>';
          $codPedi = $pedidos[1];
          $codigosUrss =  mysqli_query($conexion,"SELECT nombre FROM usuarios where cod_usuario=".$codPedi);
          $codeus = mysqli_fetch_array($codigosUrss);

          $codClie = $pedidos[2];
          $codigosClienn =  mysqli_query($conexion,"SELECT nombre FROM clientes where cod_cliente=".$codClie);
          $codecli = mysqli_fetch_array($codigosClienn);

           echo '<td>'. $pedidos[0] .'</td>';
           echo '<td>'. $codeus[0] .'</td>';
           echo '<td>'. $codecli[0] .'</td>';
           echo '<td>'. $pedidos[3] .'</td>';
           echo '<td>'. $pedidos[4] .'</td>';
           echo '<td>'. $pedidos[5] .'</td>';
                  

           echo '<td>';
               echo ' <a type="button" class="btn btn-primary btn-large modificarUno  glyphicon glyphicon-wrench" href="#test_modal_mod" data-toggle="modal" ></a>';
               echo ' <a type="button" class="btn btn-primary btn-large eliminarUno glyphicon glyphicon-trash " href="#test_modal" data-toggle="modal" ></a>';
          
              echo '</td></tr>';
            
           } 

  ?>