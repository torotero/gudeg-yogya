$(document).ready(function(){
  
  
  $(".ef1").mouseenter(function(){
   
    $('.ef1').toggleClass('animated bounce');
   
  })



  ;


  $(".ef2").mouseenter(function(){
   
    $('.ef2').toggleClass('animated swing');
   
  });


  $(".ef3").mouseenter(function(){
   
    $('.ef3').toggleClass('animated wobble');
  });





  $(".ef2").click(function(){
   
    $('.first').addClass('animated bounceOutRight');
    $('.second').addClass('animated bounceOutLeft');
    $('.third').addClass('animated fadeOutDown');
   
  });








});

 





