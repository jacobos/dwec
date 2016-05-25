<?php 
include('conexion.php');

$consulta_ventas =  mysqli_query($conexion,'SELECT * FROM ventas ');
      while($ventas = mysqli_fetch_array($consulta_ventas)){

      $codUserVenta = $ventas[1];
      $codigosUrssVen =  mysqli_query($conexion,"SELECT nombre FROM usuarios where cod_usuario=".$codUserVenta);
      $codeusven = mysqli_fetch_array($codigosUrssVen);

      $codClieVent = $ventas[3];
      $codigosCliennVen =  mysqli_query($conexion,"SELECT nombre FROM clientes where cod_cliente=".$codClieVent);
      $codecliven = mysqli_fetch_array($codigosCliennVen);
         
      echo '<tr>';
      echo '<td>' .$ventas[0]. '</td>';
      echo '<td>' .$codeusven[0]. '</td>';
      echo '<td>' .$ventas[2]. '</td>';
      echo '<td>' .$codecliven[0]. '</td>';
      echo '<td>' .$ventas[4]. '</td>';
      echo '<td>' .$ventas[5]. '</td>';

              if( $ventas[6]  == 1){
               echo '<td>Sí</td>';
              }else{
               echo '<td>No</td>';
              }
              
              echo '<td>' .$ventas[7].  '</td>';
              
               if($ventas[8]  == 1){
                  echo '<td>Sí</td></td>';
              }else{
                 echo '<td>No</td></td>';
              }

              echo '<td>';
               echo ' <a type="button" class="btn btn-primary btn-large modificarVenta  glyphicon glyphicon-wrench" href="#test_modal_mod" data-toggle="modal" ></a>';
               echo ' <a type="button" class="btn btn-primary btn-large eliminarUno glyphicon glyphicon-trash " href="#test_modal" data-toggle="modal" ></a>';
          
              echo '</td></tr>';
          }
 ?>