<?php
$ar[] = 'http://www.online-image-editor.com/styles/2013/images/example_image.png';
$ar[] = 'http://www.neomanox.com/manoxfilms/images/LogoThundercats.jpg';
$ar[] = 'http://www.clubedesenhosanimados.com.br/imagens/produtos/Thundercats/Thundercats.jpg';
$ar[] = 'http://static.comicvine.com/uploads/original/10/103633/1947047-thundercats1.jpg';
$ar[] = 'http://fc09.deviantart.net/fs71/i/2011/355/2/9/thundercats__snarf_2011_colored_by_esteban1988-d4gcz95.png';
$ar[] = 'http://www.queencheetah.com/Thundercats/liono1.jpg';
$q = $_GET["q"];
$r = $_GET["pedido"];
$parm = $_GET["parameter2"];
$ped = $_GET["pedido"];

$st = "<div>";
$st .= "<strong><h3>".$r."</h3></strong>";
 $st .= '<img style="width: 500px" src="'.$ar[$q].'" alt="Your boarding pass" class="boarding-pass" />';
$st .= "</div>";
echo $st;
?>