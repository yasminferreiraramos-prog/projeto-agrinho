// Aguarda todo o conteúdo da página carregar
document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Captura o botão "Próximo" da primeira faixa inferior
    const botaoProximoPrimeiro = document.getElementById("btnProximo");
    
    // 2. Captura a segunda seção do site (onde o texto e os cards estão)
    const secaoInformacoes = document.querySelector(".secao-info");

    // 3. Verifica se ambos os elementos existem na tela para evitar erros
    if (botaoProximoPrimeiro && secaoInformacoes) {
        
        // Adiciona o evento de clique ao botão
        botaoProximoPrimeiro.addEventListener("click", function () {
            
            // Faz o navegador rolar a tela suavemente até o topo da segunda seção
            secaoInformacoes.scrollIntoView({ 
                behavior: "smooth", // Efeito de rolagem suave e elegante
                block: "start"      // Alinha o topo da seção com o topo do navegador
            });
            
        });
    }
});
