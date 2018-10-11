var botaoAdicionar = document.querySelector("#adicionar-paciente");

        botaoAdicionar.addEventListener("click", function() {
        event.preventDefault();
        console.log("Fui clicado!");
    
        var form = document.querySelector("#form-adiciona");
    
        // função que pega os dados dos pacientes
        var paciente = obtemValoresDoPaciente(form);
        console.log(paciente);
    
    
        
            
        // CONDIÇÃO QUE VERIFICA SE O PACIENTE É VALIDO OU NAO, O RETURN VAZIO NAO DEIXA Q CASO O PACIENTE SEJA INVALIDO ELE SEJE ADD
        var erros = validaPaciente(paciente);

        if (erros.length > 0) {
            exibeMsgErros(erros);
            return;
        }
    
        criaPaciente(paciente);
        
        form.reset();
            
        var mensagensErro = document.querySelector("#msg-erro");
        mensagensErro.innerHTML = "";
            


});


/* 
aqui temos uma função com  um objeto PACIENTE com seus atributos... PORQUE CRIEI UM OBJETO? SIMPLESMENTE AO INVES DE TER VARIAS
                         VARIAVEIS COMO  
                                        var nome = form.nome.value;
                                        var peso = form.peso.value;
                                        var altura = form.altura.value;
                                        var gordura = form.gordura.value;
                                        
                            crio um objeto var paciente que recebe todas essas "var".            
*/                


function obtemValoresDoPaciente(form){
    
        var paciente = { 
            
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculaImc(form.peso.value,form.altura.value)
            
         
        }
        
        return paciente    
    
}

function montaTr(paciente){
    
     var pacienteTr = document.createElement("tr"); // cria um tr
    
     pacienteTr.classList.add("paciente"); // coloca a classe no tr criado
    
        pacienteTr.appendChild(montaTd(paciente.nome,"info-nome")); // faz o tr adotar os tds para ele, então chamamos a função que cria classe e da dados aos tds
        pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
        pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
        pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
        pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));
        
    return pacienteTr;
       
}

function montaTd(dado,classe){
    
var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add("classe");
    
    return td
}



function validaPaciente(paciente) {
    
    var erros = [];
    
    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    
    
    
    return erros;
    
}

function exibeMsgErros(erros){
    
    var ul = document.querySelector("#msg-erro");
    ul.innerHTML = ""; // serve pra nao deixar aculumar msgs de erros
    
    erros.forEach(function(erro){
    var li = document.createElement("li")
    li.textContent = erro;
    ul.appendChild(li);
    
    }
    
    
)};


function criaPaciente(paciente){
    
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    
}




        