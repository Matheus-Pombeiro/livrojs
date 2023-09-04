// Obtém os elementos do 'form' e da sáida de dados
const frm = document.querySelector("form");
const respDados = document.querySelector(".outDados");

// Declara o vetor 'criancas' de escopo global
const criancas = [];

frm.addEventListener("submit", (e) => {

    // Evita o envio automático do 'form'
    e.preventDefault();

    // Obtém os elementos 'nome' e 'idade'
    const nome = frm.inNome.value;
    const idade = Number(frm.inIdade.value);

    // Adiciona dados ao final do vetor
    criancas.push({nome, idade});

    // Limpa os campos do 'form'
    frm.reset()

    // Posiciona o cursor
    frm.inNome.focus();

    // Dispara um click em 'btListar'
    frm.btListar.dispatchEvent(new Event("click"));

})

// 'Escuta' o 'click' em 'btListar'
frm.btListar.addEventListener("click", () => {

    // Se vazio, exibe alerta
    if (criancas.length == 0) {

        alert("Não há crianças na lista...");
        return;

    }

    // Declara a var 'lista' com uma string vazia para concatenar os dados
    let lista = "";

    // Percorre o vetor
    for (const crianca of criancas) {

        // Desetrutura o objeto
        const {nome, idade} = crianca;

        // Atribui dados a var 'lista'
        lista += nome + " - " + idade + " anos\n";

    }

    // Exibe a lista para o usuário
    respDados.innerText = lista;

})

// 'Escuta' o 'click' em 'btResumir'
frm.btResumir.addEventListener("click", () => {

    // Se o tamanho do vetor for 0
    if (criancas.length == 0) {

        alert("Não crianças na lista...");
        return;

    }

    // Cria uma copia do vetor 'criancas'
    const copia = [...criancas];

    // Ordena pela idade
    copia.sort((a, b) => a.idade - b.idade);

    // Para concatenar a saída
    let resumo = "";

    // Recebe a menor idade do vetor ordenado
    let aux = copia[0].idade;
    
    // Para inserir nomes de cada idade
    let nomes = [];

    // Percorre o vetor 'copia'
    for (const crianca of copia) {

        const {nome, idade} = crianca;

        // Se é da mesma idade auxiliar
        if (idade == aux) {

            nomes.push(nome);           // Adiciona ao vetor 'nomes'

        } else {                        // Senão, monta o resumo para cada idade

            resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
            resumo += "(" + nomes.join(", ") + ")\n\n";

            aux = idade;                // Obtém nova idade na ordem
            nomes = [];                 // Limpa o vetor dos nomes
            nomes.push(nome);           // Adiciona o primeiro da nova idade

        }
    }

    // Adiciona última criança
    resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
    resumo += "(" + nomes.join(", ") + ")\n\n";

    // Exibe a resposta para o usuário
    respDados.innerText = resumo;
})