<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles/style.css">
</head>
<body>

    <div class="check">
        <a class="linki2 checkc" target="_blank" href="http://www.jslint.com/">JSLint (Check your code) </a>
        <a class="linki2 checkc" href="http://jslinterrors.com/" target="_blank">JSLint errors</a>
        <a class="linki2 checkc" href="exercises.html" target="_blank">Exercises</a>
    </div>
<?php 

$textos = '';

function endswith($string, $test) {
    $strlen = strlen($string);
    $testlen = strlen($test);
    if ($testlen > $strlen) return false;
    return substr_compare($string, $test, $strlen - $testlen, $testlen) === 0;
}


$d = dir(getcwd());
while (($file = $d->read()) !== false){ 
	if($file != "wall_ball.jpg" && $file != "jquery-ui.css" && $file != "jquery-ui.js" && $file != "jquery-1.9.1.js" && $file != "." && $file != ".." && $file != "index.php" && $file != "exercises.html" &&  $file != "index2.php" && $file != "styles" && $file != "Libro1erTrimDAW.xlsx" && $file != "Classes" && $file != "faltas1er.php" && $file != "faltas.html" && $file != "insert.php" && $file != "alumn.html")
	{
		if(is_dir($file))
			$textos .='<div><a class="dir" href="'.$file.'" target="_blank">'.$file.'</a></div>';
//        echo '<script> var app = document.createElement("div");var api = document.createElement("a");app.appendChild(api);var api2 = document.createTextNode("'.$file.'"); api.appendChild(api2); document.body.children[0].parentNode.insertBefore(app, document.body.children[0]); api.setAttribute("class", "dir"); api.setAttribute("href", "'.$file.'"); </script>'; 
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
for($i = 0; $i < count($dirs); $i++){
    $textos .= '<div><a class="linki" href="'.$dirs[$i].'" target="_blank">'.$dirs[$i].'</a></div>';

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


</body>
</html>