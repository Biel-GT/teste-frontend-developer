// Contagem caracteres do input do telefone
const input = document.querySelector("#tel");
const limiteTelefone = 11;

input.addEventListener('keyup', function () {
    let telefone = input.value.length;
    let resto = limiteTelefone - telefone;
    if (resto < 1) {
        input.value = input.value.slice(0, limiteTelefone);
        alert('Limite de caracteres atingido!');
    }
})

// Contagem caracteres do textarea
const textarea = document.querySelector("textarea");
const caracteres = document.querySelector("#caracteres");
const limite = 255;

textarea.addEventListener('keyup', function () {
    let texto = textarea.value;
    let contagem = texto.length;
    let resto = limite - contagem;
    if (resto < 1) {
        textarea.value = textarea.value.slice(0, limite);
        alert('Limite de caracteres atingido!');
        return caracteres.innerHTML = 0;
    }
    caracteres.innerHTML = resto;
})


// Imagens que aparecerão no carrosel
const imagem = document.querySelector("#imgCarrosel");
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

