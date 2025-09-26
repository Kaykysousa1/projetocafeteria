function rolarDado() {
  // Gera um número aleatório de 1 a 6
  return Math.floor(Math.random() * 6) + 1;
}

function jogar() {
  const jogador1 = rolarDado();
  const jogador2 = rolarDado();

  console.log(`Jogador 1 rolou: ${jogador1}`);
  console.log(`Jogador 2 rolou: ${jogador2}`);

  if (jogador1 > jogador2) {
    console.log("Jogador 1 venceu!");
  } else if (jogador2 > jogador1) {
    console.log("Jogador 2 venceu!");
  } else {
    console.log("Empate!");
  }
}

jogar();