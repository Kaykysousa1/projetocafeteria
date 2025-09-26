const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const notas = [];
const totalNotas = 3;

function perguntarNota(i) {
  if (i < totalNotas) {
    rl.question(`Digite a nota ${i + 1}: `, (input) => {
      const nota = parseFloat(input);
      if (isNaN(nota) || nota < 0 || nota > 10) {
        console.log('Por favor, digite uma nota válida entre 0 e 10.');
        perguntarNota(i); // repete a pergunta para o mesmo índice
      } else {
        notas.push(nota);
        perguntarNota(i + 1);
      }
    });
  } else {
    const soma = notas.reduce((acc, val) => acc + val, 0);
    const media = soma / totalNotas;
    console.log(`Média: ${media.toFixed(2)}`);

    if (media >= 7) {
      console.log('Aluno aprovado!');
    } else {
      console.log('Aluno reprovado!');
    }

    rl.close();
  }
}

perguntarNota(0);