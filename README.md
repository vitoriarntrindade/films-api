# API de Filmes

Uma API simples para gerenciar uma coleção de filmes, construída com Node.js, Express e MongoDB.

## Funcionalidades

- Criar uma nova entrada de filme
- Recuperar todas as entradas de filmes
- Atualizar uma entrada de filme
- Excluir uma entrada de filme

## Tecnologias Utilizadas
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) [Node.js](https://nodejs.org/)
- ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white) [Express](https://expressjs.com/)
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) [MongoDB](https://www.mongodb.com/)
- ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white) [Mongoose](https://mongoosejs.com/)
- ![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=.env&logoColor=black) [dotenv](https://www.npmjs.com/package/dotenv)

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/vitoriarntrindade/films-api.git
    cd films-api
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Crie um arquivo `.env` no diretório raiz e adicione sua string de conexão do MongoDB:
    ```env
    MONGO_URI=sua_string_de_conexao_do_mongodb
    ```

4. Inicie o servidor:
    ```bash
    node index.js
    ```

## Endpoints da API

### Criar um novo filme

- **URL:** `/`
- **Método:** `POST`
- **Corpo da Requisição:**
    ```json
    {
      "title": "Título do Filme",
      "description": "Descrição do Filme",
      "image_url": "http://exemplo.com/imagem.jpg",
      "trailer_url": "http://exemplo.com/trailer.mp4"
    }
    ```
- **Resposta:**
    ```json
    {
      "_id": "id_unico_do_filme",
      "title": "Título do Filme",
      "description": "Descrição do Filme",
      "image_url": "http://exemplo.com/imagem.jpg",
      "trailer_url": "http://exemplo.com/trailer.mp4",
      "__v": 0
    }
    ```

### Obter todos os filmes

- **URL:** `/films`
- **Método:** `GET`
- **Resposta:**
    ```json
    [
      {
        "_id": "id_unico_do_filme",
        "title": "Título do Filme",
        "description": "Descrição do Filme",
        "image_url": "http://exemplo.com/imagem.jpg",
        "trailer_url": "http://exemplo.com/trailer.mp4",
        "__v": 0
      },
      ...
    ]
    ```

### Atualizar um filme

- **URL:** `/films/:id`
- **Método:** `PUT`
- **Corpo da Requisição:**
    ```json
    {
      "title": "Título Atualizado",
      "description": "Descrição Atualizada",
      "image_url": "http://exemplo.com/imagem_atualizada.jpg",
      "trailer_url": "http://exemplo.com/trailer_atualizado.mp4"
    }
    ```
- **Resposta:**
    ```json
    {
      "_id": "id_unico_do_filme",
      "title": "Título Atualizado",
      "description": "Descrição Atualizada",
      "image_url": "http://exemplo.com/imagem_atualizada.jpg",
      "trailer_url": "http://exemplo.com/trailer_atualizado.mp4",
      "__v": 0
    }
    ```

### Excluir um filme

- **URL:** `/films/:id`
- **Método:** `DELETE`
- **Resposta:**
    ```json
    {
      "_id": "id_unico_do_filme",
      "title": "Título do Filme",
      "description": "Descrição do Filme",
      "image_url": "http://exemplo.com/imagem.jpg",
      "trailer_url": "http://exemplo.com/trailer.mp4",
      "__v": 0
    }
    ```

## Executando a Aplicação

Certifique-se de ter o [Node.js](https://nodejs.org/) e o [MongoDB](https://www.mongodb.com/) instalados em sua máquina.

Para iniciar a aplicação, execute:

```bash
node index.js
