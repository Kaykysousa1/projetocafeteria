function gerarNumerosAleatorios(qtd, max) {
  const numeros = [];
  for (let i = 0; i < qtd; i++) {
    // Gera número inteiro aleatório entre 0 e max (inclusive)
    const num = Math.floor(Math.random() * (max + 1));
    numeros.push(num);
  }
  return numeros;
}

const numerosAleatorios = gerarNumerosAleatorios(1000, 1000);

console.log(numerosAleatorios);