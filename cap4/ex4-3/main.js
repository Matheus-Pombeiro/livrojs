// Mensagem de entrada
alert("Buscando um delivery de medicamentos?");

// Lê os dados
const bairro = prompt("Bairro de entrega: ");

// Declara a variável 'taxaEntrega'
let taxaEntrega;

// Processa os dados com o operador condicional 'switch...case'
switch (bairro) {
    
    case "Centro":
        taxaEntrega = 5.00;
        break;
    
    case "Fragata": // Declara o mesmo valor para os dois cases
    case "Três Vendas": 
        taxaEntrega = 7.00;
        break;

    case "Laranjal":
        taxaEntrega = 10.00;
        break;
    
    default:
        taxaEntrega = 8.00;

}

// Saída dos dados
alert(`Taxa R$ ${taxaEntrega.toFixed(2)}`);