const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ehPrimo(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const limite = Math.sqrt(num);
  for (let i = 3; i <= limite; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

rl.question('Digite um número: ', (input) => {
  const numero = parseInt(input);

  if (isNaN(numero)) {
    console.log('Por favor, digite um número válido.');
  } else {
    if (ehPrimo(numero)) {
      console.log(`${numero} é um número primo.`);
    } else {
      console.log(`${numero} não é um número primo.`);
    }
  }

  rl.close();
});