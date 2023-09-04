// Obtém os elementos da página
const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

// 'Escuta' o click no botão 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault();                         // Evita o envio automático do 'form'
    const produto = frm.inProduto.value;        // Obtém o produto digitado pelo usuário

    // obtém itens separando-os em elementos de vetor
    if (localStorage.getItem("comprasProduto")) {
        
        const produtos = localStorage.getItem("comprasProduto").split(";");

        produtos.push(produto);                        // Adiciona produtos à lista de compras
        produtos.sort();                               // Ordena os elementos do vetor em ordem alfabética

        // salva vetor classificado (com elementos separados por "")
        localStorage.setItem("comprasProduto", produtos.join(";"));

    } else {        // senão (é a primeira inclusão), salva apenas o produto

        localStorage.setItem("comprasProduto", produto);

    }

    listarProdutos();       // Chama a função

    frm.reset();                // ou frm.inProduto.value = ""
    frm.inProduto.focus();

})

const listarProdutos = () => {

    if (!localStorage.getItem("comprasProduto")) {
        respLista.innerText = "";
        return;
    }

    const produtos = localStorage.getItem("comprasProduto").split(";");

    respLista.innerText = `Produto(s) Adicionado(s)\n-----------------------\n${produtos.join("\n")}`;

}

window.addEventListener("load", listarProdutos);

frm.btLimpar.addEventListener("click", () => {

    if (localStorage.getItem("comprasProduto")) {
        if (confirm("Deseja realmente excluir todos os itens da lista?")) {
            localStorage.removeItem("comprasProduto");
            listarProdutos();
        }
    } else {
        alert("Lista está vazia...");
    }

    frm.inProduto.focus();

})