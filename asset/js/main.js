$(function() {
  //공통
  $('.t-wrap .btn-top').click(function(){
    $('html, body').animate({scrollTop : 0}, 0 );
  });
  // 로그인
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

  // 상품페이지
  var swiper1 = new Swiper(".product-swiper", {
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

  $('a.page-btn-top').click(function(e){
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
    var visualObj = $('.sc-visual');
    
    if(visualObj.length){
      var fixTop = $('.sc-visual').offset().top;
      // console.log(fixTop);
      if(cur >= fixTop ){
        $('.sc-visual .infor-list').addClass('active');
      } else {
        $('.sc-visual .infor-list').removeClass('active');
      }
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


  
  //리스트페이지

  //lnb전체메뉴
  $('.lnb-area .btn-morelnb').click(function(){
    $('.lnb-area').toggleClass('down');
  });

  //lnb스와이퍼
  var swiper2 = new Swiper(".lnb-swiper", {
    slidesPerView: 'auto',
  });




  


  //두번째 도트 페이지네이션
  var swiper4 = new Swiper(".sc-liveswiper", {
    pagination: {
      el: ".sc-liveswiper .swiper-pagination",
    },
  });




  $(window).scroll(function(){
    var cur = $(this).scrollTop();
    // var visualObj = $('.lnb-area');
    
    // if(visualObj.length){
      // var fixTop = $('.lnb-area').offset().top;
      // console.log(fixTop);
      if(cur >= 96 ){
        $('.lnb-area').addClass('active');
      } else {
        $('.lnb-area').removeClass('active');
      }
    // }
    
  });



  fetch('./../asset/data/product.json')
  .then((response) => response.json())
  .then((json) => {
      x = json.liveItems;
      
      html='';
      

      x.forEach(a => {

        event = '';
        if(a.event != null) {
          event = `<span class="event">${a.event}</span>`;
        } 
        subTitle2 = '';
        if(a.subTitle2 != null) {
          subTitle2 = `<strong>${a.subTitle2}</strong>`;
        } 
        subDiscount = '';
        if(a.subDiscount != null) {
          subDiscount = `<span class="dis-perc"><span class="blind">할인율</span>${a.subDiscount}</span>`;
        } 
        subPrice = '';
        if(a.subPrice != null) {
          subPrice = `<span class="dis-pri">${a.subPrice}<span class="won">${a.subUnit}</span></span>`;
        } 

        html += `<div class="live-box">
        <div class="live-item">
            <div class="live-wrap">
                <div class="ig-box"><img src="${a.thmbnailBig}" alt="${a.title}"></div>
                <div class="txt-box">
                    <h3 class="live-title">${a.title}</h3>
                    ${event}
                    <div class="buy-now">
                        <div class="img-box"><img src="${a.thmbnailSmall}" alt="${a.subTitle}"></div>
                        <div class="text-box">
                            <span class="view">${a.subTitle}</span>
                            ${subTitle2}
                            <div class="price">
                                <strong>
                                    ${subDiscount}
                                    ${subPrice}
                                </strong>
                            </div>
                        </div>
                    </div>
                    <div class="seller">${a.supplier}</div>
                    <button type="button" class="btn-alarm">
                        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" class="liveCalendar_icon__3aU55"><mask id="iconBellPlus_18x15_red_svg__a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="0" width="14" height="15"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.958.5H2v13.75h13.958V13H12.5v-2.5H11V6h4.958V.5z" fill="#C8C8C8"></path></mask><g mask="url(#iconBellPlus_18x15_red_svg__a)"><mask id="iconBellPlus_18x15_red_svg__b" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.875 1.75a4.583 4.583 0 00-4.583 4.583v3.5l-1 1.917h11.166l-1-1.917v-3.5A4.583 4.583 0 008.875 1.75z"></path></mask><path d="M4.292 9.834l.886.463a1 1 0 00.114-.463h-1zm-1 1.916l-.887-.463a1 1 0 00.887 1.463v-1zm1 0v1-1zm9.166 0v1-1zm1 0v1a1 1 0 00.887-1.463l-.886.463zm-1-1.917l.887-.462a1 1 0 00-.886-.538v1zm0 0h-1a1 1 0 001 1v-1zm-8.166-3.5A3.583 3.583 0 018.875 2.75v-2a5.583 5.583 0 00-5.583 5.583h2zm0 3.5v-3.5h-2v3.5h2zm-1.114 2.38l1-1.916-1.773-.926-1 1.916 1.773.926zm.114-1.463h-1v2h1v-2zm9.166 0H4.292v2h9.166v-2zm1 0h-1v2h1v-2zm-1.886-.454l1 1.917 1.773-.925-1-1.917-1.773.925zm.886.537v-2 2zm-1-4.5v3.5h2v-3.5h-2zM8.875 2.75a3.583 3.583 0 013.583 3.583h2c0-3.083-2.5-5.583-5.583-5.583v2z" fill="red" mask="url(#iconBellPlus_18x15_red_svg__b)"></path><path d="M6.64 11.632a2.293 2.293 0 004.47 0" stroke="red" stroke-linejoin="round"></path></g><path d="M14.708 6.333v5.834m2.917-2.917H11.79" stroke="red" stroke-width="1.25"></path></svg>
                        알림받기
                    </button>
                </div>
            </div>
            <a href="${a.href}" class="btn-live"></a>
        </div>
    </div>`;

    });

    $('.live-list').append(html);
})

fetch('./../asset/data/product.json')
.then((response) => response.json())
.then((json) => {
    x = json.trendItem
    
    html='';
    

    x.forEach(a => {

      html += `<li class="swiper-slide">
      <a href="${a.href}">
          <div class="ig-box"><img src="${a.thmbnailBig1}" alt="${a.title1}"></div>
          <div class="txt-box">${a.title1}</div>
      </a>
      <a href="${a.href}">
          <div class="ig-box"><img src="${a.thmbnailBig2}" alt="${a.title2}"></div>
          <div class="txt-box">${a.title2}</div>
      </a>
      <a href="${a.href}">
          <div class="ig-box"><img src="${a.thmbnailBig3}" alt="${a.title3}"></div>
          <div class="txt-box">${a.title3}</div>
      </a>
      <a href="${a.href}">
          <div class="ig-box"><img src="${a.thmbnailBig4}" alt="${a.title4}"></div>
          <div class="txt-box">${a.title4}</div>
      </a>
      <a href="${a.href}">
          <div class="ig-box"><img src="${a.thmbnailBig5}" alt="${a.title5}"></div>
          <div class="txt-box">${a.title5}</div>
      </a>
      <a href="${a.href}">
          <div class="ig-box"><img src="${a.thmbnailBig6}" alt="${a.title6}"></div>
          <div class="txt-box">${a.title6}</div>
      </a>
      <a href="${a.href}">
          <div class="ig-box"><img src="${a.thmbnailBig7}" alt="${a.title7}"></div>
          <div class="txt-box">${a.title7}</div>
      </a>
      <a href="${a.href}">
          <div class="ig-box"><img src="${a.thmbnailBig8}" alt="${a.title8}"></div>
          <div class="txt-box">${a.title8}</div>
      </a>
      <a href="${a.href}">
          <div class="ig-box"><img src="${a.thmbnailBig9}" alt="${a.title9}"></div>
          <div class="txt-box">${a.title9}</div>
      </a>
  </li>`;

  });

  $('.trand-swiper .swiper-wrapper').append(html);

   //세번째 트렌드 페이지네이션
   var swiper5 = new Swiper(".sc-trand .trand-swiper", {
    pagination: {
      el: ".sc-trand .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".sc-trand .swiper-button-next",
      prevEl: ".sc-trand .swiper-button-prev",
    },
  });

  })
fetch('./../asset/data/product.json', {
  headers : {
    'Accept' : 'application/json'
  }
})
.then((response) => response.json())
.then((json) => {
    x = json.shopItem
    
    html='';
    

    x.forEach(a => {

      thmbnail = '';
      if(a.thmbnail != null) {
        thmbnail = `<div class="ig-box"><img src="${a.thmbnail}" alt="${a.title}"></div>`;
      } 

      title = '';
      more = '';
      if(a.title != null) {
        title = `<div class="txt-box">${a.title}</div>`;
      } else {
        more = `<span class="btn-store">
        <span class="ic-arrow"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="toptopShopping_icon__2fIcD"><path d="M5.929 1l5 5-5 5M.5 6h10.429" stroke="#fff"></path></svg></span>
        <span class="txt-more">전체보기</span>
    </span>`
      }

      html += `<li class="swiper-slide">
          <a href="${a.href}">
          ${thmbnail}
          ${title}
          ${more}
      </a>
  </li>`;

      });

      $('.sc-toptop .swiper-wrapper').append(html);

        //toptop 스토어 스와이퍼
  var swiper6 = new Swiper(".sc-toptop .shop-swiper", {
    slidesPerView: 'auto',
  });


  })

  fetch('./../asset/data/product.json')
  .then((response) => response.json())
  .then((json) => {
      x = json.shopProduct
      
      html='';
      

      x.forEach(a => {

        html += `<li class="shop-item">
                    <a href="${a.href}">
                        <div class="ig-box"><img src="${a.thmbnail}" alt="${a.title}"></div>
                        <div class="txt-box">
                            <strong class="price">${a.price}</strong>
                            <span class="name">${a.title}</span>
                        </div>
                    </a>
                </li>`;

    });

    $('.sc-toptop .shop-list').append(html);

})
  
fetch('./../asset/data/product.json')
.then((response) => response.json())
.then((json) => {
    x = json.rankProduct
    
    html='';
    

    x.forEach(a => {

      html += `<li class="rank-item">
      <a href="${a.href}">
          <div class="ig-box">
              <img src="${a.thmbnail}" alt="${a.title}">
              <div class="txt-box">${a.title}</div>
          </div>
      </a>
  </li>`;

  });

  $('.sc-rank .rank-box .rank-list').append(html);

})

fetch('./../asset/data/product.json')
.then((response) => response.json())
.then((json) => {
    x = json.rankItem
    
    html='';
    

    x.forEach(a => {

      html += `<li class="swiper-slide">
      <a href="${a.href}">
          <div class="ig-box">
              <span class="num">${a.num}</span>
              <img src="${a.thmbnail}" alt="${a.title}">
          </div>
          <div class="txt-box">
              <span class="name">${a.title}</span>
              <strong class="price">${a.price}<span class="won">원</span></strong>
          </div>
      </a>
  </li>`;

  });

  $('.sc-rank .swiper-wrapper').append(html);

    //일간 베스트 스와이퍼
    var swiper7 = new Swiper(".sc-rank .best-swiper", {
      slidesPerView: 'auto',
    });

})


fetch('./../asset/data/product.json')
.then((response) => response.json())
.then((json) => {
    x = json.brandItem
    
    html='';
    

    x.forEach(a => {

      html += `<li class="swiper-slide">
      <a href="${a.href}">
          <div class="ig-box"><img src="${a.thmbnail}" alt="${a.title}"></div>
          <div class="txt-box">${a.title}</div>
      </a>
  </li>`;

  });

  $('.sc-brand .swiper-wrapper').append(html);

    //브랜드 스와이퍼
    var swiper8 = new Swiper(".sc-brand .brand-swiper", {
      slidesPerView: 'auto',
    });
  

})

fetch('./../asset/data/product.json')
.then((response) => response.json())
.then((json) => {
    x = json.dealItem
    
    html='';
    

    x.forEach(a => {

      html += `<li class="deal-item">
      <a href="">
          <div class="ig-box">
              <span class="dis-per">${a.percent}</span>
              <img src="${a.thmbnail}" alt="${a.title}">
          </div>
          <div class="txt-box">
              <p class="time-box">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" class="hotDeal_icon__QYkjC"><circle cx="5.5" cy="5.5" r="5.25" stroke="#929292" stroke-width="0.5"></circle><path d="M5.5 3v3h3" stroke="#929292" stroke-width="0.5"></path></svg>
                  남은시간
                  <span class="time">
                      09
                      <span class="txt">:</span>
                      17
                      <span class="txt">:</span>
                      19
                  </span>
              </p>
              <em class="name">${a.title}</em>
              <strong class="price">
              ${a.price}<span class="won">원</span>
              </strong>
          </div>
      </a>
  </li>`;

  });

  $('.sc-hotdeal .deal-list').append(html);

})

fetch('./../asset/data/product.json')
.then((response) => response.json())
.then((json) => {
    x = json.mainItem
    
    html='';
    

    x.forEach(a => {

      html += `<li class="swiper-slide">
      <a href="${a.href}">
          <div class="ig-box">
              <span class="notice"><span class="txt">${a.event}</span></span>
              <img src="${a.thmbnail}" alt="${a.title}">
          </div>
          <div class="text-box">
              <strong class="highlight">${a.subtitle}</strong>
              <h3 class="title">${a.title}</h3>
          </div>
      </a>
  </li>`;

  });

  $('.sc-mainswiper .swiper-wrapper').append(html);

  //상단메인스크롤바
var swiper3 = new Swiper(".sc-mainswiper", {
  loop : true,
  slidesPerView: 'auto',
  centeredSlides:true,
  // loopedSlides: 1,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  on:{
    'init':function(){
      total2 = $('.sc-mainswiper .swiper-slide:not(.swiper-slide-duplicate)').length;
      result = 100/total2;

      $('.curr').css('width',result+'%');

    }
  }
});



swiper3.on('slideChange',function(){

  idx = this.realIndex;
  const total = $('.sc-mainswiper .swiper-slide:not(.swiper-slide-duplicate)').length; 
  // $('.sc-mainswiper .swiper-slide').length-2;
  result = idx/total*100;

  
  // $('.curr').css('width',result+'%');
  $('.curr').css('left',result+'%');
})


})



});