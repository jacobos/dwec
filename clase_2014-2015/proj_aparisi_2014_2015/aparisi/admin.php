<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, maximum-scale=1">
<title>SuperCar</title>
<link rel="icon" href="favicon.png" type="image/png">
<link href="css/bootstrap.css" rel="stylesheet" type="text/css">
<link href="css/style.css" rel="stylesheet" type="text/css"> 
<link href="css/font-awesome.css" rel="stylesheet" type="text/css"> 
<link href="css/animate.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="js/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="js/jquery-scrolltofixed.js"></script>
<script type="text/javascript" src="js/jquery.nav.js"></script> 
<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="js/jquery.isotope.js"></script>
<script type="text/javascript" src="js/wow.js"></script> 
<script type="text/javascript" src="js/custom.js"></script>
<!--[if lt IE 9]>
    <script src="js/respond-1.1.0.min.js"></script>
    <script src="js/html5shiv.js"></script>
    <script src="js/html5element.js"></script>
<![endif]-->
    
<link rel="stylesheet" href="css/bootstrap-responsive.css">    
<script>
        window.jQuery || document.write('<script src="js/jquery-1.11.1.min.js"><\/script>')
</script>
<script src="js/bootstrap.js"></script>
<script src="js/modernizr-2.6.2.min.js"></script>  
<!-- links para tabla   -->
<script data-require="angular.js@*" data-semver="1.2.3" src="http://code.angularjs.org/1.3.14/angular.js"></script>
<script data-require="ng-table@*" data-semver="0.3.1" src="http://bazalt-cms.com/assets/ng-table/0.3.1/ng-table.js"></script>
<link data-require="ng-table@*" data-semver="0.3.0" rel="stylesheet" href="http://bazalt-cms.com/assets/ng-table/0.3.1/ng-table.css" />
<link rel="stylesheet" href="css/styletable.css" />
<script src="js/admin.js"></script>
</head>
<body ng-app="main" >

<!--Header_section-->
<header id="header_wrapper">
  <div class="container">
    <div class="header_box">
      <div class="logo"><a href="#"><img src="img/logo.png" alt="logo"></a></div>
	  <nav class="navbar navbar-inverse" role="navigation">
      <div class="navbar-header">
        <button type="button" id="nav-toggle" class="navbar-toggle" data-toggle="collapse" data-target="#main-nav"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
        </div>
	    <div id="main-nav" class="collapse navbar-collapse navStyle">
			<ul class="nav navbar-nav" id="mainNav">
			  <li class="active"><a href="#hero_section" class="scroll-link">INICIO</a></li>
			  <li><a href="#aboutUs" class="scroll-link">CLIENTES</a></li>
			  <li><a href="#service" class="scroll-link">COCHES</a></li>
			  <li><a href="#Portfolio" class="scroll-link">PIEZAS</a></li>
			  <li><a href="#clients" class="scroll-link">REPARACIONES</a></li>
			  <li><a href="#team" class="scroll-link">FACTURAS</a></li>
			  <li><a href="#contact" class="scroll-link">CONTACTO</a></li>
			</ul>
      </div>
	 </nav>
    </div>
  </div>
</header>
<!--Header_section--> 

<!--Hero_Section-->
<section id="hero_section" class="top_cont_outer">
  <div class="hero_wrapper">
    <div class="container">
      <div class="hero_section">
        <div class="row">
          <div class="col-lg-5 col-sm-7">
            <div class="top_left_cont zoomIn wow animated"> 
              <h2>Administración <strong> SuperCar</strong></h2>
              <p>Añade, Modifica, Elimina y Busca clientes, Reparaciones, Piezas, Fcaturas, Coches de los clientes.</p>
              <a href="#aboutUs" class="read_more2">Leer Mas</a> </div>
          </div>
          <div class="col-lg-7 col-sm-5">
			<img src="img/coche2.png" class="zoomIn wow animated" alt="" />
		  </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!--Hero_Section--> 

