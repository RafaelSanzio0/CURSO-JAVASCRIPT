
//SELECIONO A CLASSE TITULO E SUBTITULO NO HTML E PEGO SEU CONTEÚDO DE TEXTO, AQUI POSSO ALTERAR O MESMO.
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var subtitulo = document.querySelector(".sub-titulo");
subtitulo.textContent = "Lista de pacientes";


// AQUI SELECIONO A CLASSE TITULO QUE JA FOI BUSCADA AI EM CIMA, CHAMO O EVENTO DE CLICK NA FUNÇÃO CRIADA MOSTRAMENSAGEM.
titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){
    console.log("Olá eu fui clicado!");
}



// AQUI TEMOS OUTRO TIPO DE FUNÇÃO BASTANTE USADA NO JS, A FUNÇÃO ANONIMA
subtitulo.addEventListener("click", function (){
    console.log("Olha só posso chamar uma função anônima.")
});

