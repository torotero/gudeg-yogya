$(window).load(function() {

	

	$( "#navi ul li" ).on( "mouseover", function() {
		$(".first").removeClass("shadow1");
		$(this).addClass("shadow1");
	});

	$( "#navi ul li" ).on( "mouseleave", function() {
		$(this).removeClass("shadow1");
		$(".first").addClass("shadow1");
	});



	$( "#sub ul li" ).on( "mouseover", function() {
		$(".first").removeClass("shadow1");
		$(this).addClass("shadow1");
	});

	$( "#sub ul li" ).on( "mouseleave", function() {
		$(this).removeClass("shadow1");
		$("#sub").addClass("shadow1");
	});






	$( ".fadein" ).on( "mouseover", function() {
		$(this).addClass("shadow1");
	});





	$( "a" ).on( "mouseleave", function() {
		$('a').removeClass("shadow1");
	});




	












	$(".fadein a").on("click",function(e){
		e.preventDefault();
		 window.goto=$(this).attr("href");

		$('body').fadeOut(1500,function(){


		
		 document.location.href=window.goto;
	});

});














	// 	$( "a" ).on("click",function(e){
	// 	// $("#all").addClass("hide-everything");
	// 	// $("body").html(menu.html);
	// 	// document.body.innerHTML="hi!";

	// 	 window.goto=$(this).attr("href");

 //     		if ((window.goto)=="contact.html"){
 //     			// alert(window.goto);
 //     			// $("body").addClass('remodal-bg');

 //     			return false;
 //     		}  
     		

     	


	// 	$('body').fadeOut(1000,function(){
			
	// 		 // window.goto=document.getElementById("#navi").getAttribute("href");
 //     		 // document.location.href="menu.html";
     		 
 //     		 document.location.href=window.goto;


     	






 //    		});
	// 		e.preventDefault();


	// });











	// $( "#slide-1" ).on( "mouseover", function() {
	// 	$('#navi ul li').addClass("shadow1");
	// });

	// $( "#slide-1" ).on( "mouseleave", function() {
	// 	$('#navi ul li').removeClass("shadow1");
	// });









});