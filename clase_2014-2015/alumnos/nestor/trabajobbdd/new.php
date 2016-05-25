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
                        <h1>New Entry</h1>


<form class="form-horizontal">

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Product ID</label> 
  <div class="col-md-4">
  <input id="productid" max="5" type="text" placeholder="Product ID" class="form-control input-md">  
  </div>
</div>

<!-- Textarea -->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Product Name</label>
  <div class="col-md-4">                     
    <textarea id="productname" class="form-control">Product Name</textarea>
  </div>
</div>

<!-- Text input-->
<div class="form-group"> 
  <label class="col-md-4 control-label" for="textinput">Character Name</label> 
  <div class="col-md-4">
  <input id="charactername" type="text" placeholder="Character Name" class="form-control input-md">  
  </div>
</div>

<!-- Text input-->
<div class="form-group"> 
  <label class="col-md-4 control-label" for="textinput">Image Path</label>
  <div class="col-md-4">
  <input id="imagepath" type="text" placeholder="Image Path" class="form-control input-md">  
  </div>
</div>

<!-- Text input number-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Yen Price</label>
  <div class="col-md-4">
  <input id="yenprice" type="number" placeholder="¥" class="form-control input-md"> 
  </div>
</div>

<!-- Text input number-->
<div class="form-group"> 
  <label class="col-md-4 control-label" for="textinput">Dolar Price</label>
  <div class="col-md-4">
  <input id="dolarprice" type="number" placeholder="$" class="form-control input-md"> 
  </div>
</div>

<!-- Text input number-->
<div class="form-group"> 
  <label class="col-md-4 control-label" for="textinput">Euro Price</label>
  <div class="col-md-4">
  <input id="europrice" type="number" placeholder="€" class="form-control input-md"> 
  </div>
</div>

<!-- Select Basic -->
<div class="form-group">
  <label class="col-md-4 control-label" for="selectbasic">Manufacturer</label>
  <div class="col-md-4">
    <select id="manufacturer" class="form-control">
      <option value="1">Good Smile Company</option>
      <option value="2">Bandai</option>
    </select>
  </div>
</div>

<!-- Select Basic -->
<div class="form-group">
  <label class="col-md-4 control-label" for="selectbasic">Origin</label>
  <div class="col-md-4">
    <select id="origin" class="form-control">
      <option value="1">Sekai Seifuku Souryaku no Zvezda</option>
      <option value="2">VOCALOID</option>
      <option value="3">Love Live!</option>
      <option value="4">Persona 3</option>
    </select>
  </div>
</div>
</form>

<!-- Button -->
<div class="form-group">
	<label class="col-md-4 control-label" for="singlebutton"></label>
  <div class="col-md-4">
    <button id="btninsert" class="btn btn-primary">Send</button>
  </div>
</div>


	<div id="answer"></div>

                        
                    </div>
                </div>
            </div>
        </div>
        <!-- /#page-content-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
   <!-- <script src="js/bootstrap.min.js"></script> -->

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
	
	$('#btninsert').on("click", function(e) {
		
		var id = $('#productid').val();
		var name = $('#productname').val();
		var character = $('#charactername').val();
		var image = $('#imagepath').val();
		var yen = $('#yenprice').val();
		var dolar = $('#dolarprice').val();
		var euro = $('#europrice').val();
		var manufacturer = $('#manufacturer').val();
		var origin = $('#origin').val();

		$.ajax({
                    type: "POST",
                    url: "phpinsert.php",
                    data: {
                        productid: id,
                        productname: name,
                        charactername: character,
                        imagepath: image,
                        yenprice: yen,
                        dolarprice: dolar,
                        europrice: euro,
                        manufacturer: manufacturer,
                        origin: origin
                    },
                    success: function (r) {
                        $('.col-lg-12').prepend(r);
                    }

                });
            });

    </script>
    
    <!-- Ajax <script type="text/javascript" src="ajaxinsert.js"></script> -->
    

</body>

</html>
