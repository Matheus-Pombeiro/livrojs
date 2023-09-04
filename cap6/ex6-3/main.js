// Obtém os elementos 'form' e 'outDados'
const frm = document.querySelector("form");
const respDados = document.querySelector(".outDados");

// Declara o vetor de escopo global 'carros'
const carros = [];

// 'Escuta' o evento 'submit' do 'form'
frm.addEventListener("submit", (e) => {

    // Evita o envio automático do 'form'
    e.preventDefault();

    // Obtém o modelo do carro e o preç
    const modelo = frm.inModelo.value;
    const preco = Number(frm.inPreco.value);

    // Adicina os valores das var 'modelo' e 'preco' ao final do vetor de objetos 'carros'
    carros.push({modelo, preco});

    // Limpa os campos do 'form'
    frm.inModelo.value = "";
    frm.inPreco.value = "";

    // Posiciona o curso no modelo
    frm.inModelo.focus();

    // Dispara um eventos de click em 'btListar' (equivale a um click no botão da página)
    frm.btListar.dispatchEvent(new Event("click"));

})

// 'Escuta o 'click' em 'btListar'
frm.btListar.addEventListener("click", () => {

    // Se o tamanho do vetor for igual a 0
    if (carros.length == 0) {

        alert("Você precisa cadastrar um carro");
        return;

    }

    // O método 'reduce()' concatena uma string, obtendo modelo e preço de cada veículo
    const lista = carros.reduce((acumulador, carro) => acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n", "");

    // Exibe o vetor 'lista' para o usuário
    respDados.innerText = `Lista dos Carros Cadastrados:\n${"-".repeat(40)}\n${lista}`;

})

// 'Escuta o 'click' em 'btFiltrar'
frm.btFiltrar.addEventListener("click", () => {

    // Solicita o valor máximo que o cliente deseja pagar pelo carro
    const maximo = Number(prompt("Qual é o valor máximo que o cliente deseja pagar: "));

    // Se o valor máximo for 0 || se o valor máximo não for um número
    if (maximo == 0 || isNaN(maximo)) {

        return;

    }

    // Cria um novo vetor com os objetos que atendem a condição de filtro
    const carrosFilter = carros.filter(carro => carro.preco <= maximo);

    // Se o tamanho do vetor 'carrosFilter' for iguaç a 0
    if (carrosFilter.length == 0) {

        alert("Não há carros com preço inferior ou igual ao solicitado");
        return;

    }

    // Declara a var 'lista' com uma string vazia ""
    let lista = "";

    // Percorre cada elemento do array
    for (const carro of carrosFilter) {

        lista += `${carro.modelo} - R$ ${carro.preco.toFixed(2)}\n`;

    }

    // Exibe a lista de carros baseado no valor máximo digitado pelo cliente
    respDados.innerText = `Carros até R$: ${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`;

})

// 'Escuta' o 'click' em 'btSimular'
frm.btSimular.addEventListener("click", () => {

    // Declara a var 'desconto'
    const desconto = Number(prompt("Percentual de desconto: "));

    // Se a var 'desconto' receber um valor inválido
    if (desconto == 0 || isNaN(desconto)) {

        return;

    }

    // Declara e processa o vetor 'carroDesc'
    const carroDesc = carros.map(aux => ({modelo: aux.modelo, preco: aux.preco - (aux.preco * desconto / 100)}));

    // Declara a var 'lista' com uma string vazia
    let lista = "";

    // Percorre o vetor 'carroDesc'
    for (const carro of carroDesc) {

        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;

    }

    // Exibe a resposta para o usuário
    respDados.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`;
    
})