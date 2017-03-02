var num=50;$(window).bind('scroll',function(){if($(window).scrollTop()>num){$('.header_sticky').addClass('header_moved');}else{$('.header_sticky').removeClass('header_moved');}});$('.scene').parallax();$(function(){$('.parent-container').mixItUp({animation:{enable:true,effects:'fade scale',duration:600,easing:'ease',perspectiveDistance:'3000',perspectiveOrigin:'50% 50%',queue:false,queueLimit:1,animateChangeLayout:false,animateResizeContainer:true,animateResizeTargets:false,staggerSequence:false,reverseOut:false}});});$(document).ready(function(){$('.parent-container').magnificPopup({delegate:'a',type:'image',gallery:{enabled:true}});});$(document).ready(function(){$(".owl-carousel").owlCarousel({itemsCustom:[[0,1],[720,2],[1000,3]],slideSpeed:1000,paginationSpeed:400,autoPlay:true});$(".owl_brand").owlCarousel({itemsCustom:[[0,2],[600,3],[720,4],[1000,5]],slideSpeed:1000,paginationSpeed:400,autoPlay:true});$(".our_services_owl").owlCarousel({itemsCustom:[[0,1],[600,2],[720,3],[1000,3]],pagination:true,slideSpeed:1000,paginationSpeed:400,autoPlay:true});$(".news_carsoul").owlCarousel({itemsCustom:[[0,1],[600,2],[720,3],[1000,3]],pagination:true,slideSpeed:1000,paginationSpeed:400,autoPlay:true});new WOW().init();$('.counter').counterUp({delay:50,time:5000});"use strict";$('.our_skills_body').appear(function(){$('.progress_arya .progress-bar').progressbar({transition_delay:900,refresh_speed:3000,use_percentage:true,percent_format:function(percent){return percent+'%';},amount_format:function(amount_part,amount_total){return amount_part+' / '+amount_total;},});});});$(document).ready(function(){$('.popup-gallery').magnificPopup({delegate:'.pope',type:'image',tLoading:'Loading image #%curr%...',mainClass:'mfp-img-mobile',gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(item){return item.el.attr('title')+'<small>by Marsel Van Oosten</small>';}}});});


$(function(){
    $('#my-id').mixItUp();
    $('.rem_acive').click(function() {
               $('#project_active').removeClass('project_active')
});

});


/* --------------------------------------------------------
     1- pre loader js
     ----------------------------------------------------------- */

    $(window).load(function() {
        $("#loading").fadeOut(500);
    });