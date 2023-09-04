// Obtém os elementos do 'form' e da saída de dados
const frm = document.querySelector("form");
const respSenha = document.querySelector(".outSenha");

// 'Escuta' o click no botão 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault();                 // Evita o envio automático do 'form'
    const nome = frm.inNome.value;      // Obtém o nome do aluno

    const nomeCompleto = validarNome(nome);     // Obtém a 'function' 'validarNome'
    const sobrenome = obterSobrenome(nome);     // Obtém a 'function' 'obterSobrenome'
    const vogais = contarVogais(nome);          // Obtém a 'function' 'contarVogais'

    if (nomeCompleto) {                                                                         // Se o nome estiver completo...
        respSenha.innerText = "Senha Inicial: " + sobrenome + vogais.toString().padStart(2, "0");       // Exibe a senha
    } else {                                                                                            // Senão...
        respSenha.innerText = "Erro... O nome está incompleto";                                         // Exibe um alerta
    }

})

const validarNome = (nome) => nome.includes(" ");       // Verifica se o nome está completo

const obterSobrenome = (nome) => {

    const partes = nome.split(" ");                                 // Obtém as partes do nome do aluno
    const ultimoNome = partes[partes.length - 1].toLowerCase();     // Obtém o último nome do aluno em letras minúsculas
    return ultimoNome;                                              // retorna 'ultimoNome'
    
}

const contarVogais = (nome) => {

    const tam = nome.length;            // Declara uma var que recebe o tamanho do nome

    let contador = 0;                   // Declara uma variável para contar o nº de vogais

    for (const letra of nome) {                 // Percorre o vetor
        const letraUC = letra.toUpperCase();    // Obtém as letras do nome e as transforma em maiúscula
        // Se a letra do nome for uma vogal...
        if (letraUC == "A" || letraUC == "E" || letraUC == "I" || letraUC == "O" || letraUC == "U") {
            contador++;     // Incrementa o contador
        }
    }

    return contador;        // Retorna 'contador'

}