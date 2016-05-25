<?php 
$tam;

$extensiones = array("gif","png","jpg");
$temp =  explode(".",$_FILES["fichero"]["name"]);
$extension= end($temp);

if($extension == "gif" || $extension == "png"||$extension == "jpg"){
   if($_FILES["fichero"]["error"]>0){

echo "Error: ".$_FILES["fichero"]["error"]."<br>";
    
}else{

    echo "Nombre del fichero:".$_FILES["fichero"]["name"]."<br>";
    echo "Tipo: ".$_FILES["fichero"]["type"]."<br>";
    
    echo "Tamano:".($_FILES["fichero"]["size"]/1024). "KB<br>";
    $tam = $_FILES["fichero"]["size"]/1024;
    echo "Guardado en : ".$_FILES["fichero"]["tmp_name"];
       
}
if(file_exists("../images/".$_FILES["fichero"]["name"])){
echo $_FILES["fichero"]["name"] ."<br>Ya existe";
    header ("Location: http://www.franciscoalfonso.tk/Proyectojacobo/www/index.html");

}else{

move_uploaded_file($_FILES["fichero"]["tmp_name"], "../images/".$_FILES["fichero"]["name"]);
    
echo "Fichero guardado en : images".$_FILES["fichero"]["name"];
header ("Location: http://www.franciscoalfonso.tk/Proyectojacobo/www/index.html");
                   }
}else{
echo "la extension no esta permitida";
}



?>