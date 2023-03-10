const elementoParaInserirLivros = document.getElementById('livros')
const elementoPrecoLivrosDisponiveos = document.getElementById('valor_total_livros_disponiveis')


function exibirLivros(livros) {
    elementoParaInserirLivros.innerHTML = ''
    elementoPrecoLivrosDisponiveos.innerHTML = ' '


    livros.forEach(livro => {

        const disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'  // Livro.quantidade é maior do que 0 ?? 'Verdade' : 'Falso' 

        elementoParaInserirLivros.innerHTML += `<div class="livro">
          <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
          <h2 class="livro__titulo">
            ${livro.titulo}
          </h2>
          <p class="livro__descricao">${livro.autor}</p>
          <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
          <div class="tags">
            <span class="tag">${livro.categoria}</span>
          </div>
        </div>`
    })
}