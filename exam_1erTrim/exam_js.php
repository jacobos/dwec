<?php
header('Access-Control-Allow-Origin: *');
    // Array with the answer
    $url = 'https://www.googleapis.com/books/v1/volumes?q=Dragon&maxResults=20&startIndex=1';
    $obj = json_decode(file_get_contents($url), true);
    $obj2['devuelve'] = "(function(){return 'Finished!!';})()";
    $obj2['information']['JS exam'] = "JS exam";
    $ra = rand(2, 300);
    for($i = 0; $i < $ra; $i++)
      $arr[] = "js Master".$i;

    $obj2['information']['names']['personal'] = $arr;
    $obj2['information']['names']['amount'] = $ra;
    $obj2['menu'] = '<div class="footer" style="position: absolute; bottom: 0px; width: 100%; height: 60px; background: #efe;">
        <div class="container" style="padding: 25px; text-align:center">
          JS exam Footer   :)
        </div>
    </div>';
    $obj2['information']['point'] = rand(2, 1054);
    $obj2['information']['important'] = $obj;

    echo json_encode($obj2);

   //$.getJSON("http://localhost/js/clase/canvas/exam_js.php", function(data){console.log(data); console.log(eval(data.devuelve)); $(document.body).append(data.menu); })

?>