<section id="aboutUs" style="background-image: url(img/bg1.jpg);" ng-controller="DemoCtrl"><!--Aboutus-->
<div class="inner_wrapper" >
  <div class="container">
    <h2>Clientes</h2>
    <div class="inner_section">
	<div class="row">
      	<div class=" col-lg-12 col-md-12 col-sm-12 col-xs-12 pull-left">
        	<div class=" delay-01s animated fadeInDown wow animated">
            
			<table ng-table="tableParams" show-filter="true" style="color:black;" class="table ng-table-rowselected">
                <tr ng-repeat="user in $data" ng-click="user.selected = !user.selected; changeSelection(user)" ng-class="{'active': user.selected}">
                    <td data-title="'DNI'" header-class="text-left" sortable="'dni'" filter="{ 'dni': 'text' }">
                        {{user.dni}}
                    </td>
                    <td data-title="'NOMBRE'" header-class="text-left" sortable="'nombre'" filter="{ 'nombre': 'text' }">
                        {{user.nombre}}
                    </td>
                    <td data-title="'APELLIDOS'" header-class="text-left" sortable="'apellidos'" filter="{ 'apellidos': 'text' }">
                        {{user.apellidos}}
                    </td>
                    <td data-title="'USUARIO'" header-class="text-left" sortable="'usuario'" filter="{ 'usuario': 'text' }">
                        {{user.usuario}}
                    </td>
                    <td data-title="'CONTRASEÑA'" header-class="text-left" sortable="'password'" filter="{ 'password': 'text' }">
                        {{user.password}}
                    </td>
                    <td data-title="'EMAIL'" header-class="text-left" sortable="'email'" filter="{ 'email': 'text' }">
                        {{user.email}}
                    </td>
                    <td data-title="'DIRECCION'" header-class="text-left" sortable="'direccion'" filter="{ 'direccion': 'text' }">
                        {{user.direccion}}
                    </td>
                    <td data-title="'CODIGOPOSTAL'" header-class="text-left" sortable="'codigopostal'" filter="{ 'codigopostal': 'text' }">
                        {{user.codigopostal}}
                    </td>
                    <td data-title="'TELEFONO'" header-class="text-left" sortable="'telefono'" filter="{ 'telefono': 'text' }">
                        {{user.telefono}}
                    </td>
                    <td data-title="'IMAGEN'" header-class="text-left" sortable="'imagen'" filter="{ 'imagen': 'text' }">
                        {{user.imagen}}
                    </td>
                    <td data-title="'ACCIONES'" width="200">
                    <a ng-if="!user.$edit" href="" class="btn btn-default btn-xs" ng-click="user.$edit = true">EDITAR</a>
                    </td>
                </tr>
            </table>
                
            </div> 
	   </div>  	
      </div>
	  
      
    </div>
  </div> 
  </div>
</section>
<!--Aboutus--> 


<!--Service-->
<section  id="service">
  <div class="container">
    <h2>COCHES</h2>
    <div class="service_wrapper">
      <div class="row">
      	<div class=" col-lg-7 col-md-7 col-sm-7 col-xs-12 pull-left">
        	<div class=" delay-01s animated fadeInDown wow animated">
			tabla coches
            </div> 
	   </div>  	
      </div>
    </div>
  </div>
</section>
<!--Service-->




<!-- Portfolio -->
<section id="Portfolio" class="content"> 
   <div class="container">
    <h2>PIEZAS</h2>
    <div class="inner_section">
	<div class="row">
      	<div class=" col-lg-7 col-md-7 col-sm-7 col-xs-12 pull-left">
        	<div class=" delay-01s animated fadeInDown wow animated">
			tabla piezas
            </div> 
	   </div>  	
      </div>
	  
      
    </div>
  </div> 
</section>
<!--/Portfolio --> 

<section class="page_section" id="clients" style=" background: #df0031;"><!--page_section-->
 <div class="container">
    <h2>REPARACIONES</h2>
    <div class="inner_section">
	<div class="row">
      	<div class=" col-lg-7 col-md-7 col-sm-7 col-xs-12 pull-left">
        	<div class=" delay-01s animated fadeInDown wow animated">
			tabla piezas
            </div> 
	   </div>  	
      </div>
	  
      
    </div>
  </div> 
</section>
<!--client_logos-->

<section class="page_section team" id="team" style="background-image: url(img/bg1.jpg);" >
    <div class="container">
    <h2>FACTURAS</h2>
    <div class="inner_section">
	<div class="row">
      	<div class=" col-lg-7 col-md-7 col-sm-7 col-xs-12 pull-left">
        	<div class=" delay-01s animated fadeInDown wow animated">
			tabla facturas
            </div> 
	   </div>  	
      </div>
	  
      
    </div>
  </div> 
</section>
<!--/Team-->
<!--Footer-->
<footer class="footer_wrapper" id="contact">
   <div class="container">
    <h2>FACTURAS</h2>
    <div class="inner_section">
	<div class="row">
      	<div class=" col-lg-7 col-md-7 col-sm-7 col-xs-12 pull-left">
        	<div class=" delay-01s animated fadeInDown wow animated">
			tabla facturas
            </div> 
	   </div>  	
      </div>
	  
      
    </div>
  </div> 
</footer>
</body>
</html> ��