# Petlov

## Link: (https://www.petlov.vercel.app)

**Conectando corações, mudando vidas!**  
O Petlov é uma plataforma desenvolvida para conectar pessoas a pontos de doação, facilitando a busca por locais onde é possível contribuir com doações para pets. Este projeto utiliza o Cypress para automação de testes end-to-end, garantindo que as funcionalidades essenciais do sistema estejam funcionando conforme o esperado.

## Visão Geral do Projeto

### Objetivo

Petlov visa proporcionar uma experiência eficiente para os usuários que desejam cadastrar e encontrar pontos de doação para animais de estimação. Com uma interface intuitiva, o sistema ajuda a fortalecer a rede de apoio aos animais, possibilitando um futuro onde todos recebam o cuidado e amor necessários.

### Estrutura do Projeto

O projeto contém scripts de teste automatizados usando Cypress para cobrir as principais funcionalidades de cada tela do sistema, garantindo que cada etapa da navegação e ações dos usuários estejam funcionando corretamente.

## Telas e Funcionalidades

### 1. Tela Home

Esta é a tela inicial, onde o usuário conhece a missão do Petlov e é incentivado a cadastrar pontos de doação.

- **Texto de boas-vindas:** "Conectando corações, mudando vidas! Ajudamos pessoas a encontrarem pontos de doação de forma eficiente."
- **Botão para cadastro:** Disponível para que o usuário inicie o cadastro de um novo ponto de doação.

### 2. Tela de Cadastro de Ponto de Doação

Nesta tela, os usuários podem inserir informações detalhadas sobre o ponto de doação que desejam cadastrar.

- **Componentes da Tela:**
  - **Logo:** Identificação visual da plataforma Petlov.
  - **Botão "Voltar para home":** Permite que o usuário retorne à tela inicial.
  - **Formulário de Cadastro:**
    - **Nome do ponto de doação**
    - **E-mail**
    - **Endereço:** Campos específicos para **CEP**, **Rua**, **Número**, **Complemento**, **Bairro**, e **Cidade/UF**.
    - **Tipos de pets disponíveis para doação:** Opções para **Cachorros** e **Gatos**.
  - **Botão Cadastrar:** Envia os dados para concluir o cadastro do ponto de doação.

### 3. Tela de Confirmação de Cadastro

Após o envio bem-sucedido do formulário, o usuário é direcionado a uma tela de confirmação, onde é informado do sucesso do cadastro.

- **Mensagem de Confirmação:** "Você fez a diferença! Seu ponto de doação foi adicionado com sucesso. Juntos, podemos criar um mundo onde todos os animais recebam o amor e cuidado que merecem."
- **Botão "Voltar":** Retorna o usuário para a tela inicial.

## Testes Automatizados

### Framework e Ferramentas

Este projeto utiliza o [Cypress](https://www.cypress.io/) para testes end-to-end das funcionalidades descritas acima.

### Estrutura de Testes

Os testes cobrem os seguintes cenários principais:

1. **Tela Home:**
   - Validação da exibição do texto de boas-vindas.
   - Teste de navegação para a tela de cadastro ao clicar no botão de cadastro.

2. **Tela de Cadastro:**
   - Verificação da presença dos campos obrigatórios (Nome, E-mail, Endereço).
   - Teste de preenchimento do formulário com dados válidos e inválidos.
   - Teste do envio bem-sucedido do formulário e redirecionamento para a tela de confirmação.

3. **Tela de Confirmação de Cadastro:**
   - Validação da mensagem de sucesso exibida.
   - Teste do botão "Voltar" para verificar se redireciona à tela inicial.

## Como Executar os Testes

### Pré-requisitos

- Node.js e npm instalados.
- Cypress instalado no projeto.

### Passos para Execução

1. Clone o repositório do projeto.
2. Navegue até o diretório do projeto.
3. Instale as dependências usando:
