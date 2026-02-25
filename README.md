# Sentinela STP 🛡️ (BETA)

> **Versão Atual:** 0.1.0-beta  
> **Status:** Em desenvolvimento ativo. Funcionalidades podem sofrer alterações.

O **Sentinela STP** é uma aplicação web focada em monitoramento de segurança, denúncias anônimas e feed de notícias para a comunidade.

## 🚀 Funcionalidades Principais

- **Feed de Notícias**: Acompanhe as últimas ocorrências e atualizações de segurança.
- **Painel Administrativo**: Gestão completa de notícias (criar, editar, excluir) com suporte a upload de imagens.
- **Autenticação Segura**: Acesso restrito para administradores via Firebase Auth.
- **Upload de Imagens**: Integração com ImgBB e editor de imagens (corte/redimensionamento) embutido.
- **Design Responsivo**: Interface moderna e adaptável para dispositivos móveis e desktop.

## 🛠️ Tecnologias Utilizadas

- **Frontend**: HTML5, Tailwind CSS (via CDN), JavaScript (ES6+).
- **Backend/BaaS**: Google Firebase (Firestore, Authentication).
- **Imagens**: ImgBB API.
- **Ícones**: Lucide Icons.
- **Bibliotecas**: Cropper.js (edição de imagens).

## 📂 Estrutura do Projeto

- `index.html`: Página inicial com menu principal.
- `feed.html`: Feed de notícias para o público.
- `painel.html`: Dashboard com estatísticas (em desenvolvimento).
- `landpage.html`: Página institucional/sobre.
- `admin-news.html`: Área restrita para gestão de conteúdo.
- `login.html`: Página de autenticação.
- `artigo.html`: Template para visualização de notícias individuais.
- `CHANGELOG.md`: Histórico de versões e alterações.
- `version.json`: Controle de versão do sistema.

## 🚦 Como Executar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/robsonjm/Sentinela-STP.git
   ```
2. Navegue até a pasta:
   ```bash
   cd Sentinela-STP
   ```
3. Inicie um servidor local (ex: Python):
   ```bash
   python -m http.server 8000
   ```
4. Acesse `http://localhost:8000` no navegador.

## ⚠️ Nota de Versão Beta

Este software está em fase **BETA**. Isso significa que:
- Pode conter bugs ou comportamentos inesperados.
- A estrutura de dados pode mudar sem aviso prévio.
- O feedback é essencial para melhorias.

---
Desenvolvido com ❤️ para a segurança da comunidade.
