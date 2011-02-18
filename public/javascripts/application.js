 $(document).ready(function() {
   
   $(".calltoaction_wrapper").hover( function(){
    $(this).children(".l_corner").css('background','url(/images/calltoaction_l.gif) no-repeat 0 -68px');
    $(this).children(".r_corner").css('background','url(/images/calltoaction_r.gif) no-repeat 0 -68px');
    $(this).children(".content").css('background','url(/images/calltoaction_c.gif) repeat-x  0 -68px');
  },
  function(){
    $(this).children(".l_corner").css('background','url(/images/calltoaction_l.gif) no-repeat');
    $(this).children(".r_corner").css('background','url(/images/calltoaction_r.gif) no-repeat');
    $(this).children(".content").css('background','url(/images/calltoaction_c.gif) repeat-x');  
  });   
 
 });  
