$(function () {
    temas = ["JavaScript", "jQuery", "Mobile", "References", "Others", "FrameWorks"];
    info_json = [];


    function actualizar() {
        info_json = [];
        $.each($(".cont"), function (i, conten) {
            var new_ob = {};
            new_ob.unidad = $($(".ui-state-default > select"))[i].value;
            new_ob.contenido = $(conten).html();
            info_json.push(new_ob);
        });
        //info_json = sortByKey(info_json, 'unidad');
    }

    function sortByKey(array, key) {
        return array.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }

    function deleteme() {
        $(".deleteme").on("click", function () {
            $(this).parent().parent().remove();
            actualizar();
            calle();
        });
    }

    function modify() {
        $(".mod").on("click", function () {
            if ($.trim($('#text1').val())) {
                $($(this).parent().parent().children()[1]).html($.trim($('#text1').val()));
                actualizar();
                calle();
            }
        });
    }

    function onchange_select() {
        $(".seli").change(function () {
            actualizar();
            calle();
            location.reload();
        });
    }

    function sortables() {
        $("#sortable").sortable({
            placeholder: "ui-state-highlight",
            update: function (event, ui) {
                actualizar();
                calle();
            }
        });
    }

    $('#text1').keypress(
        function (event) {
            if (event.which == 13 || event.keyCode == 13) {
                $('#setData').trigger("click");
            }
        });
    $('#setData').click(
        function (e) {
            if ($.trim($('#text1').val())) {

                var jqxhr = $.ajax({
                    url: 'datos_accord.json',
                    type: "GET"
                });
                jqxhr.always(function (data) {
                    if (data.responseText != "") {
                        info_json = data;
                    }
                    info_json.push({
                        "unidad": "JavaScript",
                        "contenido": $('#text1').val()
                    });
                    info_json = sortByKey(info_json, 'unidad');
                    calle();
                    location.reload();
                });
            }
        });

    function llamada() {

        $.ajax({
            url: 'datos_accord.json',
            //cache: false, //if cache is set to true the json file will be cached, and if you already have it it won't reload
            success: function (data) {
                sorted = data;
                //console.log(data); //en data tenemos el objeto json
                var string_completo = '<div id="sortable">';
                $.each(data,
                    function (i, cont) {
                        temasT = "";
                        $.each(temas, function (ind, valor) {
                            if (cont.unidad === valor) {
                                temasT += "<option name='" + valor + "' value='" + valor + "' selected>" + valor + "</option>";
                            } else {
                                temasT += "<option name='" + valor + "' value='" + valor + "'>" + valor + "</option>";
                            }
                        });
                        string_completo +=
                            '<div style="width:100%; height: 22px"  class="ui-state-default">' +
                            "<select class='seli' style='height: 22px; float:left;'> " +
                            temasT +
                            "</select>&nbsp;&nbsp;" + i + '&nbsp;&nbsp;&nbsp;&nbsp;' +
                            '<span class="cont">' +
                            cont.contenido +
                            "</span>" +
                            "<div style='float:right'>" +
                            "    <div style='float:right;' class='deleteme'>X</div>" +
                            "    <div style='float:right; margin-right: 10px;'>/</div>" +
                            "    <div style='float:right; margin-right: 10px;' class='mod'>MOD</div>" +
                            "</div>" +
                            "</div>" +
                            "<div style='clear:both'>" +
                            "</div>";
                    });
                $('#contenidos').html(string_completo + '</div>');
                sortables();
                modify();
                deleteme();
                onchange_select();
            }
        })
    }



    function calle() {
        $.ajax({
            type: "POST",
            url: "servidor_acoord.php",
            data: {
                json: JSON.stringify(info_json)
            },
            dataType: 'json'

        }).complete(function (data) {
            console.log(data); 
            //location.reload(); //actualizar_pagina()
        });;
    }

    function actualizar_pagina() {

        $('#sortable').html('');
        $.each(info_json, function (i, cont) {
            $.each(temas, function (ind, valor) {
                if (cont.unidad === valor) {
                    temas += "<option name='" + valor + "' value='" + valor + "' selected>" + valor + "</option>";
                } else {
                    temas += "<option name='" + valor + "' value='" + valor + "'>" + valor + "</option>";
                }
            });
            $('#sortable').html($('#sortable').html() +
                '<div style="width:100%; height: 22px"  class="ui-state-default">' +
                "<select class='seli' style='height: 22px; float:left;'> " +
                temas +
                "</select>&nbsp;&nbsp;" + i + '&nbsp;&nbsp;&nbsp;&nbsp;' +
                '<span class="cont">' +
                cont.contenido +
                "</span>" +
                "<div style='float:right'>" +
                "    <div style='float:right;' class='deleteme'>X</div>" +
                "    <div style='float:right; margin-right: 10px;'>/</div>" +
                "    <div style='float:right; margin-right: 10px;' class='mod'>MOD</div>" +
                "</div>" +
                "</div>" +
                "<div style='clear:both'>" +
                "</div>");
        });
        $("#sortable").sortable();
        deleteme();
        modify();
        onchange_select();
    }
    llamada();
})