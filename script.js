document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Primeiro botão "Próximo" (leva para a Segunda Seção)
    const botaoProximoPrimeiro = document.getElementById("btnProximo");
    const secaoInformacoes = document.querySelector(".secao-info");

    if (botaoProximoPrimeiro && secaoInformacoes) {
        botaoProximoPrimeiro.addEventListener("click", function () {
            secaoInformacoes.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }

    // 2. Segundo botão "Próximo" (da Segunda Seção, leva para a Terceira Seção)
    const botaoProximoInterno = document.querySelector(".btn-proximo-interno");
    const secaoCaminho = document.querySelector(".secao-caminho");

    if (botaoProximoInterno && secaoCaminho) {
        botaoProximoInterno.addEventListener("click", function () {
            secaoCaminho.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }
});
