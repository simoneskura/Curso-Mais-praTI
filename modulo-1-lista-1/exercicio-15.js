  let anterior = 0;
let atual = 1;

console.log('Sequência de Fibonacci:');

for (let i = 0; i < 10; i++) {
  console.log(anterior);

  let proximo = anterior + atual;
  anterior = atual;
  atual = proximo;
}
