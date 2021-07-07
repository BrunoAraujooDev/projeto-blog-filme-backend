### Projeto 2 - Filmes____________________________

## Propósito

#### API desenvolvida com o intuito de manifestar um espírito colaborativo entre os participantes dos Bootcamps.

## O Sistema Proposto

O Sistema foi desenvolvido com o intuito de realizar todas as operações do CRUD (create, read, update, delete). Seu objetivo é manipular um arquivo JSON para simular um banco de dados.

## Baixar o projeto

-- Crie uma nova pasta (obs. Fora da pasta do projeto de front)
-- Abra a pasta com o Visual Studio Code

#### No terminal do Visual Studio Code execute os seguintes comandos:

-- comando: git clone https://gitlab.com/daniel.bsilva/infnet-blog-filmes-projeto02-api
-- comando: cd infnet-blog-filmes-projeto02-api

#### Instalar as bibliotecas____________________________

#### No terminal do Visual Studio Code execute o comando:

-- comando: npm install

#### Baixar a versão mais recente da API____________________________

##### (Obs. Conforme vamos evoluindo no projeto certas modificações na API são necessárias. Antes de executar a API. Digite este comando no terminal do visual Studio Code, ele atualizará a API com as modificações que fiz.)

-- comando: git pull origin master

### Iniciar a API____________________________
-- comando: npm run dev
Obs. A API remove os arquivos json. Depois cria novos arquivos json com os dados solicitados. 

#### Informações____________________________

##### Porta: 3001

##### Endereço http://localhost:3001

### Os Campos____________________________

Os campos da categoria e do post são os seguintes:
-- categoria: id, descricao
-- post: id, idCategoria, titulo, imagem, dataPostagem, sinopse, atoresPrincipais, diretor, lançamento, descricao, nota, imagemCarousel

### Rotas de Categoria____________________________

-- inserir uma categoria - http://localhost:3001/v1/categoria
O usuário deve inserir apenas a descricao. O ID é gerado automaticamente pelo Back-End

-- consulta todas as categorias - http://localhost:3001/v1/categoria
O usuário não precisa fornecer nenhum dado.

-- consulta uma categoria pelo seu ID - http://localhost:3001/v1/categoria/:id
O usuário deve inserir o ID da categoria que ele quer consultar.

-- atualiza uma categoria - http://localhost:3001/v1/categoria/:id
O usuário deve inserir o ID da categoria que ele quer atualizar.

-- deleta uma categoria - http://localhost:3001/v1/categoria/:id
O usuário deve inserir o ID da categoria que ele quer deletar.

### Rotas de Postagem____________________________

-- inserir uma postagem - http://localhost:3001/v1/postagem
O usuário deve inserir: titulo, idCategoria, imagem, dataPostagem, sinopse, atoresPrincipais, diretor, lançamento, descricao, nota e imagemCarousel

-- consultar todas as postagens - http://localhost:3001/v1/postagem
O usuário não precisa fornecer nenhum dado.

-- Lista postagem por id da Categoria - http://localhost:3001/v1/postagem/categoria/:id
O usuário deve inserir o ID da categoria.
-- consultar uma postagem pelo seu ID - http://localhost:3001/v1/postagem/:id
O usuário deve inserir o ID da postagem que ele quer consultar.

-- atualizar uma postagem - http://localhost:3001/v1/postagem/:id
O usuário deve inserir o ID da postagem que ele quer atualizar.

-- deletar uma postagem - http://localhost:3001/v1/postagem/:id
O usuário deve inserir o ID da postagem que ele quer excluir.



Obs. Para facilitar no front, enviei para o front além do 'message' coloquei o 'error' true. Desse modo você consegue ver se ocorreu um erro ou não. E também terá a menssagem. Podendo validar e exibir no seu front.

### Abraço Daniel Barboza.
