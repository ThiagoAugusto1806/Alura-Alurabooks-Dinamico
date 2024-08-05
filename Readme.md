## 📚 AluraBooks Dinamico

Projeto de uma pagina de Ecommerce de livros em que os livros são recebidos de uma API externa e exibidos em tela.

## 💻 Tecnologias Utilizadas:

- JavaScript 
- HTML 
- CSS 

## 📂 Estrutura do Repositório

### 📁 app/

Pasta contendo toda a Lógica presente nas funções do site

- `main.js`: Ponto de entrada da lógica JavaScript onde é feito a requisição dos dados da API.
- `metodoForEach.js`: Método que percorre o array e faz a estruturação do HTML com os dados da API
- `metodoFilter.js`: Método de filtro onde faz a filtragem do conteúdo de acordo com os botôes clicados.
- `metodoMap.js`: Médoto map utilizado para fazer a aplicação de um desconto de 0.3 a todos os produtos.
- `metodoSort.js`:  Método que faz a ordenação do menor valor para o maior valor
- `metodoReduce.js`: Método que soma todos os preços dos produtos e ao final mostra o valor total quando clicado em `Livros Disponiveis`

### 📁 imagens/

Coleção de imagens de capas dos livros presentes na API.


### 📄 Arquivos na Raiz

- `index.html`: Página principal.
- `requisicao.txt`:  Contém o link da API utilizada na requisição.
- `style.css`: Estilos CSS utilizado na apresentação visual da aplicação web.

## Descrição do Projeto
Este projeto está presente no curso "JavaScript: métodos de array" da plataforma alura

## Desenvolvimento
De começo foi disponibilizado o modelo Figma a estrutura estatica em HTML e CSS pronto, o projeto foi tornar essa pagina dinamica consumindo a API disponibilizada, perceber a quantidade de livros e mostrar graficamente os livros indisponiveis bem como fazer os filtros por classificação, por disponiveis e classificar por preço do menor pro maior

## Funcionalidades
A pagina tem como funcionalidade mostrar os livros presentes na "Casa Do Código" e fazer a filtragem de acordo com o botão clicado

## Screenshots

<img src="https://imgur.com/YmIS6Dk.jpg" alt="Cabeçalho da pagina e botões de filtragem">
<img src="https://imgur.com/JTAIUKm.jpg" alt="Pagina filtrada em livros de dados">
<img src="https://imgur.com/l1GIj1o.jpg" alt="Rodapé dos livros disponiveis mostrando o preço total">
