
# CRUD-Node.JS

Este é um projeto simples de CRUD (Create, Read, Update, Delete) usando Node.js, Express, SQLite3 para o backend e React para o frontend.

## Tecnologias Utilizadas

- **Backend**:
  - Node.js
  - Express
  - SQLite3
  - CORS
  - Body-Parser

- **Frontend**:
  - React
  - Axios

## Funcionalidades

- **Criar Produto**: Permite cadastrar um novo produto.
- **Listar Produtos**: Exibe todos os produtos cadastrados com nome e preço.
- **Atualizar Disponibilidade**: Altera a disponibilidade de um produto (disponível ou indisponível).
- **Excluir Produto**: Exclui um produto da lista.
- **Ver Descrição**: Exibe a descrição de um produto em um modal.

## Como Rodar o Projeto

### 1. Configuração do Backend

1.1. **Instalar dependências**:  
No diretório `backend`, execute o seguinte comando para instalar as dependências do backend:

```bash
npm install
```

1.2. **Executar o Backend**:  
Para iniciar o servidor backend, execute:

```bash
npm start
```

O servidor será iniciado em `http://localhost:3001`.

### 2. Configuração do Frontend

2.1. **Instalar dependências**:  
No diretório `frontend`, execute o seguinte comando para instalar as dependências do frontend:

```bash
npm install
```

2.2. **Executar o Frontend**:  
Para iniciar o servidor de desenvolvimento do frontend, execute:

```bash
npm start
```

O servidor será iniciado em `http://localhost:3000`.

### 3. Configuração do Banco de Dados

O projeto usa o SQLite para armazenar os produtos. O banco de dados será criado automaticamente ao iniciar o backend pela primeira vez. O arquivo do banco de dados será gerado em `./products.db`.

## Licença

Este projeto está licenciado sob a licença MIT. Você pode usá-lo, modificá-lo e distribuí-lo livremente.
