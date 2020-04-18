/*
$(document).ready(function(){
$('.simple-radio li').click(function() {


  $('.simple-radio li').removeAttr('class');
  $(this).addClass('checked');
});
});*/


$(document).ready(function(){
$('.estado_frigorifico button').click(function() {


 //$('.estado_frigorifico button').removeAttr('class');
  $('.estado_frigorifico button').removeClass('selected');
  $(this).addClass('selected');
});
});


$(document).ready(function(){
$('.estado_congelador button').click(function() {


 //$('.estado_frigorifico button').removeAttr('class');
  $('.estado_congelador button').removeClass('selected');
  $(this).addClass('selected');
});
});
