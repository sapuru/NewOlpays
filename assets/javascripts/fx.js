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

// $('#modalAccess').on('hidden.bs.modal', function (event) {
//   $(".access-products").removeClass("open");
//   $(".form-sing-up").removeClass("close");
// })


//$(document).ready(function(){
//})

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


