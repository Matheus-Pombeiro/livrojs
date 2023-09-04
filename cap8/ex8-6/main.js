// Obtém os elementos do 'form' e da saída de resposta
const frm = document.querySelector("form");
const respDados = document.querySelector(".outDados");

frm.addEventListener("submit", (e) => {

    e.preventDefault();                             // Evita o envio automático do 'form'
    const nome = frm.inNome.value;                  // Obtém o nome do atleta
    const idade = Number(frm.inIdade.value);        // Obtém a idade do atleta

    const tracos = retornarTracos(nome);            // Declara uma var que recebe uma função com passagem do parâmetro 'nome'
    const categoria = categorizarAtleta(idade);     // Declara uma var que recebe uma função com passagem do parâmetro 'idade'

    respDados.innerText = nome + "\n" + tracos + "\nCategoria: " + categoria;      // Exibe os dados do atleta para o usuário

})

const retornarTracos = (nome) => {          // Declara uma 'function' para exibir traços de acordo com o nome do atleta

    const partes = nome.split(" ");         // Obtém as partes do nome
    
    let tracos = "";                        // Declara uma var com uma string vazia para concatenar elementos

    for (const parte of partes) {                       // Percorre o vetor
        tracos += "-".repeat(parte.length) + " ";       // concatena os elementos da string
    }

    return tracos;                          // Exibe os traços de acordo com o tamanho do nome do atleta

}

const categorizarAtleta = (idade) => {      // Declara uma 'function' para definir a categoria do atleta de acordo com a idade

    let cat = ""

    if(idade <= 12) {            // Se a idade for <= a 12...
        cat = "Infantil";        // Infantil
    } else if (idade <= 18) {    // Se a idade for >= a 12 e <= 18...   
        cat = "Juvenil";         // Juvenil
    } else {                     // Senão...
        cat = "Adulto";          // Adulto
    }

    return cat;

}