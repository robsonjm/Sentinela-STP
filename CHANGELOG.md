# Changelog

Todas as alterações notáveis neste projeto serão documentadas neste arquivo.

## [0.1.0-beta] - 2026-02-25

### Adicionado
- **Sistema de Autenticação**: Implementado login seguro com Firebase Auth (E-mail/Senha) para acesso à área administrativa.
- **Painel Administrativo de Notícias (`admin-news.html`)**:
  - Criação de novas notícias com título, resumo, categoria, ícone e conteúdo HTML.
  - Edição de notícias existentes com preenchimento automático do formulário.
  - Exclusão de notícias com confirmação de segurança.
  - Listagem em tempo real das publicações.
- **Gerenciamento de Imagens**:
  - Integração com ImgBB para hospedagem de imagens.
  - Ferramenta de corte e redimensionamento (Cropper.js) integrada ao fluxo de upload.
  - Suporte a múltiplos formatos de proporção (16:9, 4:3, 1:1).
  - Gestão inteligente de API Key com modal de configuração.
- **Seletor de Ícones**: Interface visual para escolha de ícones Lucide para as matérias.
- **Navegação Padronizada**: Barra de navegação inferior unificada em todas as páginas (`index.html`, `feed.html`, `painel.html`, `landpage.html`).
- **Página de Login**: Interface dedicada (`login.html`) com validação e redirecionamento.

### Alterado
- **Identidade Visual**: Padronização global de estilos, cores e tipografia baseada no Tailwind CSS.
- **Estrutura de Arquivos**: Organização e limpeza de arquivos obsoletos (`setup-admin.html` removido).
- **Segurança**: Bloqueio de rotas administrativas para usuários não autenticados.

### Corrigido
- Erro de compatibilidade com `prompt()` em ambientes restritos (substituído por modal customizado).
- Conflitos de Git e arquivos duplicados resolvidos.
- Renderização de ícones Lucide dinâmica após atualizações do DOM.

## [0.0.1] - 2024-01-01
- Início do projeto.
