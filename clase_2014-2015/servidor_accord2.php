<?php
	
   $json = $_POST['json'];

   //$tempData = html_entity_decode($json);
   //$json = json_decode($tempData);


//   $json = str_replace("\\", "",$json);
   $json = stripslashes(str_replace('\"', '"', $json));
   $json = str_replace('&quot;', '"', $json);
    


   //$json = json_decode($json,true);   
//$respuesta["decod"] = json_decode( preg_replace('/[\x00-\x1F\x80-\xFF]/', '', $json), true);

   $respuesta["json"] = phpversion(); //$json;

if (json_decode($json) != null && $json != "") { /* sanity check */
    $respuesta['boa'] = "entra";
     $file = fopen('datos_accord.json','w+');
     fwrite($file, $json);
     fclose($file);
   } else {
       $respuesta['boa'] = "NOentra";
     // handle error 
   }
    //$respuesta['devuelve'] = $json;
    //$respuesta['datos'] = $datos;
     
	echo json_encode($respuesta);

?>