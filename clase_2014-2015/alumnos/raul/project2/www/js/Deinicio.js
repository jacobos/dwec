module.controller('Deinicio', function ($scope, $http) {
   
   
    $scope.showmodalote = function () {
         $("ons-icon").attr("spin", false);
        modal.show();
        /*console.log($scope.dato.inputtitulo);*/
       /* if($scope.dato.inputtitulo == null || $scope.dato.inputautor == null){
                    
                $("#elbuto").attr("disabled", true);
                }
          else{
              console.log("tenemos datos")
             $("#elbuto").attr("disabled", false); 
          }*/
        /*$(document).ready(function() {
        if($("#inputT").val().length > 0 && $("#inputA").val().length > 0){
        $("#elbuto").
        } else {
         $("#elbuto").attr("disabled", true);
        }
        });*/
        
       
      $scope.insert = function (titulote, autorote) {
          var controltitulo = $scope.inputtitulo;
        var controlautor = $scope.inputautor;
         console.log("titulo" + controltitulo);
          console.log("autor" + controlautor);
         
            if((controltitulo === undefined || controltitulo === "") || (controlautor === undefined || controlautor === "")){
                alert("any data set");
            } else {
            
                
                
          
               

                $http({
                    method: 'JSONP',
                    url: 'http://raullavarias.tk/angular/insertar.php?inputtitulo=' + titulote + '&inputautor=' + autorote + '&callback=JSON_CALLBACK'
                })
        
          $("ons-icon").attr("spin", true);
          setTimeout('modal.hide()', 2000);
          
            
            }
    };
    
};
    
    
    
 $scope.showmodalote2 = function () {
         $("ons-icon").attr("spin", false);
        modal2.show();
        /*console.log($scope.dato.inputtitulo);*/
       /* if($scope.dato.inputtitulo == null || $scope.dato.inputautor == null){
                    
                $("#elbuto").attr("disabled", true);
                }
          else{
              console.log("tenemos datos")
             $("#elbuto").attr("disabled", false); 
          }*/
        /*$(document).ready(function() {
        if($("#inputT").val().length > 0 && $("#inputA").val().length > 0){
        $("#elbuto").
        } else {
         $("#elbuto").attr("disabled", true);
        }
        });*/
        
       
      $scope.insert2 = function (temote, descripcionaca) {
          var textarea = $scope.descripcion;
        
         
            if(textarea === undefined || textarea === "") {
                alert("any data set");
            } else {
            
                
                
          
               

                $http({
                    method: 'JSONP',
                    url: 'http://raullavarias.tk/angular/insertar2.php?tema=' + temote + '&descripcion=' + descripcionaca + '&callback=JSON_CALLBACK'
                })
        
          $("ons-icon").attr("spin", true);
          setTimeout('modal2.hide()', 2000);
          
            
            }
    };
    
};
    $scope.back = function () {
   modal2.hide();
       modal.hide();
   }
});