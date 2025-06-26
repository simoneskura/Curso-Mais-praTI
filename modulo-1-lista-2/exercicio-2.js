function jogoDeAdivinhacao() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let tentativa;
  let tentativas = 0;

  while (true) {
    tentativa = parseInt(prompt("Adivinhe o  número entre 1 e 100:"));
    tentativas++;

    if (tentativa === numeroSecreto) {
      console.log(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas.`);
      break;
    } else if (tentativa < numeroSecreto) {
      console.log("O numero é maior!");
    } else if (tentativa > numeroSecreto) {
      console.log("O numero é menor!");
    } else {
      console.log("Por favor, digite um número válido.");
    }
  }
}
  
