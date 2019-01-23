var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  //Extraindo informações do paciente do form
  var paciente = obtemPacienteDoFormulario(form);

  // Cria a tr e td do paciente
  var pacienteTr = montaTr(paciente);



  //Adicionando o paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);
  form.reset();
});

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

  pacienteTr.classList.add("paciente")

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc");

  return pacienteTr;
}

function montaTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
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
