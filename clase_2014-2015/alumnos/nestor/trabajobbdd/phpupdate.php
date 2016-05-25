<?php

    $varid = $_POST['productid'];
    $varname = $_POST['productname'];
    $varcharacter = $_POST['charactername'];
    $varimage = $_POST['imagepath'];
    $varyen = $_POST['yenprice'];
    $vardolar = $_POST['dolarprice'];
    $vareuro = $_POST['europrice'];
    $varmanufacturer = $_POST['manufacturer'];
    $varorigin = $_POST['origin'];


    include('conexion.php');

     $query = "update productos set nom_producto = '$varname', personaje = '$varcharacter', imagen = '$varimage',
      precio_yen = $varyen, precio_dol = $vardolar, precio_eur = $vareuro, id_fabricante = $varmanufacturer, id_origen = $varorigin     
	  where id_producto = '$varid'";


    //the usuario table should exist in your database
	$result = mysqli_query($conexion,$query);
	
	
	echo "<h3>Update Successful</h3>";

mysqli_close($conexion);

?>
