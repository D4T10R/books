function calcularPrecoTotalDisponiveis (livros) {

    var precoTotal = livros.reduce((acc, atual) => acc + atual.preco, 0).toFixed(2)
    console.log(precoTotal)
    return precoTotal
}