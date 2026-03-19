/**
 * ATIVIDADE JAVASCRIPT - SOLUÇÕES
 */

// --- EXERCÍCIO 1: Jogo de Adivinhação ---
function jogoAdivinhacao() {
    const numeroSecreto = Math.floor(Math.random() * 20) + 1;
    let palpite = 0;
    let acertou = false;

    console.log("--- Jogo de Adivinhação (1 a 20) ---");

    while (!acertou) {
        palpite = parseInt(prompt("Tente adivinhar o número (entre 1 e 20):"));

        if (palpite === numeroSecreto) {
            console.log("Parabéns! Você acertou o número " + numeroSecreto);
            acertou = true;
        } else if (palpite > numeroSecreto) {
            console.log("O número secreto é MENOR que " + palpite);
        } else {
            console.log("O número secreto é MAIOR que " + palpite);
        }
    }
}

// --- EXERCÍCIO 2: Pedra, Papel ou Tesoura ---
function pedraPapelTesoura() {
    const opcoes = ["Pedra", "Papel", "Tesoura"];
    const escolhaUsuario = prompt("Escolha Pedra, Papel ou Tesoura:").trim();
    
    const indiceAleatorio = Math.floor(Math.random() * 3);
    const escolhaComputador = opcoes[indiceAleatorio];

    console.log("--- Pedra, Papel ou Tesoura ---");
    console.log("Você escolheu: " + escolhaUsuario);
    console.log("Computador escolheu: " + escolhaComputador);

    if (escolhaUsuario === escolhaComputador) {
        console.log("Empate!");
    } else if (
        (escolhaUsuario === "Pedra" && escolhaComputador === "Tesoura") ||
        (escolhaUsuario === "Papel" && escolhaComputador === "Pedra") ||
        (escolhaUsuario === "Tesoura" && escolhaComputador === "Papel")
    ) {
        console.log("Você venceu!");
    } else {
        console.log("O computador venceu!");
    }
}

// --- EXERCÍCIO 3: Tabuada ---
function gerarTabuada() {
    const num = parseInt(prompt("Digite um número para ver a tabuada:"));
    console.log("--- Tabuada do " + num + " ---");

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

// --- EXERCÍCIO 4: Triângulo de Asteriscos ---
function desenharTriangulo() {
    const linhas = parseInt(prompt("Digite o número de linhas para o triângulo:"));
    console.log("--- Triângulo de Asteriscos ---");

    for (let i = 1; i <= linhas; i++) {
        let asteriscos = "";
        for (let j = 1; j <= i; j++) {
            asteriscos += "*";
        }
        console.log(asteriscos);
    }
}

// --- EXERCÍCIO 5: Soma da Série ---
function somaSerie() {
    const n = parseInt(prompt("Digite a quantidade de termos da série:"));
    let termoAtual = "";
    let soma = 0;
    let listaTermos = [];

    for (let i = 1; i <= n; i++) {
        let termo = "1".repeat(i);
        listaTermos.push(termo);
        soma += parseInt(termo);
    }

    console.log("--- Soma da Série ---");
    console.log(listaTermos.join(" + "));
    console.log("A soma é: " + soma.toLocaleString('pt-BR'));
}

/**
 * Para testar, basta descomentar a linha da função que deseja executar abaixo:
 */

// jogoAdivinhacao();
// pedraPapelTesoura();
// gerarTabuada();
// desenharTriangulo();
// somaSerie();