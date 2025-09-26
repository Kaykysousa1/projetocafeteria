const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma string para inverter: ', (input) => {
  const invertida = input.split('').reverse().join('');
  console.log(`String invertida: ${invertida}`);
  rl.close();
});