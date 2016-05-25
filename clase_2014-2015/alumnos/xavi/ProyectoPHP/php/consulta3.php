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
$sql4 = "SELECT c.Nombre, c.Apellido, e.Nombre, c.Tipo from Cuerpo_tecnico c join Equipos e on e.Entrenador = c.id_cptec or e.Delegado=c.id_cptec WHERE c.Nombre='".$nombre."' and  c.Apellido='".$apellido."'";

$consulta4 = mysqli_query($conexion,$sql4);

$i=0;
while($fila4 = mysqli_fetch_array($consulta4)){
$i++;
    $contenido .= '<tr><td>'.$i.' </td><td>'.$fila4[0].'</td> <td>'.$fila4[1].'</td><td>'.$fila4[2].'</td><td>'.$fila4[3].'</td><td> <a class="btn btn-small btn-info" href="#"> <i class="icon-edit icon-large"></i> Modificar</a></td> </tr>';
}
    echo $contenido;
}else if($num == 1){
    
$equipo =$_POST['equipo'];

$sql4 = "SELECT c.Nombre, c.Apellido, e.Nombre, c.Tipo from Cuerpo_tecnico c join Equipos e on e.Entrenador = c.id_cptec or e.Delegado=c.id_cptec WHERE e.Nombre='".$equipo."'";

$consulta4 = mysqli_query($conexion,$sql4);

$i=0;
while($fila4 = mysqli_fetch_array($consulta4)){
$i++;
    $contenido .= '<tr><td>'.$i.'</td><td>'.$fila4[0].'</td> <td>'.$fila4[1].'</td><td>'.$fila4[2].'</td><td>'.$fila4[3].'</td> <td> <a class="btn btn-small btn-info" href="#"> <i class="icon-edit icon-large"></i> Modificar</a></td> </tr>';
} 
echo $contenido;
}else if($num == 2){
    
    
      $nombre2 =$_POST['nombre2'];
$apellido2 =$_POST['apellido2'];
              $nombre =$_POST['nombre'];
$apellido =$_POST['apellido'];
      $funcion =$_POST['funcion'];

$sql4 = "UPDATE Cuerpo_tecnico SET Nombre='".$nombre2."' , Apellido='".$apellido2."' WHERE Tipo='".$funcion."' and Nombre='".$nombre."' and Apellido= '".$apellido."' ";

$consulta4 = mysqli_query($conexion,$sql4);


}

?>