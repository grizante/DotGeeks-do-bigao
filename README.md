# DotGeeks

DotGeeks é uma plataforma educacional construída com Node.js, Express e MongoDB, combinando um backend poderoso com um frontend interativo para gerenciar e apresentar cursos online.

## 🌟 Funcionalidades

- **Gerenciamento de Cursos**: Criação, visualização, atualização e exclusão de cursos via API.
- **Frontend Dinâmico**: HTML/CSS/JS para interagir com o backend.
- **Modo Escuro/Claro**: Alternância de tema para uma experiência personalizada.
- **Suporte Multi-idioma**: Idiomas disponíveis: Português e Inglês.
- **Banco de Dados**: MongoDB para armazenar dados de cursos.

## 🛠️ Tecnologias Utilizadas

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [TypeScript](https://www.typescriptlang.org/)

### Frontend
- HTML5, CSS3, JavaScript
- Arquivos estáticos servidos pelo Express.

## 📁 Estrutura do Projeto

```plaintext
DotGeeks/
├── public/               # Arquivos estáticos (CSS, JS, imagens)
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── courses.js
├── src/                  # Código do backend (TypeScript)
│   ├── app.ts            # Arquivo principal do servidor
│   ├── models/
│   │   └── course.ts     # Modelo de Curso (Mongoose)
│   ├── routers/
│   │   └── course.ts     # Rotas para CRUD de Cursos
├── views/                # Páginas HTML
│   ├── index.html        # Página inicial
│   ├── courses.html      # Página de cursos
├── tsconfig.json         # Configurações do TypeScript
├── package.json          # Configurações do npm
├── .env                  # Variáveis de ambiente
