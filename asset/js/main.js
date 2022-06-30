$(function() {
  $('.sc-catawrap .title-wrap .all-title').click(function() {
      var activeTab = $(this).attr('data-tab');
      $('.sc-catawrap .title-wrap .all-title').removeClass('active');
      $('.sub-list').removeClass('active');
      $(this).addClass('active');
      $('#' + activeTab).addClass('active');
  })

  $('.sc-catawrap .stitle-wrap .item-wrap').click(function() {
      var activeTab = $(this).attr('data-tab');
      $('.sc-catawrap .stitle-wrap .item-wrap').removeClass('active');
      $('.cata-list').removeClass('active');
      $(this).addClass('active');
      $('#' + activeTab).addClass('active');
  })

  $('.sc-catawrap .sitem-wrap .cata-item').click(function() {
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
  })
    var swiper = new Swiper(".product-swiper", {
    slidesPerView: 'auto',
  });

  $('.sc-main .point-box .btn-pointview').click(function(){
    $(this).parent().toggleClass('active');
  });

  $('.sc-main .all-box .saving-title').click(function(){
    $(this).children().toggleClass('active');
  });

  $('.sc-main .all-box .btn-close').click(function(){
    $(this).parent().removeClass('active');
  });

  $('main .t-wrap .btn-top, a.page-btn-top').click(function(e){
    e.preventDefault();

      $('html, body').animate({scrollTop : 0}, 0, function(){
          $('a.page-btn-top').fadeOut();
      });
  });

  $(window).scroll(function(){
    var curr = $(this).scrollTop();
    if (curr >= $('body').outerHeight() * ( 10 / 100) ) {
      $('a.page-btn-top').fadeIn();
    } else {
      $('a.page-btn-top').fadeOut();
    }
  });

  $('.sc-visual .infor-item').click(function(){
    $('.sc-visual .infor-item').removeClass('active');
    $(this).addClass('active');
  });

  $(window).scroll(function(){
    var cur = $(this).scrollTop();
    var fixTop = $('.sc-visual').offset().top;
    console.log(fixTop);
    if(cur >= fixTop ){
      $('.sc-visual .infor-list').addClass('active');
    } else {
      $('.sc-visual .infor-list').removeClass('active');
    }
  });

  $('.sc-deliver .del-box span button').click(function(){
    $('.sc-deliver .del-box .infor-box').toggleClass('active');
  });

  $('.sc-deliver .del-box .btn-close').click(function(){
    $(this).parent().removeClass('active');
  });

  $('.sc-visual .img-box .more-box').click(function(e){
    e.preventDefault();
    $('.sc-visual .img-box').toggleClass('active');
  });
  $('.sc-proinfor .more-box .btn-more').click(function(){
    $('.sc-proinfor').toggleClass('active');
  });
});