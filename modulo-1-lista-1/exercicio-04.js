const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Escolha uma opção:');
console.log('1 - Ver saudação');
console.log('2 - Calcular dobro de um número');
console.log('3 - Sair');

readline.question('Digite o número da opção: ', (opcao) => {
  switch (opcao) {
    case '1':
      console.log('Olá! Seja bem-vindo(a)!');
      break;

    case '2':
      readline.question('Digite um número: ', (numeroStr) => {
        const numero = parseFloat(numeroStr);
        if (isNaN(numero)) {
          console.log('Valor inválido.');
        } else {
          console.log(`O dobro de ${numero} é ${numero * 2}`);
        }
        readline.close();
      });
      return;

    case '3':
      console.log('Saindo do programa. Até mais!');
      break;

    default:
      console.log('Opção inválida.');
  }

  readline.close();
});
