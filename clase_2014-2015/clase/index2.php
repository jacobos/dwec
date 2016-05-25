<?php

session_start();

// ***************************************** //
// **********	DECLARE VARIABLES  ********** //
// ***************************************** //

$username = 'jacobo';
$password = 'jac0b0dificil';

$random1 = 'secret_key1';
$random2 = 'secret_key2';

$hash = md5($random1.$pass.$random2); 

$self = $_SERVER['REQUEST_URI'];


// ************************************ //
// **********	USER LOG/OUT  ********** //
// ************************************ //

if(isset($_GET['logout']))
{
	unset($_SESSION['login']);
}


// ******************************************* //
// **********	USER IS LOGGED IN	********** //
// ******************************************* //

if (isset($_SESSION['login']) && $_SESSION['login'] == $hash) {
    
?>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="styles/style.css">
<style>

h2 {
  font: 400 40px/1.5 Helvetica, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}
 
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
 
li {
  font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
  border-bottom: 1px solid #ccc;
}
 
li:last-child {
  border: none;
}
 
#linkxm {
  text-decoration: none;
  color: #eee;
  display: block;
 
  -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
  -moz-transition: font-size 0.3s ease, background-color 0.3s ease;
  -o-transition: font-size 0.3s ease, background-color 0.3s ease;
  -ms-transition: font-size 0.3s ease, background-color 0.3s ease;
  transition: font-size 0.3s ease, background-color 0.3s ease;
}

    .linki, .dir{
	margin-left:5px;
	padding: 5px 15px;
    background: #4479BA;
    color: #FFF;
	-webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    border: solid 1px #20538D;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);
}
.linki:hover, .linki:focus , .dir:hover, .dir:focus {
    background: #356094;
    border: solid 1px #2A4E77;
    text-decoration: none;
    -webkit-transition-duration: 0.2s;
    -moz-transition-duration: 0.2s;
    transition-duration: 0.2s;
}
.linki:active , .dir:active{
    -webkit-box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.6);
    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.6);
    background: #2E5481;
    border: solid 1px #203E5F;
}

    .check{
position:absolute;
top:0;
right:0;
background-color:#ff0;
color:black;}

#linkxm:hover {
  font-size: 30px;
  color: #333;
}
</style>
</head>
<body>
<div class="linki check">
<a href="http://www.jslint.com/">Check your code</a>
</div>
<?php 
function endswith($string, $test) {
    $strlen = strlen($string);
    $testlen = strlen($test);
    if ($testlen > $strlen) return false;
    return substr_compare($string, $test, $strlen - $testlen, $testlen) === 0;
}

$d = dir(getcwd());
while (($file = $d->read()) !== false){ 
	if($file != "wall_ball.jpg" && $file != "jquery-ui.css" && $file != "jquery-ui.js" && $file != "jquery-1.9.1.js" && $file != "." && $file != ".." && $file != "index.php" &&  $file != "index2.php" && $file != "styles" && $file != "Libro1erTrimDAW.xlsx" && $file != "Classes" && $file != "faltas1er.php" && $file != "faltas.html" && $file != "insert.php" && $file != "alumn.html")
	{
		if(is_dir($file))
			echo '<script> var app = document.createElement("div");var api = document.createElement("a");app.appendChild(api);var api2 = document.createTextNode("'.$file.'"); api.appendChild(api2); document.body.children[0].parentNode.insertBefore(app, document.body.children[0]); api.setAttribute("class", "dir"); api.setAttribute("href", "'.$file.'"); </script>'; 
		else{
			if($file == "upload_exercises.html")
				echo '<script> var app = document.createElement("div");var api = document.createElement("a");app.appendChild(api);var api2 = document.createTextNode("'.$file.'"); api.appendChild(api2); document.body.appendChild(app); api.setAttribute("class", "linki upload"); api.setAttribute("href", "'.$file.'"); </script>'; 
			else
                if(!endsWith($file, '.png'))
                    $dirs[]=$file;
		}
	}
}
sort($dirs);
$textos = '';
for($i = 0; $i < count($dirs); $i++){
    $textos .= '<div><a class="linki" href="'.$dirs[$i].'" target="_blank">'.$dirs[$i].'</a><a href="?delete='.$dirs[$i].'">Borrar</a></div>';

}
    if (isset($_GET['delete'])) {
        unlink($_GET['delete']);
        $page = $_SERVER['PHP_SELF'];
        $sec = "2";
        header("Refresh: $sec; url=$page");
    }

