// Cria a referência para os elementos 'form' e 'resposta'
const frm = document.querySelector("form");
const respContasAPagar = document.querySelector(".resposta__descricao__contas-a-pagar");
const respQuantidadeAPagar = document.querySelector(".resposta__quantidade__contas-a-pagar");

// Declara as variáveis para auxílo das respostas e dos cálculos
let resposta = "";
let numContas = 0;
let valorTotal = 0;

// Cria um 'ouvinte' para quando o botão 'submit' for clicado
frm.addEventListener("submit", (e) => {

    // Evita o envio automático do 'form'
    e.preventDefault();

    // Cria a referência para os inputs
    const descricao = frm.inDescricao.value;
    const valor = Number(frm.inValor.value);

    // Processamento dos dados
    numContas++;
    valorTotal += valor;
    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + ("\n");

    // Saída dos dados
    respContasAPagar.innerText = `${resposta}------------------------------`;
    respQuantidadeAPagar.innerText = `${numContas} Conta(s) - Total R$: ${valorTotal.toFixed(2)}`;

    // Limpa os campos do form
    frm.inDescricao.value = "";
    frm.inValor.value = "";

    // Posiciona o campo 'inDescricao' do 'form'
    frm.inDescricao.focus();
})

// Limpa os campos das respostas
frm.addEventListener("reset", () => {
    respContasAPagar.innerText = "";
    respQuantidadeAPagar.innerText = "";
})