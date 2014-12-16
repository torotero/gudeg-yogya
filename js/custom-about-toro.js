 // $(window).load(function() {
 //        $('#sejarah').fadeIn();
 //    })









$(document).ready(function () {
	


$('body').sakura();
 $('body').fadeIn();



$('.second').css('opacity', 0.4); 
$('.third').css('opacity', 0.4); 

$("#filosofi").css('display','none');
$("#masak").css('display','none');




$('.first').mouseenter(  
   function(){  
   	$('.second').css('opacity', 0.4); 
      $('.third').css('opacity', 0.4); 
      $('.first').css('opacity', 1);   

        $("#filosofi").fadeOut(1000);
        $("#masak").fadeOut(1000);
         $("#sejarah").fadeIn(1700);

         
   }
  
);  





$('.second').mouseenter(  
   function(){  
   	$('.second').css('opacity', 1); 
      $('.third').css('opacity', 0.4); 
      $('.first').css('opacity', 0.4);   

      $("#sejarah").fadeOut(1000);
      $("#masak").fadeOut(1000);
      $("#filosofi").fadeIn(1700);
   }
);  








$('.third').mouseenter(  
   function(){  
   	$('.second').css('opacity', 0.4); 
      $('.third').css('opacity', 1); 
      $('.first').css('opacity', 0.4);   

          $("#filosofi").fadeOut(1000);
       $("#sejarah").fadeOut(1000);
  $("#masak").fadeIn(1700);


   }
  
);  













});