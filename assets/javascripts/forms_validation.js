$(document).ready(function(){
    $("#contactForm").validate({

        errorClass: "error-message",

        submitHandler: function() {
            doPost();
        },

        debug: true,
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