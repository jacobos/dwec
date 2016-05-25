<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="../styles/style.css">
</head>
<body>

<?php 
$d = dir(getcwd());
$arri = array();

while (($file = $d->read()) !== false){ 
	$arri[] = $file;
}
sort($arri);

for($i = 0; $i < count($arri); $i++){
	$file = $arri[$i];
//while (($file = $d->read()) !== false){ 
	if($file != "." && $file != ".." && $file != "index.php" && $file != "styles" && $file != "boilerplate.html")
	{
		if (preg_match("/.html/i", $file)) {
			if(is_dir($file))
				echo '<script> var app = document.createElement("div");var api = document.createElement("a");app.appendChild(api);var api2 = document.createTextNode("'.$file.'"); api.appendChild(api2); document.body.children[0].parentNode.insertBefore(app, document.body.children[0]); api.setAttribute("class", "dir"); api.setAttribute("href", "'.$file.'"); </script>'; 
			else
				echo '<script> var app = document.createElement("div");var api = document.createElement("a");app.appendChild(api);var api2 = document.createTextNode("'.$file.'"); api.appendChild(api2); document.body.appendChild(app); api.setAttribute("class", "linki"); api.setAttribute("href", "'.$file.'"); </script>'; 
		}
		else if($file == "DOM_methods_properties_short.png"){
				echo '<script> var app = document.createElement("div");var api = document.createElement("a");app.appendChild(api);var api2 = document.createTextNode("'.$file.'"); api.appendChild(api2); document.body.appendChild(app); api.setAttribute("class", "dir"); api.setAttribute("href", "'.$file.'"); </script>'; 		
		}
	}
} 
$d->close(); 
?>
</body>
</html>