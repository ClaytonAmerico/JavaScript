var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//var paciente = document.querySelector(".paciente");

//var paciente = document.querySelector("#primeiro-paciente"); seleciona o id

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

  //console.log(pacientes[i]);
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhvalido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if(!validaPeso){
    pesoEhvalido = false;
    tdImc.textContent = "Peso Inválido";
    //paciente.style.backgroundColor = "lightcoral";
    paciente.classList.add("paciente-invalido");
  }

  if(!validaAltura){
    alturaEhValida = false;
    tdImc.textContent = "Altura Inválida";
    //paciente.style.backgroundColor = "lightcoral";
    paciente.classList.add("paciente-invalido");
  }

  if (alturaEhValida && pesoEhvalido) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function validaPeso(peso){
  if (peso >= 0 && peso < 1000) {
    return true;
  }else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura </3.00) {
    return true;
  }else {
    return false;
  }

}
function calculaImc(peso, altura){
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}

//function mostraMensagen() {
//  console.log("Olá eu fui clicado");
//}
//var teste = document.querySelector("h1");
//console.log(teste.classList);
