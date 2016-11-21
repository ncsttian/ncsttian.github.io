$(document).ready(function(){
	$(".firstCard").mouseover(function(){
		$(".firstCard").css("background-color","#343434");
		$("#text1").css("color","#FFFFFF");
	});
	$(".firstCard").mouseout(function(){
		$(".firstCard").css("background-color","#FFFFFF");
		$("#text1").css("color","#343434");
	});
	
	$(".secondCard").mouseover(function(){
		$(".secondCard").css("background-color","#343434");
		$("#text2").css("color","#FFFFFF");
	});
	$(".secondCard").mouseout(function(){
		$(".secondCard").css("background-color","#FFFFFF");
		$("#text2").css("color","#343434");
	});
	
	$(".thirdCard").mouseover(function(){
		$(".thirdCard").css("background-color","#343434");
		$("#text3").css("color","#FFFFFF");
	});
	$(".thirdCard").mouseout(function(){
		$(".thirdCard").css("background-color","#FFFFFF");
		$("#text3").css("color","#343434");
	});
	
});
