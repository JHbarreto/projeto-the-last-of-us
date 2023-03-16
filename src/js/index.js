/*
Objetivo - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

passo 1 -  dar um jeito de pegar o elemento HTML dos botões

passo 2 - dar um jeito de identificar o clique do usuário no botão

passo 3 - desmarcar o botão selecionado anterior

passo 4 - marcar o botão clicado como se estivesse selecionado

passo 5 - esconder a imagem de fundo anterior

passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado

*/

// passo 1 -  dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
// passo 2 - dar um jeito de identificar o clique do usuário no botão
// addEventListener () serve para identificar oq é feito pelo usuario; exemplo:
// const botao1 = document.getElementById ("botao1");
// botao1.addEventListener("click" , () => {
//     console.log("clicou no botao 1")
// }); como são varios botões fica inviavel utilizar o mesmo codigo varias vezes e para solucionar isso sera necessario utilizar um laço de repetição.

botoesCarrossel.forEach((botao , indice)=>{
    botao.addEventListener("click" , () =>{

        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);  

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);  
    })
});

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add("selecionado");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
