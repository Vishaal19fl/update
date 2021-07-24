$(document).ready(function(){


  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('load scroll',function(){
    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    
    if($(window).scrollTop() > 0){
      $('header').addClass('sticky');
    }else{
      $('header').removeClass('sticky');
    }

    if($(window).scrollTop() > 0){
      $('.scroll-top').show();
    }else{
      $('.scroll-top').hide();
    }
    

    if($(window).scrollTop() > 30){
      $('.header').css({'background':'rgba(0,0,0,0.5)','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
    }else{
      $('.header').css({'background':'none','box-shadow':'none'});
    }

    const plus = document.getElementsByClassName(".accordion-header")+document.getElementsByTagName("span")
    

  });



  $('section').each(function(){

    let top = $(window).scrollTop();
    let offset = $(this).offset().top - 200;
    let id = $(this).attr('id');
    let height = $(this).height();

    if(top > offset && top < offset + height){
      $('.navbar a').removeClass('active');
      $('.navbar').find(`[href="#${id}"]`).addClass('active');
    }

  });

  $(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
  
    $(window).on('load scroll',function(){
  
      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 0){
        $('header').addClass('sticky');
      }else{
        $('header').removeClass('sticky');
      }
  
      if($(window).scrollTop() > 0){
        $('.scroll-top').show();
      }else{
        $('.scroll-top').hide();
      }
  
      // scroll spy 
  
      $('section').each(function(){
  
        let top = $(window).scrollTop();
        let offset = $(this).offset().top - 200;
        let id = $(this).attr('id');
        let height = $(this).height();
  
        if(top > offset && top < offset + height){
          $('.navbar a').removeClass('active');
          $('.navbar').find(`[href="#${id}"]`).addClass('active');
        }
  
      });
  
    });

  });

 


});
