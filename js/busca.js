var buttonBusca = document.querySelector("#buscar-paciente");

buttonBusca.addEventListener("click",function(){
    
    console.log("Buscando paciente...");
    var xhr = new XMLHttpRequest(); // aqui estamos criando um obj de fazer requisições 
    xhr.open("GET","https://api-pacientes.herokuapp.com/pac1ientes"); // aqui usamos o metodo open para acessar o site
    
    xhr.addEventListener("load",function(){ // aqui add um evento que ira carregar os dados da pagina para nos
            
        var erroAjax = document.querySelector("#erro-ajax");    

        if (xhr.status == 200){
            
        erroAjax.classList.add("invisivel")

        var resposta = xhr.responseText // para isso devemos add um  padrao que é o responseText
        var respostaFormatada = JSON.parse(resposta); // converte em array que é o formato que esta o mesmo
        //console.log(respostaFormatada);
        //console.log(resposta);

        
        respostaFormatada.forEach(function(paciente){
            
            criaPaciente(paciente);
               
        });
    }else{
        
        erroAjax.classList.remove("invisivel")
    }
    
});
    
    
    xhr.send();
    
    
    
});