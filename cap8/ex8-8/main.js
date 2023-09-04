// Obtém os elementos do 'form' e da saída de respostas
const frm = document.querySelector("form");
const respDesconto = document.querySelector(".outDesconto");
const respAPagar = document.querySelector(".outAPagar");

// 'Escuta' o click no radio button 'rbSim'
frm.rbSim.addEventListener("click", () => {
    frm.inConvenio.className = "exibe";         // Exibe o item
})

// 'Escuta' o click no radio button 'rbNao'
frm.rbNao.addEventListener("click", () => {
    frm.inConvenio.className = "oculto";        // Oculta o item
})

// 'Escuta' o click no botão 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault();                             // Evita o envio automático do 'form'
    const valor = Number(frm.inValor.value);        // Obtém o valor da vacina
    const convenio = frm.inConvenio.value;          // Obtém o convênio selecionado pelo usuário

    const desconto = valorDesconto(valor, convenio);        // Obtém a função 'valorDesconto'

    const totalAPagar = valor - desconto;       // Processa o valor a pagar subtraindo o desconto

    respDesconto.innerText = `Desconto R$: ${desconto.toFixed(2)}`;     // Exibe o valor do desconto para o usuário
    respAPagar.innerText = `A Pagar R$: ${totalAPagar.toFixed(2)}`;     // Exibe o valor final da vacina para o usuário

})

// Declara uma função para processar o desconto do usuário
const valorDesconto = (valor, convenio) => {

    let desc;         // Declara uma var para processar o desconto

    if (frm.rbNao.checked) {                // Se não existir convênio...
        desc = valor * 0.1;                 // Desconto de 10%
    } else if (convenio == "amigo") {       // Se o covênio for de 'Amigo dos Animais'...
        desc = valor * 0.2;                 // Desconto de 20%
    } else if (convenio == "saude") {       // Se desconto for de 'Saúde Animal'...
        desc = valor * 0.5;                 // Desconto de 50%
    }

    return desc;        // Retorna o desconto

}