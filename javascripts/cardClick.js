$(document).ready(function(){
	var i=1,j=1,k=1;
	$(".firstCard").click(function(){
		if(i==1)
	    {
	    	$(".firstCard").css("height","600px");
	    	i=0;
	    	$("#text1").fadeOut();
	    }
	    else if(i==0)
	    {
	    	$(".firstCard").css("height","240px");
	    	i=1;
	    	$("#text1").fadeIn();
	    }
		$(".secondCard").css("height","240px");
		$("#text2").fadeIn();
		$(".thirdCard").css("height","240px");
		$("#text3").fadeIn();

	});
	
	$(".secondCard").click(function(){
		if(j==1)
	    {
	    	$(".secondCard").css("height","600px");
	    	j=0;
	    	$("#text2").fadeOut();
	    }
	    else if(j==0)
	    {
	    	$(".secondCard").css("height","240px");
	    	j=1;
	    	$("#text2").fadeIn();
	    }
		$(".firstCard").css("height","240px");
		$("#text1").fadeIn();
		$(".thirdCard").css("height","240px");
		$("#text3").fadeIn();
	});
	
	$(".thirdCard").click(function(){
		if(k==1)
	    {
	    	$(".thirdCard").css("height","600px");
	    	k=0;
	    	$("#text3").fadeOut();
	    }
	    else if(k==0)
	    {
	    	$(".thirdCard").css("height","240px");
	    	k=1;
	    	$("#text3").fadeIn();
	    }
		$(".firstCard").css("height","240px");
		$("#text1").fadeIn();
		$(".secondCard").css("height","240px");
		$("#text2").fadeIn();
	});
	
});