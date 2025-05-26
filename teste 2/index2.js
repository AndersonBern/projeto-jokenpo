let mensagem = document.getElementById('res');
let main = document.getElementById('jokenpo');
let botao = document.getElementById('btn')

let alternativa = document.getElementById('escolha');
let opcaoPlayer = '';

let game = document.getElementById('jogo')
let player = document.getElementById('player');
let cpu = document.getElementById('pc');

//Peguei a opção selecionada pelo jogador.
function escolha(opt) {
    opcaoPlayer =  parseInt(opt);
    console.log(opcaoPlayer)

    alternativa.style.display = 'none';
    game.style.display = 'block';
}

//Criei arrays com as imagens dentro.
let imgPlayer = ["imagens/pedra-E.png", "imagens/papel-E.png", "imagens/tesoura-E.png"];

let imgPc = ["imagens/pedra-D.png", "imagens/papel-D.png", "imagens/tesoura-D.png"];

//Criei o indice
let indice = 0;

//Função para efeito em loop das imagens.
function loop() {

    player.src = imgPlayer[indice];
    cpu.src = imgPc[indice];

    indice++;

    if(indice === 3) {
        indice = 0;
    }
    
}

//Chamada da função loop com intervalo de 0.1s
let sorteio = setInterval(loop, 100);

//Criei um contador para a contagem.
let contador = 1;

//Função contagem regressiva.
function contagem() {

    mensagem.innerHTML = contador;

    let resultado = setInterval(() => {
        contador++
        mensagem.innerHTML = contador;
    

        if(contador === 3) {
            //Parando o loop da imagem e a contagem regressiva.
            clearInterval(sorteio);
            clearInterval(resultado);

            //Mostrando as escolhas.
            player.src = imgPlayer[opcaoPlayer];
            cpu.src = imgPc[opcaoCPU];

            //Chamada para a função de resultado.
            final();

            botao.style.display = 'block'
        }
}, 1000);
}

//Gerando uma escolha aleatória para o CPU.
let opcaoCPU = Math.floor(Math.random()* 3);

//Função para verificar o vencedor
function final() {
    if (opcaoPlayer == opcaoCPU) {
        mensagem.innerHTML = 'EMPATE!'
    }

    if ((opcaoPlayer == 0 && opcaoCPU == 2) || (opcaoPlayer == 1 && opcaoCPU == 0) || (opcaoPlayer == 2 && opcaoCPU == 1)) {
        mensagem.innerHTML = 'Você GANHOU!';
    }
    if ((opcaoPlayer == 0 && opcaoCPU == 1) || (opcaoPlayer == 1 && opcaoCPU == 2) || (opcaoPlayer == 2 && opcaoCPU == 0)){
        mensagem.innerHTML = 'Você PERDEU!'
    }
     

}