// Adiciona o pacote ao programa
const prompt = require("prompt-sync")();

console.log("Estou aprendendo sobre Funções e Eventos em JS");      // Mensagem inicial
console.log("-".repeat(40));                                        // Exibe 40 traços na tela

const vinhos = [];      // Declara um vetor de escopo global para armazenar os vinhos

// Declara a 'function' titulo que será usada em todo o programa
function titulo(texto) {                // Recebe, por parâmetro, o texto a ser exibido
    console.log();                      // Exibe uma linha em branco
    console.log(texto);                 // Exibe o texto
    console.log("-".repeat(40));        // Exibe 40 sinais de igual na tela
}

// Declara a 'function' 'incluir()'
function incluir() {
    titulo("---< Inclusão de Vinhos >---");     // Exibe o título

    const marca = prompt("Marca...: ");            // Lê a marca do vinho
    const tipo = prompt("Tipo....: ");            // Lê o tipo do vinho
    const preco = Number(prompt("Preço R$: "));    // Lê o preço do vinho

    vinhos.push({marca, tipo, preco});                      // Insere um objeto no vetor
    console.log("Ok! Vinho cadastrado com sucesso");        // Exibe uma mensagem de confirmação      
}

// Declara a 'function' 'lstar()'
function listar() {
    titulo("---< Lista de Vinhos Cadastrados >---");                        // Exibe o título
    console.log("Marca............... Tipo................ Preço R$:");     // Exibe uma mensagem de suport

    // Percorre o vetor para exibir todos os vinhos
    for (const vinho of vinhos) {
        console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ` + `${vinho.preco.toFixed(2).padStart(9)}`);
    }
 }

//  Declara a 'function' 'pesquisar'
function pesquisar() {
    titulo("---< Pesquisa por Tipo de Vinho >---");                         // Exibe o título
    console.log("Marca............... Tipo................ Preço R$:");     // Exibe uma mensagem de suport  
    
    const pesq = prompt("Tipo: ");      // Lê o tipo de vinho
    let contador = 0;                   // Declara uma var para auxiliar na contagem 

    for (const vinho of vinhos) {       // Percorre o vetor 'vinhos'

        // Se o tipo de vinho pesquisado estiver incluso na var 'tipo' que por sua vez está inclusa no vetor 'vinhos'
        if (vinho.tipo.toUpperCase().includes(pesq.toUpperCase())) {    
            
            // Exibe a listagem dos vinhos pesquisados
            console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ${vinho.preco.toFixed(2).padStart(9)}`);

            contador++;     // Se entrou no 'if' ncrementa a var 'contador'

        }
    }

    // Se percorreu todos os itens do vetor 'vinhos' e não encontrou nenhum tipo de vinho pesquisado
    if (contador == 0) {
        console.log(`Obs.: Não há vinhos cadastrados do tipo "${pesq}"`);       // Exibe uma mensagem negativa
    }
}

// Declara a 'function' 'calcularMedia'
function calcularMedia() {
    titulo("---< Média e Destaques do Cadastro de Vinhos >---");        // Exibe o título

    const num = vinhos.length;                              // Obtém o tamanho do vetor 'vinhos'
    if (num == 0) {                                         // Se o vetor estiver vazio
        console.log("Obs.: Não há Vinhos Cadastrados");     // Exibe uma mensagem negativa
        return;                                             // retorna
    }

    let total = 0;                              // Declara uma var para acumular o total
    for (const vinho of vinhos) {               // Percorre o vetor
        total += vinho.preco;                   // Soma e acumula o preço de cada elemento do vetor
    }

    const media = total / num;          // Calcula a média dos preços dos vinhos

    const vinhos2 = [...vinhos];        // Cria uma cópia do vetor 'vinhos'

    vinhos2.sort((a, b) => a.preco - b.preco);      // Ordena por preço

    const menor = vinhos2[0];           // Obtém o vinho com o menor preço
    const maior = vinhos2[num - 1];     // Obtém o vinho com o maior preço

    console.log(`Preço Médio dos Vinhos R$: ${media.toFixed(2)}`);                  // Exibe o preço médio dos vinhos
    console.log(`Menor Valor R$: ${menor.preco.toFixed(2)} - ${menor.marca}`);      // Exibe o menor preço dos vinhos e a marca
    console.log(`Maior Valor R$: ${maior.preco.toFixed(2)} - ${maior.marca}`);      // Exibe o maior valor dos vinhos e a marca
}

// --------------- Programa Principal ---------------

// Declara um loop
do {

    titulo("---< Cadastro de Vinhos >---");     // Exibe o título
    

    // Opções de Escolha
    console.log("1. Inclusão de Vinhos");
    console.log("2. Listagem de Vinhos");
    console.log("3. Pesquisa por Tipo");
    console.log("4. Média e Destaques");
    console.log("5. Finalizar\n");
    const opcao = Number(prompt("Opção: "));    // Lê a opção

    if (opcao == 1) {
        incluir();
    } else if (opcao == 2) {
        listar();
    } else if (opcao == 3) {
        pesquisar();
    } else if (opcao == 4) {
        calcularMedia();
    } else if (opcao == 5) {
        break;
    } else {
        console.log("Erro... Valor Inválido!");
    }
    
} while (true)