$(document).ready(function(){
    /*Inicializa validador para el formulario contactForm*/
    $("#contactForm").validate({

        errorClass: "error-message", // clase CSS que se usará en los mensajes de erro

        /*Handler del evento submit del formulario. En este caso llama a la función dopost, que es la
        * encargada de enviar el formulario*/
        submitHandler: function() {
            doPost();
        },

        //debug: true, parametro que muestra mensajes de error en la consola

        /*Set de reglas de validación para cada campo*/
        rules: {
            fantasyName: {
                required: true,
                minlength: 4,
                maxlength: 32
            },
            country: {
                required: true,
                minlength: 4,
                maxlength: 32
            },
            webpage: {
                required: true,
                url: true
            },
            email: {
                required: true,
                email: true
            },
            typeIndustry: {
                required: true
            }
        }
    });
});