$(function () {
    var info_json = [];
    var temas = ["JavaScript", "jQuery", "Mobile", "FrameWorks", "References", "Others"];
    var num_ud = temas.length;

    function llamada() {
        $.ajax({
            url: 'datos_accord.json',
            success: function (data) {
                //console.log(data); //en data tenemos el objeto json
                var string_completo = '<div id="accordion">';
                for (var alfi = 0; alfi < num_ud; alfi++) {
                    var j = temas[alfi];
                    if (j == "FrameWorks")
                        string_completo += "<h3>" + "FrameWorks and Libraries" + "</h3><div><ol>";
                    else
                        string_completo += "<h3>" + j + "</h3><div><ol>";
                    $.each(data,
                        function (i, cont) {
                            if (cont.unidad == j) {
                                string_completo += '<li><span class="cont">' + cont.contenido + "</span></li>";
                            }
                        });
                    string_completo += '</ol></div>';
                }
                $('#contenido').html(string_completo + '</div>');

                $(".info_ref").next().toggle();
                $("#accordion").accordion({
                    heightStyle: "content"
                });
                $(".info_ref").click(function () {

                    $(this).next().toggle();
                });
            }
        })
    }
    llamada();
})