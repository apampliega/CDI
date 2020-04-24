// guardar datos nevera
$(document).ready(function(){
$('.frigoOn ').click(function() {
	$('.frigoOn ').removeClass('selected');
	$('.frigoOff ').removeClass('selected');
	$(this).addClass('selected');
	//localstorage
	localStorage.setItem('estadoFrigorifico', 'on');
});

$('.frigoOff ').click(function() {
	$('.frigoOn ').removeClass('selected');
	$('.frigoOff ').removeClass('selected');
	$(this).addClass('selected');
  //localstorage
	localStorage.setItem('estadoFrigorifico', 'off');
});

});

//lee la variable y aplica la clase
 $(document).ready(function(){   

    if(localStorage.getItem('estadoFrigorifico') == 'on') {
        $(".frigoOn").addClass("selected");
        $(".frigoOff").removeClass("selected");
    } else{
    	$(".frigoOff").addClass("selected");
    	$(".frigoOn").removeClass("selected");
    }
 }); 




 //guardar datos congelador
$(document).ready(function(){
$('.congOn ').click(function() {
	$('.congOn ').removeClass('selected');
	$('.congOff ').removeClass('selected');
	$(this).addClass('selected');
	//localstorage
	localStorage.setItem('estadoCongelador', 'on');
});

$('.congOff ').click(function() {
	$('.congOn ').removeClass('selected');
	$('.congOff ').removeClass('selected');
	$(this).addClass('selected');
  //localstorage
	localStorage.setItem('estadoCongelador', 'off');
});

});

//lee la variable y aplica la clase
 $(document).ready(function(){   

    if(localStorage.getItem('estadoCongelador') == 'on') {
        $(".congOn").addClass("selected");
        $(".congOff").removeClass("selected");
    } else{
    	$(".congOff").addClass("selected");
    	$(".congOn").removeClass("selected");
    }
 }); 



