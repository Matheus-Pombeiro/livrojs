// Obtém os elementos da página
const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

// 'Escuta' quando o botão 'submit' for clickado
frm.addEventListener("submit", (e) => {

    e.preventDefault();     // Evita o envio automático do 'form'
    
    const nome = frm.inNome.value;              // Obtém o nome do apostador
    const peso = Number(frm.inPeso.value);      // Obtém a aposta do apostador

    
    if (verApostaExiste(peso)) {                                    // Chama a função que verifica se o peso já foi apostado
        alert("Alguém já apostou esse peso, informe outro...");     // Exibe um alerta
        frm.inPeso.focus;                                           // Posiciona o cursor no campo 'inPeso'
        return;                                                     // Retorna
    }

    if (localStorage.getItem("melanciaNome")) {     // Se houver dados salvos no navegador

        // Obtém o conteúdo já salvo e acrescenta ";" + dados da aposta
        const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
        const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;
        
        // Salvo os dados
        localStorage.setItem("melanciaNome", melanciaNome);     
        localStorage.setItem("melanciaPeso", melanciaPeso);

    } else {        // Senão, é a primeira aposta

        // Salva os dados (sem ";")
        localStorage.setItem("melanciaNome", nome);
        localStorage.setItem("melanciaPeso", peso);

    }

    mostrarApostas();       // Chama a função que mostra as apostas já salvas
    frm.reset();            // Limpa o 'form'
    frm.inNome.focus();     // Posiciona o cursor no campo 'inNome'

})

// Declara uma função para verificar se o peso já foi apostado
const verApostaExiste = (peso) => {

    if (localStorage.getItem("melanciaPeso")) {     // Se existir dados em 'localStorage'

        // Obtém o seu conteúdo e a string é dividida em itens de vetor a cada ocorrência de ";"
        const pesos= localStorage.getItem("melanciaPeso").split(";")

        // O peso deve ser convertido em string, pois o vetor contém strings
        return pesos.includes(peso.toString())

    } else {        // Senão
        
        return false;       // Retorna falso

    }

}

// Declara uma função para mostrar as apostas para o usuário
const mostrarApostas = () => {

    if (!localStorage.getItem("melanciaNome")) {    // Se não há apostas armazenas na memória
        respLista.innerText = "";                   // Limpa o espaço de exibição das apostas (para quando "Limpara Apostas")
        return;                                     // Retorna (não executa os comandos abaixo
    }

    // Obtém o conteúdo das var salvas no 'localStorage', separando-as em elementos de vetor a cada ocorrência de ";"
    const nomes = localStorage.getItem("melanciaNome").split(";");
    const pesos = localStorage.getItem("melanciaPeso").split(";");

    let linhas = "";        // Declara uma var para acumular as linhas a serem exibidas

    // Declara um loop que percorre todos os elementos do vetor
    for (let i = 0; i < nomes.length; i++) {
        linhas += nomes[i] + " - " + pesos[i] + "gr \n";        // Cocatena em linhas os nomes e as apostas dos apostadores
    }

    respLista.innerText = linhas;       // Exibe as linhas (altera o conteúdo do elemento 'respLista')

}

// Chama a função quando a página é carregada, para mostrar as apostas salvas
window.addEventListener("load", mostrarApostas);

// 'Escuta' o click no botão 'btVencedor'
frm.btVencedor.addEventListener("click", () => {

    if (!localStorage.getItem("melanciaNome")) {        // Se não há respostas armazanadas na memória ('localStorage')
        alert("Não há apostas cadastradas");            // Exibe um alerta
        return;                                         // Retorna (não executa os comandos abaixo)
    }

    // Solicita o peso correto da melancia
    const pesoCorreto = Number(prompt("Qual o peso correto da melancia?"));

    if (pesoCorreto == 0 || isNaN(pesoCorreto)) {       // Se não informou...
        return;                                         // retorna
    }

    // Obtém os dados armazenados, separando-os em elementos de vetor
    const nomes = localStorage.getItem("melanciaNome").split(";");
    const pesos = localStorage.getItem("melanciaPeso").split(";");

    // O valor inicial para vencedor é o da primeira aposta
    let vencedorNome = nomes[0];
    let vencedorPeso = Number(pesos[0]);

    // Percorre as apostas
    for (let i = 1; i < nomes.length; i++) {

        // Calcula a diferença de peso do vencedor e da aposta atual
        const difVencedor = Math.abs(vencedorPeso - pesoCorreto);
        const difAposta = Math.abs(Number(pesos[i]) - pesoCorreto);

        // Se a diferença da aposta atual (no 'for') for menor que a do 'vencedor'
        if (difAposta < difVencedor) {
            vencedorNome = nomes[i];            // Troca o "vencedor"
            vencedorPeso = Number(pesos[i]);    // Para este elemento
        }

    }

    // Monta mensagem com dados do vencedor
    let mensagem = "Resultado - Peso Correto: " + pesoCorreto + "gr";
    mensagem += "\n----------------------------------------------";
    mensagem += "\nVencedor: " + vencedorNome;
    mensagem += "\nAposta: " + vencedorPeso + "gr";
    alert(mensagem);

})

// Limpa a lista de apostas
frm.btLimpar.addEventListener("click", () => {

    // Solicita a confirmação para excluir as apostas
    if (confirm("Confirma a exclusão de todas as apostas?")) {

        // Remove as var salvas em 'localStorage'
        localStorage.removeItem("melanciaNome");
        localStorage.removeItem("melanciaPeso");

        mostrarApostas();       // Exibe a listagem vazia

    }
    
})