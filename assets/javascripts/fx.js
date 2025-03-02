const formName = document.getElementById('formName');
const name = document.getElementById('fantasyName');
const webpage = document.getElementById('webpage');
const email = document.getElementById('email');
const typeIndustry = document.getElementById('typeIndustry');
const country = document.getElementById('country');
const product = document.getElementById('product');
const ukCompany = document.getElementById('ukCompany');

// Scroll
$(window).scroll(function() {
    const browserWidth = $(window).width();
    const scroll = $(window).scrollTop();
    //console.log(scroll);
    if (browserWidth <= 990) {
        if (scroll <= 0) {
            $("header").addClass("alternative");
        } else {
            $("header").removeClass("alternative");
        }
    } else {
        if (scroll <= 100) {
            $("header").addClass("alternative");
        } else {
            $("header").removeClass("alternative");
        }
    }
});

// Sidebar
$('.open-mainbar').click(function(){
    $(".mainbar").addClass("open");
    $("body").addClass("sidebar-opened");
});
$('.close-mainbar').click(function(){
    $(".mainbar").removeClass("open");
    $("body").removeClass("sidebar-opened");
});

// // Sing Up
// $('.btn-sing-up').click(function(){
//   $(".access-products").removeClass("open");
//   $(".form-sing-up").removeClass("close");
// });

// $('.btn-login').click(function(){
//   $(".access-products").addClass("open");
//   $(".form-sing-up").addClass("close");
// });

// $('#modalSigin').on('hidden.bs.modal', function (event) {
//   $(".access-products").removeClass("open");
//   $(".form-sing-up").removeClass("close");
// })

function doPost() {

    const body = {
        formName:formName.value,
        name:name.value,
        webpage:webpage.value,
        email:email.value,
        typeIndustry:typeIndustry.value,
        country:country.value,
        product:product.value,
        ukCompany:ukCompany ? ukCompany.checked : false
    };

    const url = 'https://live.olpays.com/olp/ticket';
    // const url = 'http://localhost:8000/olp/ticket';

    $.ajax({
        url:url,
        type:"POST",
        data:JSON.stringify(body),
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: function() {
            const header = "Tu solicitud ha sido enviada correctamente.";
            const message = "Nuestro equipo se contactará en la brevedad.";
            toastr.options.closeButton = true;
            toastr.success(message, header);
            $('#modalAccess').modal('toggle');
            resetContactForm();

        },
        error: function () {
            const header = "Lo sentimos.";
            const message = "Tenemos algunos inconvenientes en este momento. Contáctenos a " +
                "info@olpays.com con su consulta. Gracias";
            toastr.options.closeButton = true;
            toastr.error(message, header)
        }
    });
}

function resetContactForm() {
    fantasyName.value = "";
    webpage.value = "";
    email.value = "";
    country.value = "";
    ukCompany.checked = false;
}

$(document).on('show.bs.modal', function (event) {
    if (!event.relatedTarget) {
        $('.modal').not(event.target).modal('hide');
    }
    if ($(event.relatedTarget).parents('.modal').length > 0) {
        $(event.relatedTarget).parents('.modal').modal('hide');
    }
});

$(document).on('shown.bs.modal', function (event) {
    if ($('body').hasClass('modal-open') == false) {
        $('body').addClass('modal-open');
    }
});
