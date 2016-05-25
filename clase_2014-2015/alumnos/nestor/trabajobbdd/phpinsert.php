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

     $query = "INSERT INTO productos (id_producto, nom_producto, personaje, imagen, precio_yen, precio_dol, precio_eur, id_fabricante, id_origen)
VALUES ('$varid', '$varname', '$varcharacter', '$varimage', $varyen, $vardolar, $vareuro, $varmanufacturer, $varorigin)";


    //the usuario table should exist in your database
	$result = mysqli_query($conexion,$query);
	
	
	echo "<h3>Insert Successful</h3>";

mysqli_close($conexion);

?>
