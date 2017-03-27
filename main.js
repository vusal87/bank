
autoSlider();
var left =0;

var timer;


function autoSlider(){
  	timer=setTimeout(function(){
		var polasa=document.getElementById('polasa');
		left=left-404;
		if (left<-808){
			left=0;
			clearTimeout(timer);
		}
		polasa.style.left=left+'px'; 
		autoSlider();
	},3000);
}

