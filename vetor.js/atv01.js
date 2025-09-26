/* 
    faça um programa que le 10 numeros inteiros do teclado e armazene em um vetor. Ao final imprima o vetor armazenado nos dois sentidos.
    Para rodar -> npm install prompt-syn no diretorio do script. E node script para rodar no terminal.
*/


/* 
    Faça um programa que leia 10 números inteiros do teclado e armazene em um vetor. 
    Ao final, imprima o vetor armazenado nos dois sentidos (direto e inverso).
    Para rodar -> npm install prompt-sync no diretório do script. 
    E depois: node script.js para rodar no terminal.
*/

const prompt = require('prompt-sync')();
let vetor = []; // cria um vetor vazio

// Entrada dos 10 números
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Digite o número ${i + 1}/10: `));
    
    // Verifica se é um número válido
    if (!isNaN(num)) {
        vetor.push(num); // armazena número no vetor
    } else {
        console.log("Entrada inválida. Tente novamente.");
        i--; // repete o índice se o input for inválido
    }
}

// Exibe o vetor na ordem direta
console.log('\nVetor na ordem direta:');
for (let i = 0; i < vetor.length; i++) {
    console.log(vetor[i]);
}

// Exibe o vetor na ordem inversa
console.log('\nVetor na ordem inversa:');
for (let i = vetor.length - 1; i >= 0; i--) {
    console.log(vetor[i]);
}
