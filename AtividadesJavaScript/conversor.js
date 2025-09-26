const readline = require('readline');

// Cria uma interface para entrada de dados pelo terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fahrenheitParaCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

rl.question('Digite a temperatura em Fahrenheit: ', (input) => {
  const fahrenheit = parseFloat(input);

  if (isNaN(fahrenheit)) {
    console.log('Por favor, digite um número válido.');
  } else {
    const celsius = fahrenheitParaCelsius(fahrenheit);
    console.log(`${fahrenheit}°F é equivalente a ${celsius.toFixed(2)}°C`);
  }

  rl.close();
});