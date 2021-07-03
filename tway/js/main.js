$(document).ready(function(){

    //왕복/편도 탭메뉴
    $( '.sel_booking').tabs({
    });

    //로그인 탭메뉴
    $( '.login_box_inner').tabs({
    });

    $( '.login_nav_slide_inner').tabs({
      collapsible: true,
      active:false,
    });

    
    $('#login_nav_slide').hide();
    $('.login_more').click(function(){
      $(this).stop().toggleClass('active');
      $('#login_nav_slide').stop().slideToggle();
      $('.login_nav_cont').hide();

      $('.login_nav_tit ul li a').click(function(){
        $('.login_nav_cont').stop().show();
      });
    });


    $('.trip_btn').click(function(){
      $('.trip_btn').stop().toggleClass('active');
    });
    //슬라이더

    //이벤트슬라이더
    $('#event_slider').slick({
      dots: true,
      appendArrows:false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true
    });

    //제휴 서비스
    $('#servie_slider').slick({
      dots: true,
      appendArrows:false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true
    });

    //최저가여행
    $('#price_slider').slick({
      dots: true,
      appendArrows:false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true
    });

    //다양한 서비스
    $('#various_slider').slick({
      dots: true,
      appendArrows:false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true
    });

    //공지사항 슬라이더
    $('.notice_slider').slick({
      dots:false,
      arrows: false,
      vertical:true,
      verticalSwiping:true,
      autoplay: true,
      autoplaySpeed: 1000,
      slidesToShow: 1
    });

    $('.login_nav_tit ul').slick({
      dots: false,
      appendArrows:false,
      infinite: false,
      slidesToShow: 1,
      variableWidth: true,
    });

    //공지사항 재생,정지 버튼
    $('.pause').on('click', function() {
      $('.pause').hide();
      $('.play').show();
      $('.notice_slider').slick('slickPause')
    });
  
    $('.play').on('click', function() {
      $('.play').hide();
      $('.pause').show();
      $('.notice_slider').slick('slickPlay')
    });
    
    //오픈팝업

    $("#open_modal").hide(); 
      $(window).load(function() {
      $('#open_modal').fadeIn(300);
    });
    $('#open_modal').on('click',function(){
      $(this).fadeOut(300);
    });



    //소아유아 모달
    $("#age_modal").hide(); 
    $('.age_popup').on('click',function(){
      $('#age_modal').fadeIn(300);
    });
    $('#age_modal').on('click',function(){
      $(this).fadeOut(300);
    });
    
    //할인코드 모달
    $("#sale_code_modal").hide(); 
    $('.sale_code_modal_btn').on('click',function(){
      $('#sale_code_modal').fadeIn(300);
    });
    $('#sale_code_modal').on('click',function(){
      $(this).fadeOut(300);
    });

    //언어선택 모달 
    $("#area_lge").hide(); 
    $('.language_btn').on('click',function(){
      $ ( 'body'). css ( "overflow", "hidden");
      $('#area_lge').show();
    });
    $('.area_close').on('click',function(){
      $('#area_lge').hide();
      $ ( 'body'). css ( "overflow-y", "scroll");
    });

  
    //nav

    $('.mo_nav_button').on('click',function(){
      $ ( 'body'). css ( "overflow", "hidden");
      $('#nav').addClass('on');
    });
    $('.nav_close').on('click',function(){
      $('#nav').removeClass('on');
      $ ( 'body'). css ( "overflow-y", "scroll");
    });

    var deplist = $('.dep_list li');
        deplist.on('click',function(){
        $(this).toggleClass('active');
        $('.dep_list li').not(this).removeClass('active');
    });
    $('.dep_list > li > ul').hide();
    $('.dep_list >li>a').click(function(ev){
      ev.preventDefault();
      $(this).next().stop().slideToggle();
      $('.dep_list >li>a').not(this).next().slideUp();
  
    });

  
    // 푸터 아코디언
    $("#fot_b_info").hide(); 
    $('.more_btn span').on('click',function(){
      $(this).stop().toggleClass('active');
      $('#fot_b_info').stop().slideToggle(300);
    });
    
    
  
  });


  //스크롤 탑버튼, 헤더클래스추가
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    //console.log(scroll);
    if (scroll >= 100) {
      //console.log('a');
      $("#header").addClass("scroll");
    } else {
      //console.log('a');
      $("#header").removeClass("scroll");
    }
      $(window).scroll(function () {
          if ($(this).scrollTop() >= 300) {
              $('.to_top_btn').fadeIn();
          } else {
              $('.to_top_btn').fadeOut();
          }
      });
      $('.to_top_btn').click(function (e) {
          e.preventDefault();
          $('html, body').stop().animate({
              scrollTop: 0
          }, 500);
  
      });
      
      

  });
  