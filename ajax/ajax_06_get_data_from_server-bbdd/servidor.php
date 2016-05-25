<?php
	$var0 = $_POST['sel'];
	$var1 = $_POST['variable1'];
  $var2 = $_POST['variable2'];
	$devuelve = "";
	error_reporting(E_ERROR | E_PARSE);


	if($var0 == "sel"){
		$mysqli = new mysqli("localhost", "solvam", "solvam", "solvam");
		$result = $mysqli->query("SHOW TABLES");
		while ( $row = $result->fetch_row() ){
			$tableNames = $row[0];
			echo '<option value="'.$tableNames.'">'.$tableNames.'</option>';
		}
		exit;
	}

	$con=mysqli_connect("localhost", "solvam", "solvam", "solvam") or die('{"devuelve": "Error en conexion a la DB"}');

	$mysqli = new mysqli("localhost", "solvam", "solvam", "solvam");
	if($var1 == "All"){

		$result = $mysqli->query("SHOW TABLES");
		$devuelve .= "<h3>TABLES</h3>";
		while ( $row = $result->fetch_row() ){
	    $tableNames = $row[0];
	 		$devuelve .= $tableNames.'<br>';
			$result1 = $mysqli->query("SELECT * FROM $tableNames");
			$amountOfRows = 1;
			if($result1) {
	    	$devuelve .= '<table cellpadding="0" cellspacing="0" border=1>';
	  		$column = $mysqli->query("SHOW COLUMNS FROM $tableNames");
				$devuelve .= '<tr>';
	  		while($row3 = $column->fetch_row() ) {
	  			$devuelve .= '<th>'.$row3[0].' </th>';
				}
				$devuelve .= '</tr>';
	    	while($row2 = $result1->fetch_row() ) {
					$amountOfRows++;
					$devuelve .= '<tr>';
	    		foreach($row2 as $key=>$value) {
	  				$devuelve .= '<td>'.$value.'</td>';
					}
					$devuelve .= '</tr>';
					if($amountOfRows > 30)
					break;
				}
				$devuelve .= '</table><br />';
			}
		}
		$respuesta['devuelve'] = utf8_encode($devuelve); //encode it to utf8 because of ´s-Hertogenbosch
		echo json_encode($respuesta); // we return it as an object
		exit;
	}

	$result1 = $mysqli->query("SELECT * FROM $var1");
	$amountOfRows = 1;
	if($result1) {
		$devuelve .= '<table cellpadding="0" cellspacing="0" border=1>';
		$column = $mysqli->query("SHOW COLUMNS FROM $var1");
		$devuelve .= '<tr>';
		while($row3 = $column->fetch_row() ) {
			$devuelve .= '<th>'.$row3[0].' </th>';
		}
		$devuelve .= '</tr>';
		while($row2 = $result1->fetch_row() ) {
			$amountOfRows++;
			$devuelve .= '<tr>';
			foreach($row2 as $key=>$value) {
				$devuelve .= '<td>'.$value.'</td>';
			}
			$devuelve .= '</tr>';
			if($amountOfRows > 10)
			break;
		}
		$devuelve .= '</table><br />';
	}
/*
	$counter = 1;
	//the usuario table should exist in your database
	$result = mysqli_query($con,"SELECT * FROM City");
	$devuelve .= "<table border=1>";

	$devuelve .= "<tr><td> " . "ID" . "</td>";
	$devuelve .= "<td> " . "Name" . "</td>";
	$devuelve .= "<td> " . "CountryName" . "</td></tr>";
	while($row = mysqli_fetch_array($result))
	{
		$counter++;
		// name and number are the columns you have in the people table
		$devuelve .= "<tr><td> " . $row['ID'] . "</td>";
		$devuelve .= "<td> " . $row['Name'] . "</td>";
		$devuelve .= "<td> " . $row['CountryCode'] . "</td></tr>";
		if($counter > 20)
			break;
	}
	$devuelve = $devuelve."</table>";
*/
    // Array with the answer
		$respuesta['devuelve'] = utf8_encode($devuelve); //encode it to utf8 because of ´s-Hertogenbosch
		echo json_encode($respuesta); // we return it as an object

?>
