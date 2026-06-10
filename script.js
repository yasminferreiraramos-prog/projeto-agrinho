window.onload = function() {
    
    // 1. Botão da primeira faixa marrom descendo para as Informações
    const botaoProximoPrimeiro = document.getElementById("btnProximo");
    const secaoInformacoes = document.querySelector(".secao-info");

    if (botaoProximoPrimeiro && secaoInformacoes) {
        botaoProximoPrimeiro.onclick = function(e) {
            e.preventDefault();
            secaoInformacoes.scrollIntoView({ behavior: "smooth", block: "start" });
        };
    }

    // 2. Botão de Informações descendo para o Caminho do Alimento
    const botaoProximoInterno = document.querySelector(".btn-proximo-interno");
    const secaoCaminho = document.querySelector(".secao-caminho");

    if (botaoProximoInterno && secaoCaminho) {
        botaoProximoInterno.onclick = function(e) {
            e.preventDefault();
            secaoCaminho.scrollIntoView({ behavior: "smooth", block: "start" });
        };
    }
};
