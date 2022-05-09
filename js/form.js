var botaoadcionar = document.querySelector ("#adicionar-paciente");

botaoadcionar.addEventListener("click",function(event){ //criar funcao anonima addEventListener (escuta evento)
event.preventDefault();// evitar comportamento padrao do botao

//extrair informacoes do form
var form = document.querySelector("#form-adiciona");
var paciente = obtempacientedoformulario(form);

//cria tr e td do paciente
var pacienteTr = montaTr (paciente);

var erros = validaPaciente(paciente);

if (erros.length > 0){
    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.textContent = erros;
    return;
}

//adicionando paciente na tabela
var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);//inserir todor os dados na tabela 

form.reset ();//reset para limpar formulario

});


function obtempacientedoformulario(form){

    var paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculaImc(form.peso.value,form.altura.value)
    }
    return paciente;
}
 
function montaTr(paciente){

    var pacienteTr = document.createElement("tr");//cria tr
    pacienteTr.classList.add("paciente");//adicionando a class para este tr

    var nometd = montaTd(paciente.nome,"info-nome");//monta td
    var pesotd = montaTd(paciente.peso,"info-peso");//monta td
    var alturatd = montaTd(paciente.altura,"info-altura");//monta td
    var gorduratd = montaTd(paciente.gordura,"info-gordura");//monta td
    var imctd = montaTd(paciente.imc,"info-imc");//monta td
   

    pacienteTr.appendChild(nometd);//metodo para colocar valor dentro da celula - adicionar
    pacienteTr.appendChild(pesotd);//metodo para colocar valor dentro da celula - adicionar
    pacienteTr.appendChild(alturatd);//metodo para colocar valor dentro da celula - adicionar
    pacienteTr.appendChild(gorduratd);//metodo para colocar valor dentro da celula - adicionar
    pacienteTr.appendChild(imctd);//metodo para colocar valor dentro da celula - adicionar

    return pacienteTr;
}
function montaTd(dado,classe){

   
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}
function validaPaciente(paciente) {

    var erros = [];

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}
