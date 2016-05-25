<?php
include ('php/conexion.php');
?>
<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="utf-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>
        Inicio
    </title>
    <meta name="robots" content="all" />
    <meta name="keywords" content="Francisco Alfonso, diseño y desarrollo WEB, Valencia, webs, portafolio web, portfolio, freelance, HTML5, CSS3, XHTML ,CSS, W3C, Javascript, estandares web, Dreamweaver, Wordpress, Android, PHP, MySQL" />
    <meta name="description" content="Diseñador Web y programador web en Valencia, ofrezco desarrollos Web a medida para el pequeño y mediano empresario." />
    <meta name="author" content="Francisco Javier Alfonso Serra" />
    <meta name="rating" content="general" />
    <meta name="title" content="Desarrollo Web FCOAL.tk" />
    <meta name="copyright" content="&copy   Francisco Javier Alfonso Serra. Todos los derechos reservados" />
    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/agency.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <!--<link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css" rel="stylesheet">-->
<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
   
    <link href-="font-awesome-4.1.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
    <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
     <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet" />
    <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>
 <script src="js/jquery-1.11.0.js"></script>
<?php
include ('php/conexion.php');
session_start();

if($_SESSION['acceso']=="inicio"){

    $sesion = "iniciada";
    
}else{
   
    session_destroy();
 unset($_SESSION['acceso']);
unset($_SESSION['usuario']);
     $sesion = "cerrada";
}
?>
<body id="page-top" class="index">
<?php

if($sesion == "iniciada"){

include 'paginainicio.php';
    
}else if($sesion=="cerrada"){ 
   
    include 'paginacerrar.php';
     
}

?>
 <div class="modal fade" id="inicio" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"> Iniciar Sesion</h4>
      </div>
      <div class="modal-body" id="bodyalumno">
       <div class="row">
      <div class="col-lg-12 text-center" >
                       <p class="help-block text-danger"></p>
                    
                            <div class="col-md-6 col-md-offset-3 text-center">
                                <div class="form-group">
                                    
                                     <span class="section-heading">Usuario</span><input type="text" class="form-control" placeholder="Usuario" name="usuario" required="true" value="<?php echo  $_COOKIE['usucook1'] ?>">                        </div>
                                <div class="form-group">
                                   <span class="section-heading">Contraseña </span><input type="password"  class="form-control" placeholder="Contraseña" name="contrasena"  required="true" value="<?php echo  $_COOKIE['contcook1'] ?>">
            
                                </div>
                            </div>                        
                    
                </div>
           <div style="display:none" id="bodyregistro">
       <div class="row">
      <div class="col-lg-12 text-center" >
          <hr>
    <h4 class="modal-title" id="myModalLabel"> Formulario Registro</h4>
                       <p class="help-block text-danger"></p>
                    
                            <div class="col-md-6 col-md-offset-3 text-center">
                              
                                <div class="form-group">
                                    
                                     <span class="section-heading">Usuario</span><input type="text" class="form-control" placeholder="Usuario" name="usuario" required="true" >                        </div>
                                <div class="form-group">
                                    
                                     <span class="section-heading">E-mail</span><input type="email" class="form-control" placeholder="E-mail" name="usuario" required="true" >                        </div>
                                <div class="form-group">
                                   <span class="section-heading">Contraseña </span><input type="password"  class="form-control" placeholder="Contraseña" name="contrasena"  required="true" >
                                    
                                </div>
                                <div class="form-group">
                                   <span class="section-heading">Repite Contraseña </span><input type="password"  class="form-control" placeholder="Repite Contraseña" name="contrasena"  required="true" >
            
                                </div>
                                <p class="error"></p>
                                 <button type="button" class="btn btn-success" id="validar">Registrarse</button>
                                  
                            </div>                        
                    
                </div>
      </div>
        </div>
      
      </div>
        </div>
      <div class="modal-footer">
     
        <button type="button" class="btn btn-success" id="acceso">Entrar</button>
          <button type="button" class="btn btn-info reg" >Registrarse</button>
    
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
     <div class="modal fade" id="registro" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"> Registro</h4>
      </div>
      
    </div>
  </div>
</div>
             <script>
                 
                 $('.reg').on('click', function(){
                 $('#bodyregistro').fadeIn();
                             $('#validar').on('click', function(){
                 
                   
                   if($('#bodyregistro input').eq(0).val().trim() == "" || $('#bodyregistro input').eq(1).val().trim() == "" || $('#bodyregistro input').eq(2).val().trim() == "" ){
                       $('p.error').text("Rellena todos los campos").css("color", "red");
                   }else
          if ($('#bodyregistro input').eq(2).val() != $('#bodyregistro input').eq(3).val()) {


            $('p.error').text("Las contraseñas deben coincidir").css("color", "red");
          }else{
             
          var us=$('#bodyregistro input').eq(0).val();
          var email=$('#bodyregistro input').eq(1).val();
          var cont=$('#bodyregistro input').eq(2).val();
             
          $.ajax({
        
            url: 'php/registro.php', 
            type: 'POST',
              success: function(response){
               
              $('p.error').text("Registro con exito").css("color", "red");
                  
               $('#bodyregistro').delay(3000).fadeOut();
              },
     
            data:{
            
           us: us,
            cont:cont,
                email:email
            }
                
        });
          }
               });
                 });
       
          </script>
 
  <!-- jQuery Version 1.11.0 -->
        <script>
(adsbygoogle = window.adsbygoogle || []).push({});
                    </script>
  
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script src="js/classie.js"></script>
    <script src="js/cbpAnimatedHeader.js"></script>
    <script src="js/bootstrap-modal.js"></script>

    <!-- Contact Form JavaScript -->
    <script src="js/jqBootstrapValidation.js"></script>
    <script src="js/contact_me.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="js/agency.js"></script>
    <script>
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-52568012-2', 'auto');
        ga('require', 'displayfeatures');
        ga('send', 'pageview');
    </script>

</body>

</html>
