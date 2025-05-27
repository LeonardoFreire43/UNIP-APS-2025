# APS-UNIP – Sistema de Comunicação Cliente/Servidor

## 5. Fundamentos Teóricos da Comunicação de Dados em Rede

Este projeto busca demonstrar conceitos fundamentais de comunicação de dados em redes, utilizando uma arquitetura cliente/servidor. Os principais fundamentos envolvidos são:

- **Redes**: Interligação de computadores para compartilhamento de dados e recursos, possibilitando a comunicação entre cliente e servidor.
- **Banco de Dados**: O sistema utiliza um banco de dados externo, **Supabase**, para persistência de dados e autenticação. Essa escolha permite simular um ambiente profissional e realista, proporcionando armazenamento seguro e comunicação eficiente entre frontend e backend.
- **Arquitetura Cliente/Servidor**: O sistema é dividido entre um "servidor" (executando localmente, responsável pelos dados e integração com o Supabase) e múltiplos clientes que consomem e enviam informações.
- **Ferramentas de Desenvolvimento**: 
  - O frontend foi desenvolvido com **React** (utilizando Vite para build e desenvolvimento rápido) e **Tailwind CSS** para estilização ágil e responsiva.
  - Todo o sistema foi desenvolvido em **TypeScript**.

---

## 6. Plano de Desenvolvimento da Aplicação (Cronograma e Responsabilidades)

| Período              | Atividade                                 | Responsável                          |
|----------------------|-------------------------------------------|--------------------------------------|
| Semana 1             | Definição da arquitetura e requisitos     | Leonardo & Kelly                     |
| Semana 2             | Estruturação do frontend e lógica geral   | Leonardo                             |
| Semana 3             | Desenvolvimento das telas e interatividade| Kelly                                |
| Semana 4             | Desenvolvimento do backend e integração   | Leonardo & Breno Rafael              |
| Semana 5             | Integração, testes, ajustes finais e documentação | Leonardo, Kelly & Breno Rafael |

- **Leonardo**: Responsável pela estruturação do site, lógica do backend (incluindo integração com Supabase) e configuração geral do projeto.
- **Breno Rafael**: Responsável pelo desenvolvimento do backend e integração com o Supabase.
- **Kelly**: Responsável pelo frontend, criação das telas e interatividade visual.

---

## 7. Projeto do Programa

### Diagrama da Arquitetura

```
+-------------------+         +-------------------+         +-------------------+
|   Cliente 1       |         |   Servidor        |         |   Cliente 2       |
| (React/Vite)      | <-----> | (Node + Supabase) | <-----> | (React/Vite)      |
+-------------------+         +-------------------+         +-------------------+
```

### Descrição dos Módulos

- **Frontend (React + Vite + Tailwind CSS)**
  - Interface gráfica com usuário.
  - Gerencia o envio e recebimento de mensagens, simulação de envio de e-mails e interação entre usuários.
- **Backend (Node + Supabase)**
  - Responsável pela autenticação de usuários, persistência de mensagens e manipulação de dados em tempo real via Supabase.

### Prototipação das Telas

- Tela de Login/Identificação do Usuário.
- Tela Principal de Comunicação (mensagens em tempo real, simulação).
- Simulação de envio de e-mail (demonstração).

O fundo das telas utiliza cores e imagens que remetem ao controle ambiental definido no projeto.

---

## 8. Relatório – Linhas de Código

O projeto está organizado nas seguintes linguagens e arquivos principais:

- **Frontend:** 
  - `src/` (pasta com os arquivos `.tsx` do React, estilos Tailwind e lógica em TypeScript)
  - Arquivos principais: `App.tsx`, `main.tsx`, componentes em `src/components/`
- **Backend:**
  - `server/` (pasta opcional caso queira visualizar integrações específicas)
  - Configurações e integrações com o Supabase

Cada arquivo está devidamente comentado para auxiliar no entendimento do fluxo e das funcionalidades implementadas.

---

## Como Clonar e Executar o Projeto

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/LeonardoFreire43/APS-UNIP.git
   ```

2. **Acesse a pasta do projeto:**
   ```sh
   cd APS-UNIP
   ```

3. **Instale as dependências (é necessário ter o Node.js instalado):**
   ```sh
   npm install
   ```

4. **Configure o Supabase:**
   - Crie um projeto no [Supabase](https://supabase.com/).
   - Configure as variáveis de ambiente com as chaves do seu projeto Supabase conforme o arquivo `.env.example`.

5. **Execute o projeto na sua máquina local:**
   ```sh
   npm run dev
   ```

6. **Abra o endereço exibido no terminal (geralmente http://localhost:5173) em dois navegadores diferentes (ou em dois computadores distintos na mesma rede) para simular múltiplos clientes.**

---

## Desenvolvedores

- **Leonardo Freire**
  - Responsável pela estrutura do site e lógica de dados/back-end.
- **Breno Rafael**
  - Responsável pelo desenvolvimento do back-end e integração com Supabase.
- **Kelly**
  - Responsável pelo frontend e interface visual.

---

> Dúvidas ou sugestões? Entre em contato com os desenvolvedores pelo GitHub!
>>>>>>> 63ddc5ebf1faccb1a1ed952ff74cca4d66f6f25b
