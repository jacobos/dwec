 <!-- Navigation -->
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>

                </button>
                <a class="navbar-brand page-scroll" href="#page-top"> ROBELLA C.F.</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li class="active">
                        <a class="page-scroll" style="cursor:pointer" href="#services">Inicio</a>
                    </li>
                    <li>
                        <a class="page-scroll" style="cursor:pointer" href="#club">Club</a>
                    </li>
                    <li>
                        <a class="page-scroll" style="cursor:pointer" href="#sobrenosotros">Sobre Nosotros</a>
                    </li>
                    <li>
                      
                       <a type="button" style="cursor:pointer" class="btnin"  data-toggle="modal" data-target="#inicio">
  Iniciar Sesion
</a>
                    
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>

    <!-- Header -->
    <header>
        <div class="container">
            <div class="intro-text">
                
            </div>
        </div>
    </header>
<section id="club">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Club</h2>
                    <h3 class="section-subheading text-muted">Fundado en 1984</h3>
                    <img style="height:35em;" class="col-lg-12" src="img/equipo.jpg">
                </div>
            </div>
           
               
             <div class="row text-center">
                <div class="col-md-12">
                    <h4 class="service-heading">Directiva</h4>
                   <?php

$sql = "SELECT Presidente,Director_deportivo from Club ";  
    
$consulta = mysqli_query($conexion,$sql);
               
$fila = mysqli_fetch_array($consulta);
echo '<p class="text-muted">Presidente : '.$fila["Presidente"].'</p>';
echo '<p class="text-muted">Director deportivo: '.$fila["Director_deportivo"].'</p>';



?>

                </div>
            </div>
        </div>
    </section>
<section id="sobrenosotros" class="bg-light-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Sobre nosotros</h2>
                </div>
            </div>
           
               
             <div class="row text-center">
                <div class="col-md-12">
                    <span class="text-center">
                    <p> Originalmente este Club, fue fundado por D. Nicolás Pérez Ochando allá, por el año 1963, inicialmente con el nombre de U.D. Extramuros, hasta que en la temporada 1969/70, queda definitivamente bautizado con el de ROBELLA S.D., porque se jugaba en los campos que existían en el cauce viejo del río Turia, junto a los cuales discurría dicha acequia.</p>

<p>Con posterioridad, se paso a jugar en los campos municipales de la localidad de Mislata y en la temporada 2006/07, desaparece con casi 45 años de existencia, como tal institución, tras la fusión que se realizo con un club que existía en esta localidad.</p>

<p>El día 28 de Junio de 2009., como un ave Fénix, con el mismo nombre de antaño, surge de las cenizas, con savia nueva, aunque manteniendo el mismo espíritu, tomando el nombre original y añadiéndole el de la otra acequia de nuestra localidad.</p>
<p>En esta nueva etapa, que empezamos hace 5 años, y a pesar de gente malintencionada, que propago la farsa, la mentira y el bulo de que el Club había desaparecido, seguimos trabajando con el mismo aliento, coraje y ánimo, que los primeros fundadores en 1963.</p>
                    </span>
                    
                </div>
            </div>
        </div>
    </section>

