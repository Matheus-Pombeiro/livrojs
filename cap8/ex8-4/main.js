// Obtém os elementos do formulário e da saída de dados
const frm = document.querySelector("form");
const respPedido = document.querySelector(".outPedido");

const itens = [];       // Declara um vetor de escopo global para armazenar os itens do pedido

// 'Escuta' o click no radio button 'rbPizza'
frm.rbPizza.addEventListener("click", () => {

    frm.inBebida.className = "oculta";      // Oculta o 'select' de Bebidas
    frm.inPizza.className = "exibe";        // Exibe o 'select' de Pizza

});

// 'Escuta' o click no radio button 'rbBebida'
frm.rbBebida.addEventListener("click", () => {

    frm.inPizza.className = "oculta";       // Oculta o 'select' de Pizza
    frm.inBebida.className = "exibe";       // Exibe o 'select' de Bebida

});

// 'Escuta' quando o campo 'inDetalhes' ganha o foco do usuário
frm.inDetalhes.addEventListener("focus", () => {

    if (frm.rbPizza.checked) {
        const pizza = frm.inPizza.value;                                    // Obtém o tamanho da Pizza
        const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4;       // Uso do operador ternário para indicar o nº de sabores
        frm.inDetalhes.placeholder = `Até ${num} sabores`;                  // Dá uma dica para o usuário (garçom)
    }

});

frm.inDetalhes.addEventListener("blur", () => {

    frm.inDetalhes.placeholder = "";        // Limpa o 'placehoder' (dica)

});

// 'Escuta' o click no botão 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault();     // Evita o envio automático do 'form'
    let produto;            // Declara uma var vazia para concatenar os itens do pedido

    if (frm.rbPizza.checked) {                      // Se o radio button da pizza estiver marcado
        const num = frm.inPizza.selectedIndex;      // Obtém o nº do item selecionado
        produto = frm.inPizza.options[num].text;    // Obtém o texto do item selecionado
    } else {                                        // Senão
        const num = frm.inBebida.selectedIndex;     // Obtém o nº do item selecionado
        produto = frm.inBebida.options[num].text;   // Obtém o texto do item selecionado
    }

    const detalhes = frm.inDetalhes.value;          // Obtém o conteúdo do campo de detalhes
    itens.push(produto + " (" + detalhes + ")");    // Adiciona ao vetor
    respPedido.innerText = itens.join("\n");        // Exibe o pedido do cliente ao usuário (garçom)

    frm.reset();                                    // Limpa os campos do 'form'
    frm.rbPizza.dispatchEvent(new Event("click"));  // Dispara um click em 'rbPizza' (é parecido com um 'autofocus')

})