// Obtém os elementos da página
const frm = document.querySelector("form");
const respLista = document.querySelector("pre");
const respCavalo = document.querySelector("#outCavalo");

// Declara um vetor com os nomes dos cavalos do páreo
const cavalos = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Ventania"];

// Declara um vetor que irá armazenar um objeto aposta (com nº do cavalo e valor da aposta)
const apostas = [];

// Declara uma função para obter o cavalo apostado pelo usuário
const obterCavalo = (num) => {

    const posicao = num - 1;        // Posição do vetor (subtrai 1, pois inicia em 0)
    return cavalos[posicao];        // Retorna um cavalo do vetor 'cavalos'
    
};

// Declara uma função para verificar se o nº do cavalo apostado é válido, ou seja, se ele existe no vetor
const validarCavalo = (num) => {

    return num >= 1 && num <= cavalos.length;       // Retorna o valor resultante da condição (true ou false)

};

// Declara uma função para contar as apostas
const contarApostas = (num) => {

    let contador = 0;       // Declara e inicializa uma var para contar o nº de apostas

    for (const aposta of apostas) {     // Percorre o vetor
        if (aposta.cavalo == num) {     // Se a aposta for no cavalo passado como parâmetro
            contador++;                 // Incrementa o contador
        }
    }

    return contador;        // Retorna o número de apostas no cavalo 'numCavalo'

};

// Declara uma função para somar os valores das apostas
const totalizarApostas = (num) => {

    let total = 0;      // Declara e inicializa uma var para somar as apostas

    for (const aposta of apostas) {     // Percorre o vetor
        if (aposta.cavalo == num) {     // Se a aposta for no cavalo passado como parâmetro
            total += aposta.valor;      // Soma os valores das apostas
        }
    }

    return total;       // Retorna a soma dos valores apostados em 'numCavalo'

};

// 'Escuta' o click no botão 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault();     // Evita o envio automático do 'form'

    const cavalo = Number(frm.inCavalo.value);      // Obtém o número do cavalo iserido pelo usuário
    const valor = Number(frm.inValor.value);        // Obtém o valor em R$ apostado

    // Adiciona ao vetor de objetos (atributos cavalo e valor)
    apostas.push({cavalo, valor});

    // Declara uma var para exibir a lista de apostas realizadas
    let lista = `Apostas Realizadas\n${"-".repeat(25)}\n`;

    // Percorre o vetor e concatena em 'lista' as apostas realizadas
    for (const aposta of apostas) {
        lista += `Nº ${aposta.cavalo} ${obterCavalo(aposta.cavalo)}`;       // Exibe o nº e o nome do cavalo apostado por meio de uma função
        lista += ` - R$: ${aposta.valor.toFixed(2)}\n`;                     // Exibe o valor apostado
    }
    
    respLista.innerText = lista;        // Exibe a 'lista' das apostas

    frm.reset();            // Limpa o formulário
    frm.inCavalo.focus();   // Posiciona o cursor

});

// 'Escuta' quando o campo do 'form' 'inCavalo' perde o foco
frm.inCavalo.addEventListener("blur", () => {

    // Se não preencheu o campo, limpa e retorna (não exibe alerta, pois pode sair por um click em 'Ganhador')
    if (frm.inCavalo.value == "") {
        respCavalo.innerText = "";
        return;
    }

    const numCavalo = Number(frm.inCavalo.value);       // Obtém o nº do cavalo apostado pelo usuário

    if (!validarCavalo(numCavalo)) {        // Se não 'validarCavalo' com o parâmetro 'numCavalo'...
        alert("Nº do cavalo inválido");     // Exibe um alerta
        frm.inCavalo.focus();               // Posiciona o cursor
        return;                             // retorna
    }

    const nome = obterCavalo(numCavalo);        // Obtém o nome do cavalo apostado por meio da função 'obterCavalo'
    const cotaNum = contarApostas(numCavalo);   // Conta o nº de apostas em determinado cavalo
    const total = totalizarApostas(numCavalo);  // Soma os valores das apostas realizadas pelo usuário

    // Exibe nome, nº de apostas e total apostado pelo usuário
    respCavalo.innerText = `${nome} (Apostas: ${cotaNum} - R$: ${total.toFixed(2)})`;

});

// 'Escuta' quando o campo do 'form' 'inCavalo' ganha o foco
frm.inCavalo.addEventListener("focus", () => {

    // Limpa o campo do 'form' e da resposta
    frm.inCavalo.value = "";
    respCavalo.innerText = "";
    
});

// 'Escuta' o click no botão 'btResumo'
frm.btResumo.addEventListener("click", () => {

    // Declara um vetor com valores zerados para cada cavalo
    const somaApostas = [0, 0, 0, 0, 0, 0];

    // Percorre apostas e acumula na posição do cavalo apostado (-1, pois inicia em 0)
    for (const aposta of apostas) {
        somaApostas[aposta.cavalo - 1] += aposta.valor;
    }

    // Exibe o resultado
    let resposta = `Nº Cavalo${".".repeat(14)} R$ Apostado\n${"-".repeat(35)}\n`;

    // Percorre o vetor 'cavalos' e concatena as respostas
    cavalos.forEach((cavalo, i) => {
        resposta += ` ${i + 1} ${cavalo.padEnd(20)}`;
        resposta += ` ${somaApostas[i].toFixed(2).padStart(11)}\n`;
    })

    respLista.innerText = resposta;

});

// 'Escuta' o click no botão 'btGanhador'
frm.btGanhador.addEventListener("click", () => {

    const ganhador = Number(prompt("Nº Cavalo Ganhador"));      // Solicita o nº do cavalo ganhador

    // Declara uma condicional para verificar a validade do prompt anterior
    if (isNaN(ganhador) || !validarCavalo(ganhador)) {
        alert("Cavalo Inválido");                           // Exibe um alerta
        return;                                             // Retorna
    }

    // Usa o métoda 'reduce' para somar o valor das apostas
    const total = apostas.reduce((acumulador, aposta) => acumulador + aposta.valor, 0);

    // Concatena em 'resumo' o resultado a ser exibido na página
    let resumo = `Resultado Final do Páreo\n${"-".repeat(30)}\n`;

    // Concatena as respostas referentes ao 'resumo' do ganhador
    resumo += `Nº Total de Apostas: ${apostas.length}\n`;
    resumo += `Total Geral R$: ${total.toFixed(2)}\n\n`;
    resumo += `Ganhador Nº ${ganhador} - ${obterCavalo(ganhador)}\n\n`;
    resumo += `Nº de Apostas: ${contarApostas(ganhador)}\n`;
    resumo += `Total Apostado R$: ${totalizarApostas(ganhador).toFixed(2)}`;

    respLista.innerText = resumo;       // Exibe o resultado de 'resumo'

    // Desabilita os botões 'btApostar' e 'btGanhador'
    frm.btApostar.disabled = true;
    frm.btGanhador.disabled = true;

    frm.btNovo.focus();     // Posiciona o cursor

});

// Recarrega a página (para funções com apenas 1 linha, não é necessário o uso de '{}')
frm.btNovo.addEventListener("click", () => window.location.reload());