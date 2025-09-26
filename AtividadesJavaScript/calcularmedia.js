const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeros = [];
const totalNumeros = 5;

function perguntarNumero(i) {
  if (i < totalNumeros) {
    rl.question(`Digite o número ${i + 1}: `, (input) => {
      const num = parseFloat(input);
      if (isNaN(num)) {
        console.log('Por favor, digite um número válido.');
        perguntarNumero(i); // repete a pergunta para o mesmo índice
      } else {
        numeros.push(num);
        perguntarNumero(i + 1);
      }
    });
  } else {
    const soma = numeros.reduce((acc, val) => acc + val, 0);
    const media = soma / totalNumeros;
    console.log(`A média dos números digitados é: ${media}`);
    rl.close();
  }
}

perguntarNumero(0);