// obtém os elementos da página
const frm = document.querySelector("form");
const respPalavra = document.querySelector("#outPalavra");
const respErros = document.querySelector("#outErros");
const respDica = document.querySelector("#outDica");
const respChances = document.querySelector("#outChances");
const respMensagemFinal = document.querySelector("#outMensagemFinal");
const imgStatus = document.querySelector("img");

// Declara vars globais vazias
let palavraSorteada;
let dicaSorteada;

// ----------------- Funções -----------------

// Declara a função para trocar o status (imagem) do jogador
const trocarStatus = (num) => {
    if (num > 0) imgStatus.src = `img/status${num}.jpg`;
};

// Declara uma função para verificar se o jogador ganhou ou perdeu o jogo
const verificarFim = () => {

    const chances = Number(respChances.innerText);      // Obtém o nº de chances que o jogador ainda tem
    
    // Se as chances tiverem acabado...
    if (chances == 0) {

        // Altera o estilo e o conteúdo da mensagem final
        respMensagemFinal.className = "display-3 text-danger";
        respMensagemFinal.innerText = `Ah... é ${palavraSorteada}. Você Perdeu!`;

        concluirJogo();     // Chama a função que conclui o jogo

    } else if (respPalavra.innerText == palavraSorteada) {      // Se o jogador tiver acertado a palavra...
    
        // Altera o estilo e o conteúdo da mensagem final
        respMensagemFinal.className = "display-3 text-primary";
        respMensagemFinal.innerText = "Parabéns! Você Ganhou.";

        trocarStatus(4);        // Troca o status (imagem) do jogador para "rostinho feliz"

        concluirJogo();     // Chama a função que conclui o jogo
    
    }

};

// Declara uma função que conclui o jogo, modifica o texto da dica e desabilita os botões de jogar 
const concluirJogo = () => {

    respDica.innerText = "* Clique no botão 'Iniciar Jogo' para jogar novamente";
    frm.inLetra.disabled = true;
    frm.btJogar.disabled = true;
    frm.btVerDica.disabled = true;

};

// ----------------- Programa principal -----------------

// 'Escuta' quando a página é carregada
window.addEventListener("load", () => {

    // Se não há palavras cadastradas...
    if (!localStorage.getItem("jogoPalavra")) {
        alert("Cadastre Palavras para jogar");      // Exibe um alerta
        // Desabilita botões
        frm.inLetra.disabled = true;
        frm.btJogar.disabled = true;
        frm.btVerDica.disabled = true;
    }

    // Obtém conteúdo do 'localStorage()' e separa em elementos de vetor
    const palavras = localStorage.getItem("jogoPalavra").split(";");
    const dicas = localStorage.getItem("jogoDica").split(";");

    const tam = palavras.length;        // Obtém o nº de palavras cadastradas

    // Gera um nº entre 0 e 'tam' - 1, pois arredonda para baixo
    const numAleatório = Math.floor(Math.random() * tam);

    // Obtém a palavra (em letras maiúsculas) e a dica na posição do nº sorteado
    palavraSorteada = palavras[numAleatório].toUpperCase();
    dicaSorteada = dicas[numAleatório];

    let novaPalavra = "";       // Declara uma var vazia para montar a palavra exibida (com letra inicial e "_")

    // Declara um loop para exibir a letra inicial e as demais ocorrências dessa letra na palavra
    for (const letra of palavraSorteada) {
        // Se igual a letra inicial, acrescenta essa letra na exibição
        if (letra == palavraSorteada.charAt(0)) {
            novaPalavra += palavraSorteada.charAt(0);
        } else {    // Senão, acrescenta "_"
            novaPalavra += "_";
        }
    }

    respPalavra.innerText = novaPalavra;        // Exibe a nova Palavra

});

// 'Escuta' o click no botão 'btVerDica'
frm.btVerDica.addEventListener("click", () => {

    // Verifica se o jogador já clicou anteriormente no botão
    if (respErros.innerText.includes("*")) {
        alert("Você já solicitou a dica");      // Exibe um alerta
        frm.inLetra.focus();                    // Posiciona o cursor
        return;                                 // Retorna
    }

    respDica.innerText = " * " + dicaSorteada;      // Exibe a dica
    respErros.innerText += "*";                     // Acrescenta "*" nos erros

    const chances = Number(respChances.innerText) - 1;      // Diminui 1 em chances
    respChances.innerText = chances;                        // Mostra o nº de chances

    trocarStatus(chances);      // Troca a imagem
    
    verificarFim();             // Verifica se atingiu o limite de chances

    frm.inLetra.focus();        // Posiciona o cursor

});

// 'Escuta' o click no botão 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault();     // Evita o envio automático do 'form'

    const letra = frm.inLetra.value.toUpperCase();      // Obtém a letra inserida pela usuário

    // Obtém conteúdos de elementos da página
    let erros = respErros.innerText;
    let palavra = respPalavra.innerText;

    // Verifica se a letra inserida já consta em erros ou na palavra
    if (erros.includes(letra) || palavra.includes(letra)) {
        alert("Você já jogou esta letra");      // Exibe um alerta
        frm.inLetra.focus();                    // Posiciona o cursor
        return;                                 // Retorna
    }

    // Se a letra consta em palavra sorteada...
    if (palavraSorteada.includes(letra)) {
        
        let novaPalavra = "";       // Para compor nova palavra

        // Declara um loop para montar a palavra a ser exibida
        for (let i = 0; i < palavraSorteada.length; i++) {

            // Se igual a letra jogada, acrescenta esta letra na exibição
            if (palavraSorteada.charAt(i) == letra) {
                novaPalavra += letra;
            } else {        // Senão, acrescenta letra ou "_" existente
                novaPalavra += palavra.charAt(i);       
            }

        }

        respPalavra.innerText = novaPalavra;        // Exibe a nova palavra

    } else {        // Senão...
    
        respErros.innerText += letra;                           // Acrescenta letra aos erros
        const chances = Number(respChances.innerText) - 1;      // Diminui o nº de chances
        respChances.innerText = chances;                        // Exibe novo nº de chances

        trocarStatus(chances);      // Troca o status (imagem) do jogador

    }

    verificarFim();     // Verifica se o jogador ganhou ou perdou

    frm.inLetra.value = "";     // Limpa o campo 'inLetra'
    frm.inLetra.focus();        // Posiciona o cursor

});