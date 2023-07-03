# Gestor de Bibliotecas

Este é um projeto Node.js que fornece uma API simples para gerenciar autores, livros e editoras. A API permite que você realize várias operações, como listar autores, livros e editoras, adicionar novos registros, atualizar registros existentes e excluir registros.

## Primeiros Passos

Para executar este projeto em sua máquina local, siga as instruções abaixo:

### Pré-requisitos

- Node.js: Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo no site oficial: [https://nodejs.org](https://nodejs.org)

### Instalação

1. Clone o repositório ou faça o download do código-fonte:

   ```
   git clone <url-do-repositório>
   ```

2. Navegue até o diretório do projeto:

   ```
   cd <diretório-do-projeto>
   ```

3. Instale as dependências:

   ```
   npm install
   ```

4. Configure a conexão com o banco de dados:

   - Crie um banco de dados MongoDB e obtenha a URI de conexão.

   - Abra o arquivo `src/config/dbConnect.js` e substitua `<SUA-URI-DO-BANCO>` pela URI de conexão MongoDB real.

5. Insira o script em `package.json`:

```
"scripts": {
  "dev": "nodemon server.js",
  <other-scripts>
}
```

6. Inicie o servidor:

   ```
   npm run dev
   ```

   O servidor deve estar sendo executado em `http://localhost:3000`.

## Endpoints da API

A API expõe os seguintes endpoints:

### Autores

- **GET /authors** - Lista todos os autores.
- **GET /authors/:id** - Obtém um autor específico pelo ID.
- **POST /authors** - Cria um novo autor.
- **PUT /authors/:id** - Atualiza um autor existente.
- **DELETE /authors/:id** - Exclui um autor.

### Livros

- **GET /books** - Lista todos os livros.
- **GET /books/:id** - Obtém um livro específico pelo ID.
- **GET /books/search?publisher=:publisher** - Lista livros por editora.
- **POST /books** - Cria um novo livro.
- **PUT /books/:id** - Atualiza um livro existente.
- **DELETE /books/:id** - Exclui um livro.

### Editoras

- **GET /publishers** - Lista todas as editoras.
- **GET /publishers/:id** - Obtém uma editora específica pelo ID.
- **POST /publishers** - Cria uma nova editora.
- **PUT /publishers/:id** - Atualiza uma editora existente.
- **DELETE /publishers/:id** - Exclui uma editora.

## Exemplos

### Listar Autores

**Requisição:**

```
GET /authors
```

**Resposta:**

```json
[
  {
    "id": "1",
    "name": "John Doe",
    "nationality": "EUA"
  },
  {
    "id": "2",
    "name": "Jane Smith",
    "nationality": "Reino Unido"
  },
  ...
]
```

### Criar Livro

**Requisição:**

```
POST /books
Content-Type: application/json

{
  "title": "O Grande Gatsby",
  "author": "1",
  "publisher": "2",
  "numberOfPages": 218
}
```

\*\*Res

posta:\*\*

```json
{
  "id": "1",
  "title": "O Grande Gatsby",
  "author": "1",
  "publisher": "2",
  "numberOfPages": 218
}
```

### Atualizar Autor

**Requisição:**

```
PUT /authors/1
Content-Type: application/json

{
  "name": "John Doe Jr.",
  "nationality": "EUA"
}
```

**Resposta:**

```json
{
  "message": "Autor atualizado com sucesso."
}
```

### Excluir Livro

**Requisição:**

```
DELETE /books/1
```

**Resposta:**

```json
{
  "message": "Livro excluído com sucesso."
}
```

## Tratamento de Erros

- Se ocorrer um erro durante o processamento de uma solicitação, o servidor responderá com uma mensagem de erro apropriada e o código de status HTTP correspondente.
- As mensagens de erro serão retornadas no seguinte formato:

  ```json
  {
    "message": "Mensagem de erro aqui"
  }
  ```

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## Agradecimentos

- Este projeto foi criado como parte de um curso de Node.js.
