var livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivros()

async function getBuscarLivros() {

    const resposta = await fetch(endpointDaAPI)
    livros = await resposta.json()

    let livrosComDesconto = aplicarDisconto(livros)
    console.table(livros)

    exibirLivros(livrosComDesconto)
}




