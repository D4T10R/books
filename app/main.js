var livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
const elementoParaInserirLivros = document.getElementById('livros')

getBuscarLivros()

async function getBuscarLivros() {
    const resposta = await fetch(endpointDaAPI)
    livros = await resposta.json()

    console.table(livros)

    exibirLivros()
}

function exibirLivros() {
    livros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `<div class="livro">
          <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
          <h2 class="livro__titulo">
            ${livro.titulo}
          </h2>
          <p class="livro__descricao">${livro.autor}</p>
          <p class="livro__preco" id="preco">${livro.preco}</p>
          <div class="tags">
            <span class="tag">${livro.categoria}</span>
          </div>
        </div>`
    })
}
