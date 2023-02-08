(function ($) {
    "use strict";
  
  
    /***********
     mobile menu  js
     ************/
    $('.hamburger').on('click', function (event) {
      $(this).toggleClass('h-active');
      $('.main-nav').toggleClass('slidenav');
    });
  
    $('.header-home .main-nav ul li  a').on('click', function (event) {
      $('.hamburger').removeClass('h-active');
      $('.main-nav').removeClass('slidenav');
    });
  
    $(".main-nav .fl").on('click', function (event) {
      var $fl = $(this);
      $(this).parent().siblings().find('.sub-menu').slideUp();
      $(this).parent().siblings().find('.fl').addClass('flaticon-plus').text("+");
      if ($fl.hasClass('flaticon-plus')) {
        $fl.removeClass('flaticon-plus').addClass('flaticon-minus').text("-");
      } else {
        $fl.removeClass('flaticon-minus').addClass('flaticon-plus').text("+");
      }
      $fl.next(".sub-menu").slideToggle();
    });
  
  
    /***********
   Sticky Navbar js
   ************/
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 20) {
        $(".header-area").addClass("sticky");
      } else {
        $(".header-area").removeClass("sticky");
      }
    });
  
    jQuery(window).on( 'load', function(){
        wowAnimation();
      });
    
  
  
  
  
    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
  
    $(".next").click(function () {
  
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  
      next_fs.show();
      current_fs.animate({ opacity: 0 }, {
        step: function (now) {
          opacity = 1 - now;
  
          current_fs.css({
            'display': 'none',
            'position': 'relative'
          });
          next_fs.css({ 'opacity': opacity });
        },
        duration: 500
      });
  
    });
    $(".previous").click(function () {
  
      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();
  
      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
  
  
      previous_fs.show();
  
      current_fs.animate({ opacity: 0 }, {
        step: function (now) {
          opacity = 1 - now;
  
          current_fs.css({
            'display': 'none',
            'position': 'relative'
          });
          previous_fs.css({ 'opacity': opacity });
        },
        duration: 500
      });
    });
  
      /***********
   Wow js Initialization
   ************/
   function wowAnimation(){
    new WOW({
      offset:200,
      animateClass:"animated",
      mobile:true,
    }).init();
  }


    const swiper = new Swiper('.swiper-container', {
        centeredSlides: true,
        loop: true,
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 40,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {

            640: {
                slidesPerView: 2.5,
            },
            768: {
                slidesPerView: 2.75,
            },
            1080: {
                slidesPerView: 3.25,
            },
            1280: {
                slidesPerView: 3.75,
            },
        },
    });

  }(jQuery));