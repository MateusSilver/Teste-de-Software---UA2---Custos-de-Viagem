function calcularCustoTotal(
  duracao,
  numPessoas,
  custoTransporte,
  custoHospedagem,
  custoAlimentacao,
  custoAtividades,
  seguro,
  despesasExtras,
  desconto
) {
  let custoHospedagemTotal = custoHospedagem * duracao;
  let custoAlimentacaoTotal = custoAlimentacao * numPessoas * duracao;
  let custoTransporteTotal = custoTransporte * numPessoas;
  let custoTotal =
    custoHospedagemTotal +
    custoAlimentacaoTotal +
    custoTransporteTotal +
    custoAtividades +
    despesasExtras;

  if (seguro === "Sim") {
    custoTotal += 100; // Adiciona um custo fixo para seguro
  }

  // Aplicando desconto
  custoTotal -= custoTotal * (desconto / 100);

  let custoPorPessoa = custoTotal / numPessoas;

  return {
    custoTotal: custoTotal.toFixed(2),
    custoPorPessoa: custoPorPessoa.toFixed(2),
  };
}

function gerarSugestoesEconomia(
  custoTotal,
  numPessoas,
  custoTransporte,
  custoHospedagem,
  custoAlimentacao
) {
  let sugestoes = [];

  if (custoTransporte > 500) {
    sugestoes.push(
      "Considere usar transporte público ou caronas para economizar."
    );
  }
  if (custoHospedagem > 200) {
    sugestoes.push(
      "Verifique opções de hospedagem mais baratas, como hostels ou Airbnb."
    );
  }
  if (custoAlimentacao > 100) {
    sugestoes.push(
      "Tente fazer algumas refeições em casa ou escolha restaurantes mais econômicos."
    );
  }

  return sugestoes.length > 0
    ? sugestoes
    : ["Você já está fazendo boas escolhas!"];
}

function calcularViagem(
  destino,
  duracao,
  numPessoas,
  custoTransporte,
  custoHospedagem,
  custoAlimentacao,
  custoAtividades,
  seguro,
  despesasExtras,
  desconto
) {
  const { custoTotal, custoPorPessoa } = calcularCustoTotal(
    duracao,
    numPessoas,
    custoTransporte,
    custoHospedagem,
    custoAlimentacao,
    custoAtividades,
    seguro,
    despesasExtras,
    desconto
  );
  const sugestoes = gerarSugestoesEconomia(
    custoTotal,
    numPessoas,
    custoTransporte,
    custoHospedagem,
    custoAlimentacao
  );

  return {
    destino,
    custoTotal,
    custoPorPessoa,
    sugestoes,
  };
}

// Exemplo de uso:
const resultadoViagem = calcularViagem(
  "Praia", //destino
  7, //duração
  4, //numero de pessoas
  300, // custo de transporte por pessoa
  150, // custo de hospedagem por dia
  50, // custo diario com alimentação
  200, // custo de atividades por dia
  "Sim", // seguro
  100, // despesas extras
  10 // desconto percentual
);
console.log(resultadoViagem);
