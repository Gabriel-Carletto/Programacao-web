// 1. Definição de Preços usando um Objeto (Dicionário)
const precos = {
    gasolina: 6.69,
    etanol: 4.30,
    diesel: 6.03
};

// 2. Formatar Moeda (Arrow Function)
const formatarMoeda = valor => 
    valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

// 3. Lógica de Cálculo (Arrow Function)
const calcularAbastecimento = (precoCombustivel, litros) => {
    const display = document.getElementById("resultado");

    // Validação de dados
    if (!precoCombustivel) {
        display.textContent = "Selecione o combustível";
        return;
    }

    if (isNaN(litros) || litros <= 0) {
        display.textContent = "Quantidade inválida";
        return;
    }

    const valorTotal = precoCombustivel * litros;
    display.textContent = formatarMoeda(valorTotal);
};

// 4. Função Principal (Arrow Function)
const atualizarValor = () => {
    const tipo = document.getElementById("combustivel").value;
    const litros = parseFloat(document.getElementById("litros").value);
    
    // Substituição do switch: Acessando o preço pela chave do objeto
    const precoPorLitro = precos[tipo];

    calcularAbastecimento(precoPorLitro, litros);
};

// --- Eventos ---

const inputCombustivel = document.getElementById("combustivel");
const inputLitros = document.getElementById("litros");

inputCombustivel.addEventListener("change", atualizarValor);
inputLitros.addEventListener("input", atualizarValor);

// Evitar recarregamento no Enter (Arrow Function)
inputLitros.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        atualizarValor();
    }
});