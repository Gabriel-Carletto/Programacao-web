        
        
        alert("Bem-vindo à aula de JavaScript!");
        console.log("Este é um log no console.");


//Variáveis

var nome = "João";
console.log("O nome é: " + nome);

let idade = 25;
console.log("A idade é: " + idade);   

var valor1;

const valor0 = 10;

console.log("O valor constante é: " + valor0);

valor1 = 12;
valor1 = 15;
// valor0 = 14; causará um erro, pois valor0 é uma constante

// verificacao de tipos

console.log(typeof valor1);
console.log(typeof nome);
console.log(typeof valor0);
console.log(typeof idade);


// Algorítomos: entrada + processamento + saída

var nome = window.prompt("Digite seu nome:");
console.log("Olá, " + nome + "! Bem-vindo à aula de JavaScript!");
console.log(`Olá, ${nome}! Bem-vindo à aula de JavaScript!`); // Template literals

document.writeln(`Olá, ${nome}! Bem-vindo à aula de JavaScript!`); // Escreve diretamente no documento HTML

// Operadores aritméticos

var num1 = 10;
var num2 = 5;   

var soma = num1 + num2;

var subtracao = num1 - num2;

var multiplicacao = num1 * num2;

var divisao = num1 / num2;

var modulo = num1 % num2;

console.log("Soma: " + soma);
console.log("Subtração: " + subtracao);
console.log("Multiplicação: " + multiplicacao);
console.log("Divisão: " + divisao);
console.log("Módulo: " + modulo);

document.writeln(`Soma: ${soma} <br>`);
document.writeln(`Subtração: ${subtracao} <br>`);
document.writeln(`Multiplicação: ${multiplicacao} <br>`);
document.writeln(`Divisão: ${divisao} <br>`);
document.writeln(`Módulo: ${modulo} <br>`);

// 2 + 4 * 3 - 5 / 2

num3 = 2;
num4 = 4;
num5 = 3;
num6 = 5;
num7 = 2;
var resultado = num3 + num4 * num5 - num6 / num7;

console.log("Resultado da expressão: " + resultado);
document.writeln(`Resultado da expressão: ${resultado} <br>`);

// Operadores de comparação

var a = 10;
var b = 20;

console.log("a é igual a b? " + (a == b));
console.log("a é diferente de b? " + (a != b));
console.log("a é maior que b? " + (a > b));
console.log("a é menor que b? " + (a < b));
console.log("a é maior ou igual a b? " + (a >= b));
console.log("a é menor ou igual a b? " + (a <= b));

document.writeln(`a é igual a b? ${a == b} <br>`);
document.writeln(`a é diferente de b? ${a != b} <br>`);
document.writeln(`a é maior que b? ${a > b} <br>`);
document.writeln(`a é menor que b? ${a < b} <br>`);
document.writeln(`a é maior ou igual a b? ${a >= b} <br>`);
document.writeln(`a é menor ou igual a b? ${a <= b} <br>`);

    console.log("João" == "João");
    console.log("João" == "Maria");

    document.writeln(`"João" é igual a "João"? ${"João" == "João"} <br>`);
    document.writeln(`"João" é igual a "Maria"? ${"João" == "Maria"} <br>`);

    // criar um algoritmo que realize a soma de dois números e exiba o resultado, com o usuário apresentando os números através de prompts

var numero1 = window.prompt("Digite o primeiro número:");
var numero2 = window.prompt("Digite o segundo número:");

var soma = parseFloat(numero1) + parseFloat(numero2);
console.log("A soma é: " + soma);
document.writeln(`A soma é: ${soma} <br>`);

// estruturas condicionais: if-else e switch-case

var Idade = 10;

if (Idade <= 18) {
    console.log("Você é menor de idade.");
    document.writeln("Você é menor de idade. <br>");
} else {
    console.log("Você é maior de idade.");
    document.writeln("Você é maior de idade. <br>");
}

var hora = 14;

if (hora < 12) {
    console.log("Bom dia!");
    document.writeln("Bom dia! <br>");
} else if (hora < 18) {
    console.log("Boa tarde!");
    document.writeln("Boa tarde! <br>");
} else {
    console.log("Boa noite!");
    document.writeln("Boa noite! <br>");
}

var diadaSemana = 3;

switch (diadaSemana) {
    case 1:
        console.log("Domingo");
        document.writeln("Domingo <br>");
        break;  
    case 2:
        console.log("Segunda-feira");
        document.writeln("Segunda-feira <br>");
        break;
        default:
        console.log("Escolha uma opção");
        document.writeln("Escolha uma opção <br>");
}
//estruturas de repetição for e while

for (let i = 1; i < 5; i++) {
    console.log("iteração: " + i);
    document.writeln(`iteração: ${i} <br>`);
}
let i = 5
while (i < 5) {
    console.log("iteração: " + i);
    document.writeln(`iteração: ${i} <br>`);
    i++;
}