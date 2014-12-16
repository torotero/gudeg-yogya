




    $(document).ready(function() {
       



       $('#first_page').css('display','block');


        $('#menu-bar-left').click( function(){
          $('#first_page').fadeOut(1000,
            function(){
              $('#second_page').fadeIn(4000);

                });
        })



              $('#menu-bar-right').click( function(){
                    $('#first_page').fadeOut(1000,
                        function(){
                             $('#third_page').fadeIn(4000);
                                
             });
            
         })
          
                                    



    })















========



    $(document).ready(function() {
       



       $('#first_page').css('display','block');


        $('#menu-bar-right,#menu-bar-left').click( function(){
            $('#first_page').fadeOut(1000,
                function(){
                    $('#second_page').fadeIn(4000);


           $('#menu-bar-right,#menu-bar-left').click( function(){
                    $('#second_page').fadeOut(1000,
                        function(){
                            $('#third_page').fadeIn(4000);
                                    

              $('#menu-bar-right,#menu-bar-left').click( function(){
                    $('#third_page').fadeOut(1000,
                        function(){
                             $('#first_page').fadeIn(4000);
                                

                        });
                });


                        });
                });

                            
                });
        });




    })




