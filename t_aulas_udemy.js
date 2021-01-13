//Class do elemento pai que abriga span com tempo da lição
elemento = '.curriculum-item-link--type--ZeQ8O';

//Busca e soma tempo das aulas nas spans
function tempo_curso(elem){

	//expandir todos os módulos para carregar as aulas na página
	$('.udi-angle-down.section--section-chevron--tJ4mD').click();
	
	tempo = 0;
	
	document.querySelectorAll(elem).forEach(function(e){
		tempo += parseInt(e.nextSibling.textContent.replace(/\D/gim, ''));
	});
	
	//retorna tempo em horas
	return tempo/60;
}

tempo_curso(elemento);