$d->close(); 
echo $textos; 
    ?>

<?php
//$file = "http://courseware.codeschool.com/javascript-roadtrip/js1.pdf";
//echo '<script> var app = document.createElement("div");var api = document.createElement("a");app.appendChild(api);var api2 = document.createTextNode("JS1 (codeschool, graphic)"); api.appendChild(api2); document.body.appendChild(app); api.setAttribute("class", "linki lonk"); ;api.setAttribute("href", "'.$file.'"); </script>'; 

//$file = "http://courseware.codeschool.com/javascript-roadtrip/js2.pdf";
//echo '<script> var app = document.createElement("div");var api = document.createElement("a");app.appendChild(api);var api2 = document.createTextNode("JS2 (codeschool, graphic)"); api.appendChild(api2); document.body.appendChild(app); api.setAttribute("class", "linki lonk");api.setAttribute("href", "'.$file.'"); </script>'; 

//$file = "http://courseware.codeschool.com.s3.amazonaws.com/cssxcountry_slides.pdf";
//echo '<script> var app = document.createElement("div");var api = document.createElement("a");app.appendChild(api);var api2 = document.createTextNode("CSS, Image Cropping, slides:126-136"); api.appendChild(api2); document.body.appendChild(app); api.setAttribute("class", "linki lonk");api.setAttribute("href", "'.$file.'"); </script>'; 

//$file = "http://it-ebooks.info/book/447/";
echo "<!-- http://it-ebooks.info/book/447/ -->";
//echo '<script> var app = document.createElement("div");var api = document.createElement("a");app.appendChild(api);var api2 = document.createTextNode("CANVAS book"); api.appendChild(api2); document.body.appendChild(app); api.setAttribute("class", "linki lonk");api.setAttribute("href", "'.$file.'"); </script>'; 
//$file = "9/Nov Exercises, 12/Nov Exam";
//echo '<script> var app = document.createElement("div");var api = document.createElement("a");app.appendChild(api);var api2 = document.createTextNode("'.$file.'"); api.appendChild(api2); document.body.appendChild(app); api.setAttribute("class", "linki faltas");  </script>'; 

?>

 <div style="float:right"><a href="?logout=true">Logout</a></div>
</body>
</html>

<?php
}


// *********************************************** //
// **********	FORM HAS BEEN SUBMITTED	********** //
// *********************************************** //

else if (isset($_POST['submit'])) {

	if ($_POST['username'] == $username && $_POST['password'] == $password){
	
		//IF USERNAME AND PASSWORD ARE CORRECT SET THE LOG-IN SESSION
		$_SESSION["login"] = $hash;
		header("Location: $_SERVER[PHP_SELF]");
		
	} else {
		
		// DISPLAY FORM WITH ERROR
		display_login_form();
		echo '<p>Username or password is invalid</p>';
		
	}
}	
	
	
// *********************************************** //
// **********	SHOW THE LOG-IN FORM	********** //
// *********************************************** //

else { 

	display_login_form();

}


function display_login_form(){ ?>

	<form action="<?php echo $self; ?>" method='post'>
	<label for="username">username</label>
	<input type="text" name="username" id="username">
	<label for="password">password</label>
	<input type="password" name="password" id="password">
	<input type="submit" name="submit" value="submit">
	</form>	

<?php } ?>



