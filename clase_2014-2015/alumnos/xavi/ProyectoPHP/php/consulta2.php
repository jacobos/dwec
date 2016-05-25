<?php
$conexion = mysqli_connect("localhost","xavi","xavi1234","ProyectoPHP");
if(mysqli_connect_errno()){
    echo "No se puede conectar a la base de datos: ".mysqli_connect_error();
} 
$contenido = "";
$num = $_POST['num'];

if($num == 0){
$categoria =$_POST['categoria'];
$sql = "SELECT e.Nombre  from  Equipos e  join Categoria c on c.Id_categoria = e.Cod_categoria where c.Nombre= '".utf8_decode($categoria)."'";
    $consulta = mysqli_query($conexion,$sql);
while($fila = mysqli_fetch_array($consulta)){
$contenido .= " <div class='panel-body'> ".$fila[0]." </div>";
    $sql2 = "SELECT c.Nombre, c.Apellido,c.Tipo from Cuerpo_tecnico c join Equipos e on c.Id_cptec = e.Entrenador or c.Id_cptec = e.Delegado where e.Nombre= '".$fila[0]."'";
    
    $consulta2 = mysqli_query($conexion,$sql2);
    $contenido .= '<table class="table"><th>Cuerpo Tecnico</th><th>Nombre </th><th>Apellido </th><th>Función </th><th></th>';
    while($fila2 = mysqli_fetch_array($consulta2)){
    
    $contenido .= '<tr><td> </td><td>'.$fila2[0].'</td><td>'.$fila2[1].'</td><td>'.$fila2[2].'</td><td> <a class="btn btn-small btn-info cptec" href="#"> <i class="icon-edit icon-large"></i> Modificar</a></td></tr>';
    }
   

   $sql3 = "SELECT j.Nombre, j.Apellido,j.DNI from Jugadores j join Equipos e on e.Id_equipo = j.Cod_equipo  where e.Nombre= '".$fila[0]."'";
    $consulta3 = mysqli_query($conexion,$sql3);
    $contenido .= '<th>Jugadores</th><th>Nombre </th><th>Apellido </th><th>DNI</th><th></th>';
    while($fila3 = mysqli_fetch_array($consulta3)){
    
    $contenido .= '<tr><td> </td><td>'.$fila3[0].'</td><td>'.$fila3[1].'</td><td>'.$fila3[2].'</td><td> <a class="btn btn-danger btn-small jug" href="#"> <i class="icon-remove-sign icon-large"></i> Eliminar</a> <a class="btn btn-small btn-info jug" href="#"> <i class="icon-edit icon-large"></i> Modificar</a></td></tr>';
    }
    $contenido .= '</table>';
}


        echo $contenido;


}
else if($num == 1){
    $equipo =$_POST['equipo'];
    
$contenido .= " <div class='panel-body'> ".$equipo." </div>";
    $sql2 = "SELECT c.Nombre, c.Apellido,c.Tipo from Cuerpo_tecnico c join Equipos e on c.Id_cptec = e.Entrenador or c.Id_cptec = e.Delegado where e.Nombre= '".$equipo."'";
    
    $consulta2 = mysqli_query($conexion,$sql2);
    $contenido .= '<table class="table"><th>Cuerpo Tecnico</th><th>Nombre </th><th>Apellido </th><th>Función </th><th></th>';
    while($fila2 = mysqli_fetch_array($consulta2)){
    
    $contenido .= '<tr><td> </td><td>'.$fila2[0].'</td><td>'.$fila2[1].'</td><td>'.$fila2[2].'</td> <td> <a class="btn btn-small btn-info cptec" href="#"> <i class="icon-edit icon-large"></i> Modificar</a></td></tr>';
    }
 

   $sql3 = "SELECT j.Nombre, j.Apellido, j.DNI from Jugadores j join Equipos e on e.Id_equipo = j.Cod_equipo  where e.Nombre= '".$equipo."'";
    $consulta3 = mysqli_query($conexion,$sql3);
    $contenido .= '<th>Jugadores</th><th>Nombre </th><th>Apellido </th><th>DNI</th><th></th>';
    while($fila3 = mysqli_fetch_array($consulta3)){
     
    $contenido .= '<tr><td> </td><td>'.$fila3[0].'</td><td>'.$fila3[1].'</td><td>'.$fila3[2].'</td><td> <a class="btn btn-danger btn-small jug" href="#"> <i class="icon-remove-sign icon-large"></i> Eliminar</a> <a class="btn btn-small btn-info jug" href="#"> <i class="icon-edit icon-large"></i> Modificar</a></td></tr>';
    }
    $contenido .= '</table>';
    


        echo $contenido;
}else if($num == 2){
    
    $nomtab=$_POST['nomtab'];
    if($nomtab=="cptec"){
        
      $nombre2 =$_POST['nombre2'];
$apellido2 =$_POST['apellido2'];
              $nombre =$_POST['nombre'];
$apellido =$_POST['apellido'];
      $dni =$_POST['dni'];

$sql4 = "UPDATE Cuerpo_tecnico SET Nombre='".$nombre2."' , Apellido='".$apellido2."' WHERE Tipo='".$dni."' and Nombre='".$nombre."' and Apellido= '".$apellido."' ";

$consulta4 = mysqli_query($conexion,$sql4);
        
        
    }else{ 
    $nombre2 =$_POST['nombre2'];
$apellido2 =$_POST['apellido2'];
      $dni =$_POST['dni'];

$sql4 = "UPDATE Jugadores SET Nombre='".$nombre2."' , Apellido='".$apellido2."' WHERE DNI='".$dni."'";

$consulta4 = mysqli_query($conexion,$sql4);
    }

}else if($num == 3){


$nombre =$_POST['nombre'];
$entrenadornom =$_POST['entrenadornom'];
$entrenadorap =$_POST['entrenadorap'];
$delegadoap =$_POST['delegadoap'];
$delegadonom =$_POST['delegadonom'];
$categoria =utf8_decode($_POST['categoria']);
      

    
    $sql = "SELECT Id_categoria from Categoria  WHERE Nombre='".$categoria."' ";
    
    $consulta4 = mysqli_query($conexion,$sql);
    $categoria =  mysqli_fetch_array($consulta4);
    $categoria = $categoria[0];
    
  
     $sql2 = "INSERT INTO Cuerpo_tecnico (Nombre,Apellido,Tipo) VALUES ('".$entrenadornom."','".$entrenadorap."','Entrenador'), ('".$delegadonom."','".$delegadoap."','Delegado') ";
     $consulta = mysqli_query($conexion,$sql2);
    
    $sql3 = "SELECT id_cptec from Cuerpo_tecnico where Nombre in('".$entrenadornom."', '".$delegadonom."') and Apellido in('".$entrenadorap."','".$delegadoap."')";
     $consulta3 = mysqli_query($conexion,$sql3);
    
      $codigo = mysqli_fetch_array($consulta3);
    $codigo = $codigo[0];
    $codigo2 = mysqli_fetch_array($consulta3);
      $codigo2 = $codigo2[0];
        
    $sql5 = "INSERT INTO Equipos (Nombre,Cod_categoria,Entrenador,Delegado) VALUES ('".$nombre."',".$categoria.",".$codigo.",".$codigo2.") ";
echo $sql5;
     $consulta = mysqli_query($conexion,$sql5);

}else if($num == 4){
    $dni =$_POST['dni'];
    $sql = "DELETE from Jugadores where DNI = '".$dni."'";
    $consulta = mysqli_query($conexion,$sql);
     
}

?>