$(document).ready(function(){
      /* 카테고리 메뉴 */
     $(function(){
          $('header nav ul.gnb').click(function(){
               $('.categroup_wrap').stop().slideToggle();
          });
     });


     
     /* 메인이미지 슬라이드 */
     $(function(){
          $('.main_visual').slick({
               dots: true,
               infinite: true,
               speed: 300,
               slidesToShow: 1,
               slidesToScroll: 1,
               autoplay:true,
               responsive: [
                 {
                   breakpoint: 1024,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     infinite: true,
                     dots: true
                   }
                 },
                 {
                   breakpoint: 600,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                   }
                 },
                 {
                   breakpoint: 360,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                   }
                 }
               ]
             });
     });
     /* 모바일 메인이미지 슬라이드 */
     $(function(){
          $('.mo_main').slick({
               dots: true,
               infinite: true,
               speed: 300,
               slidesToShow: 1,
               slidesToScroll: 1,
               autoplay:true,
               responsive: [
                 {
                   breakpoint: 360,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     infinite: true,
                     dots: true
                   }
                 },
                
                 
               ]
             });
     });

     /* 중앙상품배너 슬라이드 */
    //  $(function(){
    //   $('.cont03').slick({
    //        dots: true,
    //        infinite: true,
    //        speed: 500,
    //        slidesToShow: 1,
    //        slidesToScroll: 1,
    //        autoplay:true,
    //        responsive: [
    //          {
    //            breakpoint: 1024,
    //            settings: {
    //              slidesToShow: 3,
    //              slidesToScroll: 3,
    //              infinite: true,
    //              dots: true
    //            }
    //          },
    //          {
    //            breakpoint: 600,
    //            settings: {
    //              slidesToShow: 2,
    //              slidesToScroll: 2
    //            }
    //          },
    //          {
    //            breakpoint: 480,
    //            settings: {
    //              slidesToShow: 1,
    //              slidesToScroll: 1
    //            }
    //          }
    //        ]
    //      });
    //   });

      /* 헤더고정 스크롤 했을때 */
      $(function(){
        /* headertop이라는 그릇에 header오프셋탑값을넣음 */
        var headerTop = $('header').offset().top;
        $(window).scroll(function(){
             var scrollTop = $(window).scrollTop();
             //console.log(headerTop);
             //console.log(scrollTop);
             if(headerTop < scrollTop){
                  //헤더 탑 값보다 스크롤했을때 값이 더 클때(내리니까 값이 커질수밖에 없음) 스크립트 코드작성(클래스명 fixed가 붙음)
                  $('header').addClass('fixed'); //헤더가 고정
             } else {
                  $('header').removeClass('fixed'); //값이 크지않을때(=원래자리에 있을때는 fixed 클래스가 없어진다 css에서 .fixed에 효과를 넣어뒀어서 클래스명이 사라지며 색이랑 효과도 원래대로 돌아옴)
             }
        });
      })
      

});