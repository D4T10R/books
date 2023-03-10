let botoes = document.querySelectorAll('.btn')



botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBotao = document.getElementById(this.id)
    const categoria = elementoBotao.value

    let livrosFiltrados = categoria == 'disponivel' ? filtrarLivrosDisponiveis() : filtrarPorCategoria(categoria)

    exibirLivros(livrosFiltrados)

    console.log(categoria)
    precoTotal = calcularPrecoTotalDisponiveis(livrosFiltrados)

    if (categoria == 'disponivel') {

        exibirPrecoTotalLivrosDisponiveis(precoTotal)
    }

}



function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarLivrosDisponiveis() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirPrecoTotalLivrosDisponiveis(precoTotal) {
    elementoPrecoLivrosDisponiveos.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${precoTotal}</span></p>
    </div>
    `
}