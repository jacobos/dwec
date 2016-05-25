<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Néstor's Figures Database</title>
    
    <!-- JQuery -->
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/simple-sidebar.css" rel="stylesheet">

    <!-- My Rules CSS -->
    <link href="css/myrules.css" rel="stylesheet">

</head>

<body>

    <?php include( 'conexion.php'); ?>

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
                        <h1>Origin</h1>
                        <p>List of series, books, films or comics from where the products appear. If you click the name of the origin it will appear a list of related products.</p>

                        <table class="table data">
                            <tbody>

                                <?php $query1="SELECT nom_origen FROM origen"; 
                                $ej_query1=mysqli_query($conexion, $query1); 
                                while ($orig=mysqli_fetch_array($ej_query1)) { ?>

                                <?php echo '
        <tr>
          <th scope="row"></th>
          <th class="orig">' . $orig[0] . '</th>
        </tr>'; } ?>


                            </tbody>
                        </table>


                        <?php mysqli_close($conexion); ?>

                    </div>
                </div>
            </div>
        </div>
        <!-- /#page-content-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <!-- <script src="js/jquery.js"></script> -->

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Menu Toggle Script -->
    <script>
        var derecha = true;
        var str = "";
        var row;
        var exist = false;

        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
            if (derecha == true) {
                $("#menu-toggle").css("-webkit-transform", "rotate(180deg)");
                derecha = false;
            } else {
                $("#menu-toggle").css("-webkit-transform", "rotate(0deg)");
                derecha = true;
            }
        });

        $('.orig').bind("click", function () {
            str = $(this).text();
            str = str.trim();
			row = $(this);
			
			if (exist == false) {
           $.ajax({
                type: "POST",
                url: "phporigin.php",
                data: {
                    origin: str
                },
                success: function (r) {
                    row.append(r);
                }
            });
            exist = true;
		}else if (exist == true) {
				exist = false;
				row.children().remove();			
		}

        });
    </script>

</body>

</html>
