document.addEventListener("DOMContentLoaded", () => {
    // 1. ANIMAÇÃO DE MOVIMENTO: Faz o trator entrar andando na tela
    const rodape = document.querySelector(".rodape-layout");

    if (rodape) {
        // Cria um estilo dinâmico para fazer o trator deslizar da direita para a esquerda
        const estiloAnimacao = document.createElement("style");
        estiloAnimacao.innerHTML = `
            @keyframes andarTrator {
                from { right: -300px; opacity: 0; }
                to { right: 12%; opacity: 1; }
            }
            .rodape-layout .faixa-inferior::after {
                animation: andarTrator 1.5s ease-out forwards;
            }
        `;
        document.head.appendChild(estiloAnimacao);
    }

    // 2. INTERAÇÃO DOS BOTÕES
    const btnSaibaMais = document.querySelector(".btn-saiba-mais");
    const btnProximo = document.querySelector(".btn-proximo");

    // Ação ao clicar em "SAIBA MAIS!"
    if (btnSaibaMais) {
        btnSaibaMais.addEventListener("click", (event) => {
            event.preventDefault();
            alert("Carregando conteúdos sobre Tecnologia e Sustentabilidade no Campo... 🌱");
        });
    }

    // Ação ao clicar em "Próximo"
    if (btnProximo) {
        btnProximo.addEventListener("click", () => {
            document.body.style.opacity = "0.5";
            document.body.style.transition = "opacity 0.4s";

            setTimeout(() => {
                alert("Avançando para a próxima etapa do projeto Agrinho 2026! 🚜");
                document.body.style.opacity = "1";
            }, 400);
        });
    }
});
