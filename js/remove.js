var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode.classList.add("timeError"); // TR = paciente = remover 
    
    setTimeout(function(){
        
     alvoEvento.parentNode.remove();
        
    },500);
    
   
});




//var pacientes = document.querySelectorAll(".paciente");
/*pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick",function(){
        this.remove();
        console.log("Paciente removido");
        
        
        
        
        
    });

    
});
*/