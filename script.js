document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ANIMAÇÃO DE MOVIMENTO: Faz o trator entrar andando na tela
    const rodape = document.querySelector(".rodape-layout");
    if (rodape) {
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

    // 2. INTERAÇÃO DOS BOTÕES DA PÁGINA 1
    const btnSaibaMais = document.querySelector(".btn-saiba-mais");
    const btnProximo = document.querySelector(".btn-proximo");

    if (btnSaibaMais) {
        btnSaibaMais.addEventListener("click", (event) => {
            event.preventDefault();
            alert("Carregando conteúdos sobre Tecnologia e Sustentabilidade no Campo... 🌱");
        });
    }

    if (btnProximo) {
        btnProximo.addEventListener("click", () => {
            document.body.style.opacity = "0";
            document.body.style.transition = "opacity 0.4s";
            setTimeout(() => {
                window.location.href = "pagina2.html";
            }, 400);
        });
    }

    // 3. INTERAÇÃO DO BOTÃO DA PÁGINA 2
    const btnProximoPg2 = document.querySelector(".btn-proximo-pg2");
    if (btnProximoPg2) {
        btnProximoPg2.addEventListener("click", () => {
            alert("Você está avançando para a próxima seção: 'O caminho do alimento: do campo à mesa'! 🌽");
            // Se você criar uma pagina3.html no futuro, basta descomentar a linha abaixo:
            // window.location.href = "pagina3.html";
        });
    }
});
