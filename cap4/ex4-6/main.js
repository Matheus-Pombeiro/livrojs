// Cria referência para elementos do 'form' e 'h3'
const frm = document.querySelector("form");
const respNota100 = document.querySelector(".resposta__nota100");
const respNota50 = document.querySelector(".resposta__nota50");
const respNota10 = document.querySelector(".resposta__nota10");

// Processa os dados
frm.addEventListener("submit", (e) => {

    // Evita o envio automático do form
    e.preventDefault();

    // Cria referência para o saque
    const saque = Number(frm.inSaque.value);

    // Condição para a possibilidade do valor do saque não ser múltiplo de 10
    if (saque % 10 != 0) {

        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)");
        frm.inSaque.focus();
        return;

    }

    // Declara as variáveis das notas e realiza os cálculos
    const nota100 = Math.floor(saque / 100);    // Calcula notas de 100
    let resto = saque % 100;                    // Quanto sobra para pagar

    const nota50 = Math.floor(resto / 50);      // Calcula notas de 50
    resto = resto % 50;                         // quanto ainda sobra para pagar

    const nota10 = Math.floor(resto / 10);      //calcula notas de 10

    // Condição para a exibição das notas na tela
    if (nota100 > 0) {
        respNota100.innerText = `Nota(s) de R$ 100: ${nota100}`;
    }
    
    if (nota50 > 0) {
        respNota50.innerText = `Nota(s) de R$ 50: ${nota50}`;
    } 
    
    if (nota10 > 0) {
        respNota10.innerText = `Nota(s) de R$ 10: ${nota10}`;        
    }

})

// Limpa os campos de saída
frm.addEventListener("reset", () => {
    respNota100.innerText = "";
    respNota50.innerText = "";
    respNota10.innerText = "";
})