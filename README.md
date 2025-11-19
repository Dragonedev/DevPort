# DevPort - Plataforma de Portfólios para Desenvolvedores

## 🌟 Visão Geral do Projeto

**DevPort** é uma plataforma front-end projetada para ajudar desenvolvedores a criar e gerenciar seus portfólios profissionais. O projeto inclui uma página principal (landing page), uma página de login e um template detalhado de portfólio para um desenvolvedor fictício.

O objetivo principal é oferecer uma base visualmente atraente e funcional para a apresentação de habilidades, formação e projetos.

---

## 🚀 Estrutura dos Arquivos

O projeto é estruturado nos seguintes arquivos:

| Tipo | Arquivo | Descrição |
| :--- | :--- | :--- |
| **HTML** | `index.html` | A página principal (landing page) da plataforma. |
| **HTML** | `login.html` | A página de login para acesso de usuários. |
| **HTML** | `portifolioPage.html` | O template de portfólio detalhado (Exemplo: Miguel Antonio). |
| **HTML** | `footer.html` | Componente de rodapé que lista empresas e contatos. |
| **CSS** | `indexStyle.css` | Estilos para a página principal. |
| **CSS** | `loginStyle.css` | Estilos para a página de login e seus carrosséis. |
| **CSS** | `estiloPortifolio.css` | Estilos para o template de portfólio, incluindo responsividade. |
| **CSS** | `footer.css` | Estilos para o componente de rodapé. |
| **JS** | `loginScript.js` | Lógica de autenticação de usuários e efeitos de scroll na página de login. |
| **JS** | `scriptPortifolio.js` | Lógica para o menu de navegação responsivo do portfólio. |
| **JS** | `footer.js` | Utiliza Fetch API para injetar `footer.html` dinamicamente em outras páginas. |

---

## 🛠️ Tecnologias Utilizadas

Este projeto é puramente front-end, utilizando:

* **HTML5:** Estrutura semântica das páginas.
* **CSS3:** Estilização e Design Responsivo.
* **JavaScript:** Interatividade, lógica de login e injeção de componentes (SPA like behavior).
* **Fontes:** 'Poppins' e 'Montserrat'.

---

## 🎨 Destaques do Design e Estilização

O projeto utiliza um design **claro (light theme)** e profissional, focado na usabilidade e responsividade:

| Arquivo CSS | Foco Principal |
| :--- | :--- |
| **`indexStyle.css`** | Layout principal, carrossel de perfis em destaque e barra de busca. |
| **`loginStyle.css`** | Efeitos visuais de rolagem (assinatura e fotos) e design do formulário de autenticação. |
| **`estiloPortifolio.css`** | Design responsivo complexo do template de portfólio, incluindo o menu lateral adaptável (hambúrguer) e a exibição de habilidades. |
| **`footer.css`** | Estilização de um rodapé rico em conteúdo (parceiros, certificações, contato) com layout flexível para todos os dispositivos. |

---

## ☕ Destaques da Interatividade (JavaScript)

Os scripts adicionam as seguintes funcionalidades:

1.  **Login Control (`loginScript.js`):**
    * Verificação básica de e-mail e senha.
    * Exibição de mensagens de erro específicas (e-mail não digitado, senha incorreta, e-mail não cadastrado).
    * Efeitos de scroll visual no cabeçalho.
2.  **Menu Responsivo (`scriptPortifolio.js`):**
    * Alternância entre os ícones **☰** e **X** no portfólio.
    * Exibição e ocultação do menu de navegação lateral em dispositivos móveis.
3.  **Componentização (`footer.js`):**
    * Carregamento assíncrono do componente `footer.html` nas páginas `index.html` e `login.html` usando a **Fetch API**.

---

## ⚙️ Como Executar o Projeto Localmente

1.  **Clone o repositório:**
    ```bash
    git clone [https://www.youtube.com/watch?v=X49Wz3icO3E](https://www.youtube.com/watch?v=X49Wz3icO3E)
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd DevPort
    ```
3.  **Abra o arquivo:**
    * Abra o arquivo `index.html` diretamente no seu navegador web.
    * Como alternativa, você pode usar uma extensão de servidor local (como o "Live Server" no VS Code) para garantir que o script `footer.js` funcione corretamente.
