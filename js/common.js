'use strict';

$(function(){

  $(window).on('scroll', function(e){
		let scrollTop = $(this).scrollTop();
    console.log($('.section-3').offset().top, scrollTop);
    if($('.section-3').offset().top/2 < scrollTop && $('.section-4').offset().top > scrollTop){
      // video autoplay;
      $('#vid').get(0).play();
    }else{
      $('#vid').get(0).pause();
    }
  });

});