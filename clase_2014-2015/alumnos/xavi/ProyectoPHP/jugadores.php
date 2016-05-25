

    <!-- Services Section -->
    <section id="jugadores">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 text-center">
                    <h2 class="section-heading">Jugadores</h2>
                </div> 
            </div>
           <div class="row">
                <div class="col-md-6">
                               <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#anadirjugador">
  Añadir Usuario
</button> <div class="modal fade" id="anadirjugador" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"> Añadir nuevo usuario</h4>
      </div>
      <div class="modal-body" id="anadirusuario">
          <p>DNI<input type="text" class="form-control" required></p>
       <p>Nombre<input type="text" class="form-control" required></p>
       <p>Apellido<input type="text" class="form-control" required></p>
       <p>Fecha_inscripción<input type="date" class="form-control" required></p>
       <p>Equipo<select class="form-control">
                                <option></option>
                                  <?php
include 'conexion.php';
                                $sql = "SELECT Nombre from  Equipos";  
    
$consulta = mysqli_query($conexion,$sql);
while($fila = mysqli_fetch_array($consulta)){
                              
                                   echo "<option>".$fila[0]."</option>"; 
}
                                   
    ?>
                                </select></p>
          <div style="display:none" class="alert alert-success"><strong>EL usuario se ha añadido correctamente</strong></div>
        </div>
      <div class="modal-footer">
     
        <button type="button" class="btn btn-warning" id="acceso">Guardar</button>
    
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
                   </div>
                <div class="col-md-12">
               </div>
               </div>
                 <div class="row">
                 <div class="col-md-12">
                 <h4 class="service-heading">Buscar por filtro</h4>
                 <p class="text-muted">Nombre Jugador</p>
               <div class="row">
                
                <div class="col-md-6">
                <select class="form-control">
                                <option></option>
                                  <?php
                                $sql = "SELECT j.Nombre, j.Apellido, e.Nombre from Jugadores  j JOIN Equipos e ON  e.Id_equipo=j.Cod_equipo";  
    
$consulta = mysqli_query($conexion,$sql);
while($fila = mysqli_fetch_array($consulta)){
                              
                                   echo "<option>".$fila[0]." ".$fila[1]."</option>"; 
}
                                   
    ?>
                                </select>
                                </div>
                                <div class="col-md-6">
                                <button style="float:left" type="button" class="btn btn-default buscar">Buscar</button>
                                
                   </div>
                
                </div>
               <p class="text-muted">Nombre Equipo</p>
               <div class="row">
                
                <div class="col-md-6">
                <select class="form-control">
                                <option></option>
                                  <?php
                                $sql = "SELECT Nombre from  Equipos";  
    
$consulta = mysqli_query($conexion,$sql);
while($fila = mysqli_fetch_array($consulta)){
                              
                                   echo "<option>".$fila[0]."</option>"; 
}
                                   
    ?>
                                </select>
                                </div>
                                <div class="col-md-6">
                                <button style="float:left" type="button" class="btn btn-default buscar">Buscar</button>
                   </div>
                
                </div>
                     </div>
            </div>
                <div class="row">
                
                <div class="col-md-12">
                    <table class="table">
    <thead>
        <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Equipo</th>
            <th>DNI</th>
        </tr>
    </thead>
    <tbody>
   
        
    </tbody>
</table>
                    </div>
            </div>
        </div>
        
    </section>
    
    <script src="js/jugadores.js" ></script>
