module.controller('actualizar', function ($scope, $http) {
       

        $scope.actualizar = function (fecha, hora, nombre, apellidos, dni, tratamiento) { //Updates
        
               $http({
                method: 'JSONP',
     url: 'http://webmasterstudio.tk/070/www/actualizar.php?fecha=' + $("#fecha").val() + ' &hora=' + $("#hora").val() + '&nombre=' + nombre  + '&apellidos=' + apellidos + '&dni=' + dni + '&tratamiento=' + tratamiento  
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");

            });
            
            
        };
    

            
        
    /*--------------------------------------------------------------------*/
    //Aqui se cargan los scrips de fecha y hora
    angular.element(document).ready(function () {
        console.log('Hello World');
        console.log($("#fecha"));

       // alert("HOLA");
        $.datepicker.regional['es'] = {
            closeText: 'Cerrar',
            prevText: '<Ant',
            nextText: 'Sig>',
            currentText: 'Hoy',
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
            dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
            weekHeader: 'Sm',
            dateFormat: 'yy/mm/dd',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        };
        $.datepicker.setDefaults($.datepicker.regional['es']);
        /** Days to be disabled as an array */
        var disabledSpecificDays = ["2-2-2015", "3-4-2015", "01-05-2015", "25-12-2015", "08-12-2015"];

        function disableSpecificDaysAndWeekends(date) {
            var m = date.getMonth();
            var d = date.getDate();
            var y = date.getFullYear();

            for (var i = 0; i < disabledSpecificDays.length; i++) {
                if ($.inArray(d + '-' + (m + 1) + '-' + y, disabledSpecificDays) != -1 || new Date() > date) {
                    return [false];
                }
            }

            var noWeekend = $.datepicker.noWeekends(date);
            return !noWeekend[0] ? noWeekend : [true];
        }


        /** init datepicker */
        // $(document).ready(function () {
        $('#fecha').datepicker({
            beforeShowDay: disableSpecificDaysAndWeekends
        });
        // });
        // Target any specific tag instead
        // angular.bootstrap(jQuery('body'), ['App']);
    });
    
    $('#hora').timepicker({
    'disableTimeRanges': [
        ['12am', '9am'],
        ['2pm', '4pm'],
        ['7pm', '11:59pm'],
        ]
});
});
