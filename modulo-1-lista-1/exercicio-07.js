const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite a quantidade de maçãs compradas: ', (quantidadeStr) => {
  const quantidade = parseInt(quantidadeStr);

  if (isNaN(quantidade) || quantidade <= 0) {
    console.log('Quantidade inválida. Digite um número inteiro positivo.');
  } else {
    let precoUnitario;

    if (quantidade < 12) {
      precoUnitario = 0.30;
    } else {
      precoUnitario = 0.25;
    }

    const valorTotal = quantidade * precoUnitario;
    console.log(`Valor total da compra: R$ ${valorTotal.toFixed(2)}`);
  }

  readline.close();
});  
