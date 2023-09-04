// Obtém uma referência ao formulário
const frm = document.querySelector("form");

const taxaMulta = 2 / 100;      // Multa por atraso
const taxaJuros = 0.33 / 100    // Juros por dia de atraso

// 'Escuta' quando o botão 'submit' for clicado
frm.addEventListener("submit", (e) => {

    e.preventDefault();                             // Evita o envio automático do 'form'
    const dataVenc = frm.inDataVenc.value;          // Obtém a data inserida pelo usuário
    const valor = Number(frm.inValor.value);        // Obtém o valor inserido pelo usuário
    const hoje = new Date();                        // Cria variáveis (instancia objetos)
    const vencto = new Date();                      // Do tipo 'Date()'
    
    const partes = dataVenc.split("-");             // A data vem no formato aaaa-mm-dd (adiciona a data, dividida em partes, ao vetor 'partes')
    vencto.setDate(Number(partes[2]));              // Obtém o dia localizado na posição [2] do vetor
    vencto.setMonth(Number(partes[1]) - 1);         // Obtém o mês localizado na posição [1] do vetor e subtrai 1
    vencto.setFullYear(Number(partes[0]));          // Obtém o ano localizado na posição [0] do vetor

    const atraso = hoje - vencto;                   // Calcula a diferença de dias entre datas (em milesegundo (ms))
    let multa = 0;                                  // Declara e inicializa a var 'multa'
    let juros = 0;                                  // Declara e inicializa a var 'juros'

    if (atraso > 0) {                               // Se a conta estiver em atraso
        // Converte ms do atraso em dias (1 dia = 24h x 60 min x 60 seg x 1000 ms: 86400000)
        const dias = atraso / 86400000;
        multa = valor * taxaMulta;
        juros = valor * taxaJuros * dias;
    }

    const total = valor + multa + juros;            // Calcula o tatal

    // Exibe os valores para o usuário
    frm.outMulta.value = multa.toFixed(2);
    frm.outJuros.value = juros.toFixed(2);
    frm.outTotal.value = total.toFixed(2);

});
