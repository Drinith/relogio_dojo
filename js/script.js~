
			
	var position=0;
	var min = 0;
	var max= 1;
	
	
		//Load the image 
	loadImage= function (image) {
	  $("#image").fadeOut('slow', function(){
	    $("#image").load(function() {
	      $(this).hide();
	      $(this).fadeIn();
	    }).attr('src',image);
	  });
	}

	
	esquerda= function(){
		
		//andando com os valores para esquerda 
		position-=1;				
		//se posição ficar negativa refaça o loop para três fotos
		if(position<min || position> max){
			position=max;
		}
		
		loadImage("img/image"+position+".jpg")
		
	}
	
	direita = function (){
		
		//andando com os valores para esquerda 
		position+=1;
		
		if(position>max || position<min){
			position=min;
		}
		loadImage("img/image"+position+".jpg")
		
	}
