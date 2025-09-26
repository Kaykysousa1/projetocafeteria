const readline = require('readline');

const numerosExtenso = [
  "um", "dois", "três", "quatro", "cinco",
  "seis", "sete", "oito", "nove", "dez",
  "onze", "doze", "treze", "quatorze", "quinze",
  "dezesseis", "dezessete", "dezoito", "dezenove", "vinte"
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número inteiro de 1 a 20: ', (input) => {
  const num = parseInt(input);

  if (num >= 1 && num <= 20) {
    console.log(`Número por extenso: ${numerosExtenso[num - 1]}`);
  } else {
    console.log('Número fora do intervalo permitido (1 a 20)');
  }

  rl.close();
});