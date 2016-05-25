<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Speaksy - The easy way to speak</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="css/main.css">

        <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
    </head>
    <body id="intro">
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
    <!-- Main jumbotron for a primary marketing message or call to action -->

        <section class="container">

          <div id="box-enter" class="col-sm-offset-3 col-sm-6">
            <div class="title row">
              <h1>Speaksy</h1>
              <div class="btn-container">
                <button name="enter" id="entrar" class="btn speaksy-btn entrar btn-progress-bardown btn-orange">Entrar</button>
              </br>
                <button name="enter" class="btn speaksy-btn btn-progress-lateral btn-orange">entrar 3</button>



              </div>
            </div>

          </div>


        </section>


        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.1.min.js"><\/script>')</script>
        <script src="js/vendor/bootstrap.min.js"></script>
        <script src="js/main.js"></script>
        <script src="js/vendor/speaksy-btns-0.1.js"></script>
        <script charset="utf-8">
          $("#entrar").speaksyBtnProgress({
            time: 1000,
            "easing": "linear"
          }, function(){

            window.location.href = "panel.php";
          });
        </script>

    </body>
</html>
