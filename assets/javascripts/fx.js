// Scroll
$(window).scroll(function() {
    var browserWidth = $(window).width();
    var scroll = $(window).scrollTop();
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

    const formName = document.getElementById('formName');
    const name = document.getElementById('fantasyName');
    const webpage = document.getElementById('webpage');
    const email = document.getElementById('email');
    const typeIndustry = document.getElementById('typeIndustry');
    const country = document.getElementById('country');
    const product = document.getElementById('product');
    const ukCompany = document.getElementById('ukCompany');

    var body = {
        formName:formName.value,
        name:name.value,
        webpage:webpage.value,
        email:email.value,
        typeIndustry:typeIndustry.value,
        country:country.value,
        product:product.value,
        ukCompany:ukCompany ? ukCompany.checked : false
    };

    var url = 'https://live.olpays.com/olp/ticket';
    // var url = 'http://localhost:8000/olp/ticket';

    $.ajax({
        url:url,
        type:"POST",
        data:JSON.stringify(body),
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: function(){
            alert('gracias! lo contactaremos');
            $('button.close').click();
            resetContactForm();
        }
    });
}

function resetContactForm() {
    document.getElementById('formName').value = "";
    document.getElementById('fantasyName').value = "";
    document.getElementById('webpage').value = "";
    document.getElementById('email').value = "";
    document.getElementById('country').value = "";
    document.getElementById('ukCompany').checked = false;
}

$(document).on('show.bs.modal', function (event) {
    if (!event.relatedTarget) {
        $('.modal').not(event.target).modal('hide');
    };
    if ($(event.relatedTarget).parents('.modal').length > 0) {
        $(event.relatedTarget).parents('.modal').modal('hide');
    };
});

$(document).on('shown.bs.modal', function (event) {
    if ($('body').hasClass('modal-open') == false) {
        $('body').addClass('modal-open');
    };
});
