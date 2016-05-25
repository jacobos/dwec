<?php

header("content-type: application/json");


$json = '[{"name":"Dodecahedron","price":17,"description":"Dodecahedron is a nice piece of gem to work with!!","canPurchase":true,"images":[{"full":"im/gem-01.gif","small":"im/gem-01.gif"}],"reviews":[{"stars":5,"body":"I love this product!","author":"joe@thomas.com"},{"stars":1,"body":"This product sucks","author":"tim@hater.com"}]},{"name":"Hex","price":4.95,"description":"Triangle is nice!!","canPurchase":true,"images":[{"full":"im/gem-02.gif","small":"im/gem-02.gif"}]},{"name":"TriangleHex","price":3.95,"description":"TriangleHEx is like JF!!","canPurchase":true,"images":[{"full":"im/gem-03.gif","small":"im/gem-03.gif"}]},{"name":"Tri Tri","price":4.95,"description":"Triangle is nice!!","canPurchase":true,"images":[{"full":"im/gem-04.gif","small":"im/gem-04.gif"}]},{"name":"Cube","price":9.95,"description":"Triangle is nice!!","canPurchase":true,"images":[{"full":"im/gem-05.gif","small":"im/gem-05.gif"}]},{"name":"Star","price":9.95,"description":"Triangle is nice!!","canPurchase":true,"images":[{"full":"im/gem-06.gif","small":"im/gem-06.gif"}]}]';
$result = json_decode ($json);
echo $_GET['callback']. '('. json_encode($result) . ')';

?>
