  const readline = require('readline').createInterface({
 input: process.stdin,
  output: process.stdout
});

let valor1, valor2;

readline.question('Digite o primeiro valor inteiro: ', (valor1Str) => {
  readline.question('Digite o segundo valor inteiro (diferente do primeiro): ', (valor2Str) => {
    valor1 = parseInt(valor1Str);
    valor2 = parseInt(valor2Str);

    while (isNaN(valor1) || isNaN(valor2) || valor1 === valor2) {
      if (isNaN(valor1) || isNaN(valor2)) {
        console.log('❌ Por favor, digite apenas números inteiros.');
      } else if (valor1 === valor2) {
        console.log('⚠️ Os valores não podem ser iguais.');
      }

      // Repetir as perguntas
      readline.question('Digite o primeiro valor inteiro: ', (novoValor1Str) => {
        readline.question('Digite o segundo valor inteiro (diferente do primeiro): ', (novoValor2Str) => {
          valor1 = parseInt(novoValor1Str);
          valor2 = parseInt(novoValor2Str);

          if (!isNaN(valor1) && !isNaN(valor2) && valor1 !== valor2) {
            const menor = Math.min(valor1, valor2);
            const maior = Math.max(valor1, valor2);
            console.log(`✅ Valores em ordem crescente: ${menor}, ${maior}`);
            readline.close();
          } else {
            console.log('❌ Ainda inválido. Reinicie o programa para tentar novamente.');
            readline.close();
          }
        });
      });

      return; // Para não continuar o código abaixo enquanto a repetição roda
    }

    // Se os valores forem válidos logo de cara:
    const menor = Math.min(valor1, valor2);
    const maior = Math.max(valor1, valor2);
    console.log(`✅ Valores em ordem crescente: ${menor}, ${maior}`);
    readline.close();
  });
});
