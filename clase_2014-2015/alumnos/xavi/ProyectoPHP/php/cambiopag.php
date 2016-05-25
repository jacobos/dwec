<?php


$cambiopag =   $_POST['cambiopag'];





if($cambiopag == 0){
 
include '../inicio.php';
    
}else if($cambiopag == 1){
    
include '../categorias.php'; 

}else if($cambiopag == 2){
    include '../jugadores.php'; 
}else if($cambiopag == 3){
    include '../cuerpotecnico.php'; 
}
   
  

?>