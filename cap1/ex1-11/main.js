// Lendo o valor da compra (entrada)
const compra = Number(prompt("Valor total da compra a pagar: R$ "));

// Mensagem informativa ao cliente
alert("Em nossa loja temos 2 opções de pagamento.\nÀ vista com 10% de desconto\nA prazo em 3 parcelas");

// Calculando as duas opções de pagamento (processamento)
const aVista = compra - (compra * 0.1);
const aPrazo = compra / 3;

// Mostrando os valores ao cliente (saída)
alert(`Valor Total da Compra: R$ ${compra.toFixed(2)}\nValor à Vista: R$ ${aVista.toFixed(2)}\nValor a Prazo (3 parcelas): R$ ${aPrazo.toFixed(2)}`);