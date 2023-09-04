// Lendo as notas (entrada)
const aluno = prompt("Nome do Aluno:");
const nota1 = Number(prompt("1ª Nota:"));
const nota2 = Number(prompt("2ª Nota:"));

// Calculando a média das notas (processamento)
const media = (nota1 + nota2) / 2;

// Mostrando as notas e média do aluno para o usuário (saída)
alert(`A média das notas do aluno ${aluno} é de: ${media.toFixed(1)}`);