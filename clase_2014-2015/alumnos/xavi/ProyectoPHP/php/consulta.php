<?php
$conexion = mysqli_connect("localhost","xavi","xavi1234","ProyectoPHP");
if(mysqli_connect_errno()){
    echo "No se puede conectar a la base de datos: ".mysqli_connect_error();
} 
$contenido = "";
$num = $_POST['num'];

if($num == 0){
$nombre =$_POST['nombre'];
$apellido =$_POST['apellido'];
$sql4 = "SELECT j.Nombre, j.Apellido, e.Nombre, j.DNI from Jugadores j join Equipos e on e.Id_equipo = j.Cod_equipo WHERE j.Nombre='".$nombre."' and  j.Apellido='".$apellido."'";

$consulta4 = mysqli_query($conexion,$sql4);

$i=0;
while($fila4 = mysqli_fetch_array($consulta4)){
$i++;
    $contenido .= '<tr><td>'.$i.' </td><td>'.$fila4[0].'</td> <td>'.$fila4[1].'</td><td>'.$fila4[2].'</td><td>'.$fila4[3].'</td><td> <a class="btn btn-danger btn-small" href="#"> <i class="icon-remove-sign icon-large"></i> Eliminar</a> <a class="btn btn-small btn-info" href="#"> <i class="icon-edit icon-large"></i> Modificar</a></td> </tr>';
}
    echo $contenido;
}else if($num == 1){
    
$equipo =$_POST['equipo'];

$sql4 = "SELECT j.Nombre, j.Apellido, e.Nombre, j.DNI from Jugadores j join Equipos e on e.Id_equipo = j.Cod_equipo WHERE e.Nombre= '".$equipo."'";

$consulta4 = mysqli_query($conexion,$sql4);

$i=0;
while($fila4 = mysqli_fetch_array($consulta4)){
$i++;
    $contenido .= '<tr><td>'.$i.'</td><td>'.$fila4[0].'</td> <td>'.$fila4[1].'</td><td>'.$fila4[2].'</td><td>'.$fila4[3].'</td> <td>  <a class="btn btn-danger btn-small" href="#"> <i class="icon-remove-sign icon-large"></i> Eliminar</a> <a class="btn btn-small btn-info" href="#"> <i class="icon-edit icon-large"></i> Modificar</a></td> </tr>';
} 
    echo $contenido;
}else if($num == 2){
    
    
    $nombre2 =$_POST['nombre2'];
$apellido2 =$_POST['apellido2'];
      $dni =$_POST['dni'];

$sql4 = "UPDATE Jugadores SET Nombre='".$nombre2."' , Apellido='".$apellido2."' WHERE DNI='".$dni."'";

$consulta4 = mysqli_query($conexion,$sql4);


}else if($num == 3){

$dni =$_POST['dni'];
$nombre =$_POST['nombre'];
$apellido =$_POST['apellido'];
      
$fecha_inscripcion =$_POST['fecha_inscripcion'];
$equipo = $_POST['equipo'];
    
    $sql = "SELECT Id_equipo from Equipos  WHERE Nombre='".$equipo."' ";
    
    $consulta4 = mysqli_query($conexion,$sql);
    $equipo=  mysqli_fetch_array($consulta4);
    
    $sql2 = "INSERT INTO Jugadores (DNI,Nombre,Apellido,Fecha_inscripcion,Cod_equipo) VALUES ('".$dni."', '".$nombre."','".$apellido."','".$fecha_inscripcion."',".$equipo[0].") ";
     $consulta = mysqli_query($conexion,$sql2);

}else if($num == 4){
    $dni =$_POST['dni'];
    $sql = "DELETE from Jugadores where DNI = '".$dni."'";
    $consulta = mysqli_query($conexion,$sql);
     
}

?>