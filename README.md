# README - Projeto de Lista de Tarefas com Firebase

Bem-vindo ao meu projeto no GitHub! Neste repositório, você encontrará um aplicativo de Lista de Tarefas com integração ao Firebase. Este aplicativo permite aos usuários criar, editar, excluir tarefas e também realizar autenticação para acessar a aba principal. Abaixo, vou explicar como configurar, executar e contribuir para este projeto.

## Visão Geral

Este projeto foi desenvolvido com o objetivo de criar uma aplicação de Lista de Tarefas que utiliza o Firebase como banco de dados em tempo real para armazenar e gerenciar as tarefas. Além disso, oferece funcionalidades de autenticação para que os usuários possam criar contas e fazer login para acessar suas listas de tarefas personalizadas.

## Funcionalidades

- **Cadastro e Login de Usuários**: Os usuários podem criar contas e fazer login para acessar suas listas de tarefas.

- **Gerenciamento de Tarefas**: Os usuários podem adicionar, editar e excluir tarefas da sua lista pessoal.

## Pré-requisitos

Antes de começar, certifique-se de que você tenha as seguintes ferramentas instaladas:

- Node.js: [Instalação do Node.js](https://nodejs.org/)
- Firebase: [Console Firebase](https://console.firebase.google.com/)

## Configuração

1. Clone este repositório para o seu ambiente local:

   ```bash
   git clone https://github.com/seu-usuario/seu-projeto.git
   cd seu-projeto
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

3. Configure as credenciais do Firebase:
   
   - Acesse o [Console Firebase](https://console.firebase.google.com/) e crie um novo projeto.
   - No projeto Firebase, vá para Configurações e copie as configurações do Firebase SDK para a seção de configuração no código-fonte do seu projeto.

4. Configure as variáveis de ambiente: Crie um arquivo `.env` na raiz do projeto e defina as variáveis de ambiente necessárias, como a configuração do Firebase:

   ```
   REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY
   REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
   REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
   ```

5. Inicie o aplicativo:

   ```bash
   npm start
   ```

Agora, o aplicativo deve estar em execução localmente em `http://localhost:3000`.

## Contribuindo

Se você deseja contribuir para este projeto, siga estas etapas:

1. Faça um fork deste repositório.

2. Crie uma branch para a sua feature:

   ```bash
   git checkout -b minha-feature
   ```

3. Faça as alterações necessárias e adicione os commits:

   ```bash
   git add .
   git commit -m "Adicionando minha feature"
   ```

4. Envie as alterações para o seu repositório no GitHub:

   ```bash
   git push origin minha-feature
   ```

5. Crie uma solicitação de pull (Pull Request) para este repositório.

Agradeço por contribuir!

## Autor

[Seu Nome](https://github.com/seu-usuario)

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
