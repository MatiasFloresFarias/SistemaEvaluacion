var usuario = localStorage["user"];

$(document).ready(function() {
    $('#datatable').DataTable();
});

$(function() {

    $.validator.addMethod("letras", function(value, element) {
        return this.optional(element) || /^[a-zA-Z\s]+$/i.test(value);
    }, "Debe contener solo letras y espacios");

    $("#contact_form").validate({
        errorClass: "error",
        rules: {
            nombre: {
                required: true,
                maxlength: 30,
                letras: true
            },
            correo: {
                required: true,
                email: true,
                maxlength: 50
            },
            nombreprofe: {
                required: true,
                maxlength: 30,
                letras: true
            },
            universidad: {
                required: true,
                maxlength: 30,
                letras: true
            },
            asignatura: {
                required: true,
                maxlength: 30,
                letras: true
            },
            comentario: {
                required: true,
                minlength: 10,
            }
        },
        messages: {
            nombre: {
                required: ' No ha registrado un nombre',
                maxlength: 'Caracteres maximos permitidos 30',
                letras: 'Solo se pueden ingresar letras y espacios'
            },
            correo: {
                required: ' No ha registrado un correo',
                maxlength: 'Caracteres maximos permitidos 50'
            },
            nombreprofe: {
                required: ' No ha registrado un nombre de profesor',
                maxlength: 'Caracteres maximos permitidos 30',
                letras: 'Solo se pueden ingresar letras y espacios'
            },
            universidad: {
                required: ' No ha registrado una universidad',
                maxlength: 'Caracteres maximos permitidos 30',
                letras: 'Solo se pueden ingresar letras y espacios'
            },
            asignatura: {
                required: ' No ha registrado una asignatura',
                maxlength: 'Caracteres maximos permitidos 30',
                letras: 'Solo se pueden ingresar letras y espacios'
            },
            comentario: {
                required: ' No ha registrado un comentario',
                minlength: 'Caracteres minimos permitidos 10',
            }
        }
    })
});

////////////////////////////////////////////////////////

$('#enviar').on('click', function() {

    nombre = $('#nombre').val();
    correo = $('#correo').val();
    nombreprofe = $('#nombreprofe').val();
    universidad = $('#universidad').val();
    asignatura = $('#asignatura').val();
    comentario = $('#comentario').val();

    $('#datatable').DataTable().row.add([
        nombre,
        correo,
        nombreprofe,
        universidad,
        asignatura,
        comentario
    ]).draw(false);
});

/// LOGIN
$(document).ready(function() {
    if (usuario == "") {
        $("#usuario").html("Log-in")
    } else {
        $("#usuario").html("log-out: " + usuario)
    }
});

$("#usuario").click(function() {
    if ($("#usuario").html() == "Log-in") {
        //  $("#usuario").html("Log-in")
        window.open("loggin.html", "_self")
    } else {
        localStorage["user"] = "";
        $("#dialog1").dialog("open");
        //  window.open("index.html", "_self")
        //  $("#usuario").html("Log-in")
    }
});


$(function() {
    $("#dialog1").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000,
        },
        close: function(event, ui) { window.open("index.html", "_self"); }

    });
});