 <!-- Services Section -->
    <section id="cuerpotecnico">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 text-center">
                    <h2 class="section-heading">Cuerpo Tecnico</h2>
                </div> 
            </div>
           
                 <div class="row">
                 <div class="col-md-12">
                 <h4 class="service-heading">Buscar por filtro</h4>
                 <p class="text-muted">Nombre Cuerpo Tecnico</p>
               <div class="row">
                
                <div class="col-md-6">
                <select class="form-control">
                                <option></option>
                                  <?php
include 'conexion.php';

    $sql = "SELECT Nombre, Apellido from Cuerpo_tecnico ";  
    
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
            <th>Funcion</th>
        </tr>
    </thead>
    <tbody>
   
        
    </tbody>
</table>
                    </div>
            </div>
        </div>
        
    </section>
    
    <script src="js/cuerpotecnico.js" ></script>
