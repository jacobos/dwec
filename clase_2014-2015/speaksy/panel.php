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
        <link rel="stylesheet" href="css/font-awesome.min.css">
        <link rel="stylesheet" href="css/main.css">

        <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
        <script src="js/vendor/responsivevoice.js"></script>
        <script src="http://code.jquery.com/jquery-git2.js"></script>
    </head>
    <body id="panel">
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
    <!-- Main jumbotron for a primary marketing message or call to action -->
        <div class="container">
          <section class="col-xs-12">

            <form id="phrase" class="phrase">
              <input type="text" class="form-control phraseContainer" id="phraseContainer" name="phraseContainer" placeholder="Esperando palabras ^^">
              <div class="phraseControls">
                <button type="button" id="speak" ><i class="fa fa-volume-up"></i></button>
                <button><i class="fa fa-star-o"></i></button>
                <button><i class="fa fa-times"></i></button>

              </div>

            </form>

          </section>

          <section class="col-xs-12 mainSection">
            <section id="words" class="col-xs-4">
              <header>
                <h2>Iniciadores</h2>
              </header>
              <div class="wordsContainer" id="name">
                <ul>
                  <li id="test" class="btn-progress-lateral word">yo</li>
                  <li class="btn-progress-lateral word">necesito</li>
                  <li class="btn-progress-lateral word">hola</li>
                  <li class="btn-progress-lateral word">me</li>
                  <li class="btn-progress-lateral word">que</li>
                  <li class="btn-progress-lateral word">quiero</li>
                  <li class="btn-progress-lateral word">dame</li>
                </ul>

              </div>
              <div class="footer">
                <nav>
                  <ul>
                    <li><a class="fa fa-circle" href="#"></a></li>
                    <li><a class="fa fa-circle-o" href="#"></a></li>
                    <li><a class="fa fa-circle-o" href="#"></a></li>
                  </ul>

                </nav>
                <button id="reload-words" name="reload-words" class="btn btn-progress-lateral btn-form"><i class="fa fa-repeat"></i></button>

              </div>

            </section>


          </section>

        </div>


        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.1.min.js"><\/script>')</script>
        <script src="js/vendor/bootstrap.min.js"></script>
        <script src="responsivevoice.js"></script>
        <script src="http://code.jquery.com/jquery-git2.js"></script>
        <script src="js/main.js"></script>
        <script src="js/vendor/speaksy-btns-0.1.js"></script>

        <script charset="utf-8">



          $(".word").speaksyBtnProgress(
            {
              time: 1000,
              "easing": "linear"
            },
            function() {
              var container = $("#phraseContainer");

              var word      = $(this).children(".content").text();

            }
          );

          $("#speak").click(function() {
            responsiveVoice.speak($('#phraseContainer').val(),'Spanish Female');


            }
          );





        </script>


    </body>
</html>
