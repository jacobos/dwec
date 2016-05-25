
    <section id="categorias">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 text-center">
                    <h2 class="section-heading">Equipos</h2>
                </div> 
            </div>
           <div class="row">
                <div class="col-md-6">
                               <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#anadirequipo">
  Añadir Equipo
</button> <div class="modal fade" id="anadirequipo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"> Añadir nuevo Equipo</h4>
      </div>
      <div class="modal-body" id="anadirequipo2">
          <p>Nombre<input type="text" class="form-control" required></p>
       <p>Entrenador:<p> Nombre <input type="text" class="form-control" required> Apellido <input type="text" class="form-control" required></p> </p> 
       <p>Delegado: <p>Nombre <input type="text" class="form-control" required> Apellido <input type="text" class="form-control" required></p></p> 
       <p>Categoria<select class="form-control">
                                <option></option>
                                  <?php
include 'conexion.php';
                                $sql = "SELECT Nombre from  Categoria";  
    
$consulta = mysqli_query($conexion,$sql);
while($fila = mysqli_fetch_array($consulta)){
                              
                                   echo "<option>".utf8_encode($fila[0])."</option>"; 
}
                                   
    ?>
                                </select></p>
          <div style="display:none" class="alert alert-success"><strong>EL equipo se ha añadido correctamente</strong></div>
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
                 <p class="text-muted">Categoria</p>
               <div class="row">
                
                <div class="col-md-6">
                <select class="form-control">
                                <option></option>
                                  <?php
                                $sql = "SELECT Nombre from Categoria ";  
    
$consulta = mysqli_query($conexion,$sql);
while($fila = mysqli_fetch_array($consulta)){
                              
                                   echo "<option>".utf8_encode($fila[0])."</option>"; 
}
                                   
    ?>
                                </select>
                                </div>
                                <div class="col-md-6">
                                <button type="button" class="btn btn-default buscar">Buscar</button>
                                
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
                              
                                   echo "<option>".utf8_encode($fila[0])."</option>"; 
}
                                   
    ?>
                                </select>
                                </div>
                                <div class="col-md-6">
                                <button  type="button" class="btn btn-default buscar">Buscar</button>
                   </div>
                
                </div>
                     </div>
            </div>
                <div class="row">
                
                <div class="col-md-12">
 <div class="panel panel-primary tabequipos">
   <div class="panel-heading">
      <h3 class="panel-title">Equipos</h3>
   </div>
   
</div>
                    </div>
            </div>
        </div>
         
    </section>
    
    <script src="js/categorias.js" ></script>


