// Obtém dados do formulário e da saída de dados
const frm = document.querySelector("form");
const respPrazo = document.querySelector(".outPrazo");
const respDesconto = document.querySelector(".outDesconto");

// 'Escuta' o click no botão 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault();                         // Evita o envio automático do 'form'
    const data = frm.inData.value;              // Obtém a data inserida pelo usuário
    const multa = Number(frm.inMulta.value);    // Obtém o valor da multa inserido pelo usuário

    const prazo = new Date();                   // Instacia objetos
    const partes = data.split("-");             // A data vem no formato aaaa-mm-dd

    // 'Seta' as partes da data
    prazo.setDate(Number(partes[2]));               
    prazo.setMonth(Number(partes[1]) - 1);          
    prazo.setFullYear(Number(partes[0]));           

    const dia = prazo.getDate();                // Obtém o dia 

    prazo.setDate(dia + 90);                    // Acrescenta 90 dias à data atual

    const mes = prazo.getMonth() + 1;           // Obtém o mês
    const ano = prazo.getFullYear();            // Obtém o ano

    const desconto = multa * 0.80;              // Cacula o desconto de 20%
    
    // Exibe a data limite e o desconto de 20%
    respPrazo.innerText = "Data Limite para Pgto com Desconto: " + (dia < 10 ? "0" + dia  : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + ano;
    respDesconto.innerText = `Valor com Desconto R$: ${desconto.toFixed(2)}`;

})