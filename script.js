$(function(){
  $('#login-show').click(function(){
  	$('#login-modal').slideDown();
  });
  $('.close-modal').click(function(){
  	$('#login-modal').slideUp();
  });

  function toggleChangeBtn() {
    var slideIndex = $('.slide').index($('.active'));
    $('.changeBtn').fadeIn();
    if (slideIndex == 0) {
      $('.prevBtn').fadeOut();
    } else if (slideIndex == $('.slide').length - 1) {
      $('.nextBtn').fadeOut();
    }
  }

  $('.indexBtn').click(function() {
    $('.active').removeClass('active');
    var clickedIndex = $('.indexBtn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');
    toggleChangeBtn();
  });

  $('.changeBtn').click(function() {
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active');
    if ($(this).hasClass('nextBtn')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }
    toggleChangeBtn();
  });

  $('.menu').click(function() {
  	$('.menuActive').removeClass('menuActive');
  	$('.menuSlideActive').removeClass('menuSlideActive');
  	var clickedMenu = $('.menu').index($(this));
  	$('.menu').eq(clickedMenu).addClass('menuActive');
  	$('.menuSlide').eq(clickedMenu).addClass('menuSlideActive');
  });

  $('.product img').hover(
    function(){
      $(this).animate({
      	'width': '110px',
      	'height': '110px'
      },300);
    },
    function(){
      $(this).animate({
      	'width': '100px',
      	'height': '100px'
      },300);
    }
  );

    var adOffset, adSize;
    $(window).on('load resize',function(){
        adOffset = $('footer').offset().top;
        winH = $(window).height();
    });
    $(function() {
        var infoList = $('.infoList');
        infoList.hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > adOffset - winH) {
                infoList.slideDown(800);
            } else {
                infoList.hide();
            }
        });
    });

  $('.scrollTop').click(function(){
    $('html, body').animate({
      'scrollTop': 0
    }, 500)
  });
});