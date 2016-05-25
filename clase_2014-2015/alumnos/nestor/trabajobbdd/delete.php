<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Néstor's Figures Database</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/simple-sidebar.css" rel="stylesheet">
    
    <!-- My Rules CSS -->
    <link href="css/myrules.css" rel="stylesheet">

</head>

<body>
	<?php 
		include('conexion.php');
	?>

    <div id="wrapper">

        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="index.php">
                        Néstor's Figures Database 
                    </a>
                </li>
                <li>
                    <a href="index.php">Figures</a>
                </li>
                <li>
                    <a href="manufacturers.php">Manufacturers</a>
                </li>
                <li>
                    <a href="origin.php">Origin</a>
                </li>
                <li>
                    <a href="new.php">New Entry</a>
                </li>
                <li>
                    <a href="update.php">Update</a>
                </li>
                <li>
                    <a href="delete.php">Delete</a>
                </li>
                <li>
                    <a href="contact.php">Contact</a>
                </li>
            </ul>
        </div>
        <div id="hider">
        <img href="#menu-toggle" class="btn btn-default" id="menu-toggle" src="img/arrow.png" />
        </div>
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <h1>Delete</h1>
                        
        <?php
		  
		  //$query = "select id_producto, nom_producto, personaje, imagen, precio_yen, precio_dol, precio_eur, id_fabricante, id_origen from productos";

            $query = "select p.id_producto, p.nom_producto, p.personaje, o.nom_origen, f.nom_fabricante, p.precio_yen, p.precio_dol, p.precio_eur from productos p, fabricantes f, origen o where f.id_fabricante = p.id_fabricante and o.id_origen = p.id_origen";

//id_producto, nom_producto, personaje, imagen, precio_yen, precio_dol, precio_eur, id_fabricante, id_origen
	
	$ej_query = mysqli_query($conexion, $query);	
//. $fig['imagen'] .
		
		while ($del = mysqli_fetch_array($ej_query)) {      
              
           echo '   
      <table class="table data">
      <tbody>';
	  
		  echo '
        <tr>
          <th>' . $del[0] . '</th>
        </tr>';
        
        echo '
        <tr>
          <th>' . $del[1] . '</th>
        </tr>';
        
        echo '
        <tr>
          <th>' . $del[2] . '</th>
        </tr>';
            
        echo '
        <tr>
          <th>' . $del[3] . '</th>
        </tr>';
            
        echo '
        <tr>
          <th>' . $del[4] . '</th>
        </tr>';
            
        echo '
        <tr>
          <th>' . $del[5] . ' ¥</th>
        </tr>';
            
        echo '
        <tr>
          <th>' . $del[6] . ' $</th>
        </tr>';
            
        echo '
        <tr>
          <th>' . $del[7] . ' €</th>
        </tr>';
            
        echo '
        <tr>
          <th><button id="' . $del[0] . '" class="btn btn-danger delete">Delete</button></th>
        </tr>';
        
        }    
        
        ?>
          
        
      </tbody>
    </table>

    <?php
		mysqli_close($conexion);
    ?>
                    </div> <!-- col-lg-12 -->
                </div>
            </div>
        </div>
        <!-- /#page-content-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Menu Toggle Script -->
    <script>
	var derecha = true;
			
	$("#menu-toggle").click(function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
		if (derecha == true){
			$("#menu-toggle").css("-webkit-transform", "rotate(180deg)");
			derecha = false;
		} else {
			$("#menu-toggle").css("-webkit-transform", "rotate(0deg)");
			derecha = true;
		}	
	});
        
        $('.delete').bind("click", function () {
            str = $(this).attr('id');
            
            $(this).parent().append('<p>Are You sure? <button id="yes" class="btn btn-success">Yes</button><button id="no" class="btn btn-danger">No</button></p>');
            
            $('#yes').bind("click", function (){
                $.ajax({
                type: "POST",
                url: "phpdelete.php",
                data: {
                    delete: str
                },
                success: function (r) {
                    $('.col-lg-12').html(r)
                    }
                });
            console.log("yes");
        });
            
        
        $('#no').bind("click", function (){
            $(this).parent().html('');
            
        console.log("no");
            });
        });
        
        
    </script>

</body>

</html>
