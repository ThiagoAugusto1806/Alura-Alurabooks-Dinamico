const secaoLivros = document.querySelector(".livros")
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

function exibirOsLivrosNaTela(listaDeLivros){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''
    secaoLivros.innerHTML=''
    listaDeLivros.forEach(livro => {
        secaoLivros.innerHTML+=`
        <div class="livro">
            <img class="${livro.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel"}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
            ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
            <span class="tag">${livro.categoria}</span>
        </div>
        </div>
        `
    });
}