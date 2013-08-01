
$(function(){

	var valorMin;
	var valorSeg;
	var valorTempo;

	//Contagem
	var contagem = function(){

		valorTempo = parseInt(valorMin)*60+parseInt(valorSeg);

	}

	//testar Campos
	var testarCampos = function (){
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

	var testeNum =function (num){

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
			contagem();	
		}
		

	});



});// fim do load do html