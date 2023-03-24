const imagem = document.querySelector("#imgCarrosel");

// Imagens que aparecerão no carrosel
const carrosel = ["assets/img/makingPC.jpg", "assets/img/imgAcessories.png", "assets/img/imgSetup.jpg", "assets/img/insidePc.jpg", "assets/img/imgSetup2.jpg"];

let posicaoCarrosel = 0;

// Função que roda o carrosel
function rodarCarrossel() {
    posicaoCarrosel++;
    if (posicaoCarrosel > carrosel.length - 1) {
        posicaoCarrosel = 0;
    }
    
    source = carrosel[posicaoCarrosel];
    
    // Troca o caminho da imagem para a próxima posição
    imagem.setAttribute("src", source);
}

// Ativando a função periodicamente em 1800milisegundos
setInterval(rodarCarrossel, 1800)

// Função para redirecionar ao clicar no botão de chamada
const botoes = document.querySelectorAll("button");
function redirecionarBotao() {
    window.location.href = "#produto";
}

// Função para ativar a interatividade da seção de perguntas
const perguntas = document.querySelectorAll(".perguntas");
perguntas.forEach(pergunta => {
    pergunta.addEventListener("click", function () {
        pergunta.children[0].classList.toggle('active')
    })
})
