const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntarPeso() {
  rl.question('Digite seu peso em kg: ', (pesoInput) => {
    const peso = parseFloat(pesoInput);
    if (isNaN(peso) || peso <= 0) {
      console.log('Por favor, digite um peso válido.');
      perguntarPeso();
    } else {
      perguntarAltura(peso);
    }
  });
}

function perguntarAltura(peso) {
  rl.question('Digite sua altura em metros (ex: 1.75): ', (alturaInput) => {
    const altura = parseFloat(alturaInput);
    if (isNaN(altura) || altura <= 0) {
      console.log('Por favor, digite uma altura válida.');
      perguntarAltura(peso);
    } else {
      calcularIMC(peso, altura);
      rl.close();
    }
  });
}

function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);
  console.log(`Seu IMC é: ${imc.toFixed(2)}`);

  if (imc < 18.5) {
    console.log('Você está abaixo do peso.');
  } else if (imc < 25) {
    console.log('Você está com peso normal.');
  } else if (imc < 30) {
    console.log('Você está com sobrepeso.');
  } else {
    console.log('Você está com obesidade.');
  }
}

perguntarPeso();
