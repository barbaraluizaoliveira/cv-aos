# 📄 API Currículo Express

API REST desenvolvida para a atividade de AOS (Arquitetura de Objetos e Sistemas) na UNICAP. O projeto consiste em um sistema de gerenciamento de currículos, permitindo o CRUD completo de pessoas, suas experiências profissionais e formações acadêmicas.

## 🚀 Tecnologias Utilizadas

* **Node.js** & **Express** (Framework Backend)
* **PostgreSQL** (Banco de dados relacional)
* **NeonDB** (Hospedagem do Banco de Dados em nuvem)
* **Vercel** (Hospedagem da API)
* **Postman** (Testes de endpoints)

## 🛠️ Estrutura do Projeto

O projeto segue o padrão MVC (Model-View-Controller) simplificado para melhor organização:

* `src/config`: Configuração de conexão com o banco de dados.
* `src/controllers`: Lógica de negócio e comandos SQL.
* `src/routes`: Definição dos endpoints da API.
* `server.js`: Ponto de entrada da aplicação.

## 📊 Modelagem do Banco de Dados

O banco de dados possui três entidades principais com relacionamentos:
1.  **Pessoas**: Dados básicos de contato.
2.  **Experiencias**: Relacionada a uma pessoa (1:N).
3.  **Formacoes**: Relacionada a uma pessoa (1:N).

## 🛣️ Endpoints Principais

### Pessoas
* `GET /pessoas` - Lista todos os currículos.
* `POST /pessoas` - Cadastra uma nova pessoa.
* `PUT /pessoas/:id` - Atualiza dados de uma pessoa.
* `DELETE /pessoas/:id` - Remove uma pessoa e seus vínculos.

### Experiências e Formações
* `POST /experiencias` - Adiciona experiência a um currículo.
* `GET /experiencias/:pessoa_id` - Lista experiências de uma pessoa específica.
* `POST /formacoes` - Adiciona formação a um currículo.
* `GET /formacoes/:pessoa_id` - Lista formações de uma pessoa específica.

## 💻 Como rodar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
