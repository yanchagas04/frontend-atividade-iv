# Frontend Atividade IV

Este repositório contém o projeto frontend desenvolvido como parte da Atividade IV. Trata-se de uma aplicação web moderna construída com React, TypeScript e diversas bibliotecas para proporcionar uma experiência de usuário fluida e responsiva.

## 📋 Sobre o Projeto

O projeto consiste em uma aplicação frontend que implementa funcionalidades de autenticação e navegação entre páginas, utilizando as melhores práticas de desenvolvimento web moderno. A aplicação está hospedada na Vercel e pode ser acessada através do link: [frontend-atividade-iv.vercel.app](https://frontend-atividade-iv.vercel.app).

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **React** (v19.1.0): Biblioteca JavaScript para construção de interfaces de usuário
- **TypeScript**: Superset tipado de JavaScript que compila para JavaScript puro
- **Vite**: Ferramenta de build que proporciona um ambiente de desenvolvimento mais rápido
- **React Router DOM** (v7.6.0): Biblioteca para gerenciamento de rotas na aplicação
- **React DOM** (v19.1.0): Pacote para manipulação do DOM em aplicações React
- **TailwindCSS** (v4.1.6): Framework CSS utilitário para criação de designs personalizados
- **React Toastify** (v11.0.5): Biblioteca para exibição de notificações toast
- **Dotenv** (v16.5.0): Módulo para carregar variáveis de ambiente a partir de um arquivo .env

## 🔧 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) ou [pnpm](https://pnpm.io/)

## 📥 Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

1. Clone o repositório:
   ```bash
   git clone https://github.com/yanchagas04/frontend-atividade-iv.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd frontend-atividade-iv/atividade-iv-frontend
   ```

3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

4. Crie um arquivo `.env` baseado no exemplo fornecido:
   ```bash
   cp .env.example .env
   ```

5. Configure as variáveis de ambiente no arquivo `.env` conforme necessário.

## 🚀 Executando o Projeto

Para executar o projeto em ambiente de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Isso iniciará o servidor de desenvolvimento Vite. A aplicação estará disponível em `http://localhost:5173` (ou outra porta, caso a 5173 esteja em uso).

### Scripts Disponíveis

- `dev`: Inicia o servidor de desenvolvimento
- `build`: Compila o projeto para produção
- `lint`: Executa a verificação de linting com ESLint
- `preview`: Inicia um servidor local para pré-visualização da build de produção

Exemplo:
```bash
npm run build
npm run preview
```

## 🧪 Estrutura do Projeto

A estrutura de diretórios do projeto está organizada da seguinte forma:

```
atividade-iv-frontend/
├── public/             # Arquivos públicos estáticos
├── src/                # Código-fonte da aplicação
│   ├── components/     # Componentes React reutilizáveis
│   ├── pages/          # Páginas da aplicação
│   ├── routes/         # Configuração de rotas
│   ├── services/       # Serviços e APIs
│   ├── styles/         # Estilos globais e configurações do TailwindCSS
│   ├── types/          # Definições de tipos TypeScript
│   ├── utils/          # Funções utilitárias
│   ├── App.tsx         # Componente principal da aplicação
│   └── main.tsx        # Ponto de entrada da aplicação
├── .env.example        # Exemplo de variáveis de ambiente
├── .gitignore          # Arquivos e diretórios ignorados pelo Git
├── eslint.config.js    # Configuração do ESLint
├── index.html          # Arquivo HTML principal
├── package.json        # Dependências e scripts do projeto
├── tsconfig.json       # Configuração do TypeScript
├── tsconfig.app.json   # Configuração adicional do TypeScript para a aplicação
├── tsconfig.node.json  # Configuração do TypeScript para o ambiente Node
└── vite.config.ts      # Configuração do Vite
```

## 🎥 Demonstração

Uma demonstração em vídeo do projeto está disponível para visualização. Acesse o link abaixo para assistir:

[Vídeo de Demonstração](https://www.youtube.com/watch?v=l4fX0cvsMXg)

## 🌐 Deployment

O projeto está hospedado na Vercel e pode ser acessado através do seguinte link:

[https://frontend-atividade-iv.vercel.app](https://frontend-atividade-iv.vercel.app)

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Autor

Desenvolvido por [Yan Campêlo das Chagas](https://github.com/yanchagas04).

---

Feito com ❤️ e React + TypeScript + Vite
