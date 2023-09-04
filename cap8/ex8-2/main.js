// Obtém os elementos do formulário e da saída de dados
const frm = document.querySelector("form");
const respModelo = document.querySelector(".outModelo");
const respEntrada = document.querySelector(".outEntrada");
const respParcelas = document.querySelector(".outParcelas");

// 'Escuta' o click no botão 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault()                                  // Evita o envio automático do 'form'
    const modelo = frm.inModelo.value;                  // Obtém o modelo do carro
    const ano = Number(frm.inAno.value);                // Obtém o ano de fabricação
    const preco = Number(frm.inPreco.value);            // Obtém o preço do carro

    // Declara uma função que recebe o ano do veículo como parâmetro
    const classificarVeiculo = (ano) => {

        const anoAtual = new Date().getFullYear();      // Obtém o ano atual
        let classif;                                    // Declara uma var vazia

        // Delcara uma condição para definir a classificação do veículo
        if (ano == anoAtual) {                                          // Se 'ano' for igual a 'anoAtual'
            classif = "Novo";                                           // Classif recebe 'Novo'
        } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {        // Senão, se
            classif = "Seminovo";                                       // Classif recebe 'Seminovo'                                    
        } else {                                                        // Senão
            classif = "Usado";                                          // Classif recebe 'Usado'
        }

        return classif;         // Retorna a classificação do veículo

    }

    //  Declara uma função que recebe o valor e o status do veículo como parâmetro para calcular a entrada
    const calcularEntrada = (valor, status) => (status == "Novo" ? valor * 0.5 : valor * 0.3);

    const classificacao = classificarVeiculo(ano);          // Declar uma função e atribui um valor
    const entrada = calcularEntrada(preco, classificacao);  // ... Retorno às variáveis
    const parcela = (preco - entrada) / 10;                 // Usa retorno da função para cálculo
    
    // Exibe os dados para o usuário
    respModelo.innerText = modelo + " - " + classificacao;
    respEntrada.innerText = `Entrada R$: ${entrada.toFixed(2)}`;
    respParcelas.innerText = `+10x de R$: ${parcela.toFixed(2)}`;

});