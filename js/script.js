
$(function(){

	var valorMin=0;
	var valorSeg=0;
	var valorTempo=0;
	var intervalo=0;
	var min=0;
	var seg=0;
	var tempo=0;
	
	

	function contagem(){
		// Se o tempo não for zerado
		if((tempo) >= 0){
			
			// Pega a parte inteira dos minutos
			var min = parseInt(tempo/60);
			// Calcula os segundos restantes
			var seg = tempo%60;					

			// Formata o número menor que dez, ex: 08, 07, ...
			if(min < 10){
				valorMin = "0"+min;
			}
			else{
				valorMin=min;
			}
			
			if(seg <=9){
				valorSeg = "0"+seg;
			}
			else{
				valorSeg = seg;
			}

				// Cria a variável para formatar no estilo hora/cronômetro
				$('input[name="dplMin"]').val(valorMin);
				$('input[name="dplSeg"]').val(valorSeg);
				tempo--;
		}
		else{
		clearInterval(intervalo);
		}

	}//fim contagem

	
	function setContagem (){

		min = parseInt($('input[name="dplMin"]').val());
		seg = parseInt($('input[name="dplSeg"]').val());
		tempo = min*60+seg;


		intervalo = setInterval(contagem,1000);

			
	}

	//testar Campos
	function testarCampos(){
		var testeCampo = true;
		//pegando os valores dos campos
		valorMin = $('input[name="dplMin"]').val();
		valorSeg = $('input[name="dplSeg"]').val();

		//Fazer os testes dos campos

		if(!testeNum(valorMin)){

			alert("Preencha corretamete o campo dos Minutos");
			$('input[name="dplMin"]').focus();
			testeCampo=false;
		} 

		if(!testeNum(valorSeg)){

			alert("Preencha corretamete o campo dos Segundos ");
			$('input[name="dplMin"]').focus();
			testeCampo=false;
		} 

		return testeCampo;
		
	}//fim teste campo

	function testeNum(num){

		var er = /^[0-9]+$/;		

		return er.test(num);

	}


	//Comportamento de levar o mouser por cima da div do canto direito
	$('#botao').mouseenter(function(){
		$('#botao').fadeTo('fast',0.25);
		
	});
	//Comportamento de tirar o mouser por cima da div do canto direito
	$('#botao').mouseleave(function(){
		$('#botao').fadeTo('fast',1)
	});
	//Comportamento click em cima da div
	$('#botao').click(function(){
		//testar campo
		if (testarCampos()){
			//iniciar contagem
			setContagem();	
		}
		

	});



});// fim do load do html