<?php session_start(); ?>
<!-- Header -->
    <header style="height:100%">
        <div class="container">
            <div class="intro-text">
                <a href="#services" class="page-scroll btn btn-xl">Sesion Iniciada <br> Bienvenido usuario <?php echo $_SESSION['usuario'] ?></a>
            </div>
        </div>
    </header>
