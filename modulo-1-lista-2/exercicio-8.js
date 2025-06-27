const vendas = [
  { cliente: "Simone", total: 200 },
  { cliente: "Marco", total: 100 },
  { cliente: "Simone", total: 300 },
  { cliente: "Judas", total: 500 },
  { cliente: "Marco", total: 400 }
];

function agruparVendasPorCliente(vendas) {
  return vendas.reduce((somavendas, venda) => {
    if (somavendas[venda.cliente]) {
      somavendas[venda.cliente] += venda.total;
    } else {
        somavendas[venda.cliente] = venda.total;
    }
    return somavendas;
  }, {});
}

const resultado = agruparVendasPorCliente(vendas);
console.log(resultado);

  
