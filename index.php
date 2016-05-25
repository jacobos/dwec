<?php

session_start();

// ***************************************** //
// **********	DECLARE VARIABLES  ********** //
// ***************************************** //

$username = 'jacobo';
$password = 'jac0b0';

$random1 = 'secret_key1';
$random2 = 'secret_key2';

$hash = md5($random1.$pass.$random2); 

$self = $_SERVER['REQUEST_URI'];


// ************************************ //
// **********	USER LOGOUT  ********** //
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
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Solvam DWEC</title>
    <link rel="stylesheet" href="css/jquery-ui.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery-1.10.2.min.js"></script>
    <script src="js/jquery-ui.js"></script>
    <script type="text/javascript" src="js/cliente_accord.js"></script>
    <style>input{float:right }</style>
</head>

<body>
    <div style="position:relative; right: 0; bottom:0; height: 8%; width: 100%; background-color: #aaa; text-align:center;">
        <div id="text1D">
            <textarea id="text1"></textarea>
        </div>
        <div id="setData">
            <p style="padding: 0; border:0">INSERT</p>
        </div>
    </div>
    <div style="clear:both"></div>
    <div id="contenidos" style="position:relative; height: 82%">
    </div>
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

