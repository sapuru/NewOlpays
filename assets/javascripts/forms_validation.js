$(document).ready(function(){

    /*Custom Validator. Con esto permito que si el dato no tiene el prefijo http o https, aún sea
     considerada una url válida*/
    jQuery.validator.addMethod('validUrl', function(value, element) {
        var url = $.validator.methods.url.bind(this);
        return url(value, element) || url('http://' + value, element) || url('https://' + value, element);
    }, $.validator.messages.url);


    /*Inicializa validador para el formulario contactForm*/
    const contactForm = $("#contactForm")
        .validate({

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
                    validUrl: true
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