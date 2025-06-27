const produtos = [
  { nome: "Geladeira", preco: 3000 },
  { nome: "Cama", preco: 500 },
  { nome: "Teclado", preco: 1500 },
  { nome: "Televisão", preco: 1900 }
];

function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice() // cria uma cópia para não alterar o array original
    .sort((a, b) => a.preco - b.preco) // ordena pelo preço crescente
    .map(produto => produto.nome); // pega só os nomes
}

const resultado = nomesOrdenadosPorPreco(produtos);
console.log(resultado);
    
