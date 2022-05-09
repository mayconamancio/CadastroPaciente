var titulo = document.querySelector(".titulo"); // criei variavel e pedi para buscar no html o .titulo que e uma class
titulo.textContent = "Aparecida Nutricionista"; // peguei nome da variavel que criei .textConted = "nomear o que quero"


var pacientes = document.querySelectorAll(".paciente"); //busca no html all todos pacientes class .pacientes

for(var i = 0; i < pacientes.length; i++){ //.length percorrer lista da var pacientes toda
  

var paciente = pacientes[i]; //declarando que todo paciente =[i] que somando no loop da resultado

var tdpeso = paciente.querySelector(".info-peso"); // criei variavel tdpeso e pedi para buscar class .info-peso


var tdaltura = paciente.querySelector(".info-altura")
var altura = tdaltura.textContent;

var tdimc = paciente.querySelector(".info-imc");


var peso = tdpeso.textContent; //textContent me mostra o valor 

var alturavalida = validaAltura(altura);
var pesovalido = validaPeso(peso);

if(!pesovalido){ //se  valor peso for menor ou igual a 0 ou || peso maior que 1000 alerta: peso invalido!
    alert ("peso invalido!")
    pesovalido= false;
    tdimc.textContent = "peso invalido!" ;//menssagem de erro que sera mostrada no resultado IMC
    //paciente.style.color= "white";// mudar propriedade da letra com a cor
    paciente.classList.add("paciente-invalido"); // para criar class para chamar funcao css
}
if(!alturavalida){ //! no comeco siginifica nao ,se  valor altura for menor ou igual a 0 ou || altura maior que 1000 alerta: peso invalido!
    alert ("altura invalido!")
    alturavalida = false;
    tdimc.textContent = "altura invalida!";//menssagem de erro que sera mostrada no resultado IMC
   // paciente.style.color= "white";// mudar propriedade da letra com a cor
    paciente.classList.add("paciente-invalido"); // para criar class para chamar funcao css
    }

if ( alturavalida && pesovalido){// esse if só sera executado quando os dois forem true (verdadeiro)
     
    var imc = calculaImc (peso,altura);
    tdimc.textContent = imc;
}
}
function validaPeso(peso){
    if (peso >= 0 && peso <1000){
   return true;}
   else {
       return false;
   }
}
function validaAltura(altura){
    if (altura >= 0 && altura <= 3){
   return true;}
   else {
       return false;
   }
}    
 function calculaImc(peso,altura){

    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(1);//.toFixed(1) significa que quero apenas 1 casa decimal para valor apresentado
 }