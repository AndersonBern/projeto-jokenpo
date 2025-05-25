let resultado = document.getElementById('jokenpo');

let msg = document.getElementById('res');

let player = '';
let pc = 0;

function escolha(id) {
    let opcao = `${id}`;
    player = opcao;

    let jogo = `<section id="jogo">
            <div id="resultado">
                <div id="player">
                    <img src="imagens/papel-E.png" alt="">
                </div>
                <div id="pc">
                    <img src="imagens/papel-D.png" alt="">
                </div>
            </div>
            <button onclick="reiniciar()">Reiniciar</button>
        </section>`

    resultado.innerHTML = jogo;

    let jogador = document.getElementById('player');
    let cpu = document.getElementById('pc');

    let contador = 0;
    let indice = 0;

    let sorteio = setInterval(function() {
        indice += 1;
        console.log(contador);
        console.log(indice);
        console.log('-');

        if(contador < 7) {
            if(indice == 1) {
                jogador.innerHTML = '<img src="imagens/papel-E.png" alt=""></img>'

                cpu.innerHTML = '<img src="imagens/papel-D.png" alt=""></img>'

            }

            if (indice == 2) {
                jogador.innerHTML = '<img src="imagens/tesoura-E.png" alt=""></img>'

                cpu.innerHTML = '<img src="imagens/tesoura-D.png" alt=""></img>'

            }

            if (indice == 3) {
                jogador.innerHTML = '<img src="imagens/pedra-E.png" alt=""></img>';

                cpu.innerHTML = '<img src="imagens/pedra-D.png" alt=""></img>';
                
                indice = 0;
                contador += 1;
            }
            
        }
        else {
            parar();
        }

    }, 100);

    function parar() {
        clearInterval(sorteio);
        jogador.innerHTML = `<img src="imagens/${player}-E.png" alt=""></img>`

        pc = sortearValor(1, 3);

        if (pc == 1) {
            cpu.innerHTML = '<img src="imagens/papel-D.png" alt=""></img>'

            verificar()
        }
        if (pc == 2) {
            cpu.innerHTML = '<img src="imagens/tesoura-D.png" alt=""></img>'

            verificar()
        }
        if (pc == 3) {
            cpu.innerHTML = '<img src="imagens/pedra-D.png" alt=""></img>';

            verificar()
        }
    }

    function verificar() {
        if ((player == 'papel' && pc == 1) || (player == 'tesoura' && pc == 2) || (player == 'pedra' && pc == 3)) {
            msg.innerHTML = 'EMPATE!'
        }

        if ((player == 'papel' && pc == 3) || (player == 'tesoura' && pc == 1) || (player == 'pedra' && pc == 2)) {
            msg.innerHTML = 'Você GANHOU!'
        }

        if ((player == 'papel' && pc == 2) || (player == 'tesoura' && pc == 3) || (player == 'pedra' && pc == 1)) {
            msg.innerHTML = 'Você PERDEU!'
        }
    }

    function sortearValor(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

function reiniciar() {
    msg.innerHTML = 'Escolha uma opção:'

    resultado.innerHTML = `<section id="escolha">
            <div id="pedra" class="opt" onclick="escolha('pedra')">
                <img src="imagens/pedra-E.png" alt="">
            </div>
            <div id="papel" class="opt" onclick="escolha('papel')">
                <img src="imagens/papel-E.png" alt="">
            </div>
            <div id="tesoura" class="opt" onclick="escolha('tesoura')">
                <img src="imagens/tesoura-E.png" alt="">
            </div>
        </section>`
}