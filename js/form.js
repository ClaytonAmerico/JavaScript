var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");  
  var paciente = obtemPacienteDoFormulario(form); //Extraindo informações do paciente do form

   
  var erros = validaPacientes(paciente);
  console.log(erros);
  if(erros.length > 0 ){
	  
	  exibeMensagensDeErro(erros);
	  //var mensagemErro = document.querySelector("#mensagem-erro");
	  
	  return; 
  }
   
  adicionaPacienteNaTabela(paciente);
  
  form.reset();
  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
  
});

function adicionaPacienteNaTabela(paciente){
	var pacienteTr = montaTr(paciente); // Cria a tr e td do paciente
	var tabela = document.querySelector("#tabela-pacientes"); //Adicionando o paciente na tabela
	tabela.appendChild(pacienteTr);
	
}

function exibeMensagensDeErro(erros){
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";
	erros.forEach(function(erro) {
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}

function obtemPacienteDoFormulario(form){

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function montaTr(paciente){
  var pacienteTr = document.createElement("tr");
  
  //Adicionando classe paciente
  pacienteTr.classList.add("paciente")

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validaPacientes(paciente){
	
	var erros = [];
	
	if(paciente.nome.length == 0){
		erros.push("O nome não pode ser em branco");
	}
		
	if(!validaPeso(paciente.peso)){
		erros.push("Peso é inválido");
	}
	
	if(!validaAltura(paciente.altura)){
		erros.push("Altura é inválida");
	}
	
	if(paciente.gordura.length == 0){
		erros.push("A gordura não pode ser em branco");
	}
	
	if(paciente.peso.length == 0 ){
		erros.push("O peso não pode ser em branco");
	}
	
	if(paciente.altura.length == 0 ){
		erros.push("A altura não pode ser em branco");
	}
	
	return erros;
}



//  var nomeTd = document.createElement("td");
//  nomeTd.classList.add("info-nome");
//  nomeTd.textContent = paciente.nome;

//  var nomeTd = montaTd(paciente.nome, "info-nome");
//  var pesoTd = montaTd(paciente.peso, "info-peso");
//  var alturaTd = montaTd(paciente.altura, "info-altura");
//  var gorduraTd = montaTd(paciente.gordura, "info-gordura");
//  var imcTd = montaTd(paciente.imc, "info-imc");



//  var pesoTd = document.createElement("td");
//  var alturaTd = document.createElement("td");
//  var gorduraTd = document.createElement("td");
//  var imcTd = document.createElement("td");
//
//
//  pesoTd.textContent = paciente.peso;
//  alturaTd.textContent = paciente.altura;
//  gorduraTd.textContent = paciente.gordura;
//  imcTd.textContent = paciente.imc;
