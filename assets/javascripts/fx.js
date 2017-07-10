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
document.getElementById('sendForm').onclick = doPost;



//$(document).ready(function(){
//})
function doPost() {
  formName = document.getElementById('formName');
  name = document.getElementById('name');
  webpage = document.getElementById('webpage');
  email = document.getElementById('email');
  typeIndustry = document.getElementById('typeIndustry');
  country = document.getElementById('country');
  product = document.getElementById('product');
  ukCompany = document.getElementById('ukCompany');

  var body = {
    formName:formName.value,
    name:name.value,
    webpage:webpage.value,
    email:email.value,
    typeIndustry:typeIndustry.value,
    country:country.value,
    product:product.value,
    ukCompany:ukCompany ? ukCompany.checked : false
  }
  var url = 'https://live.olpays.com/admin/admin/olp/ticket';
  //var url = 'http://localhost:8000/admin/admin/olp/ticket';

  $.ajax({
    url:url,
    type:"POST",
    data:JSON.stringify(body),
    contentType:"application/json; charset=utf-8",
    dataType:"json",
    success: function(){
      alert('gracias! lo contactaremos');
      $('button.close').click();
    }
  });
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
