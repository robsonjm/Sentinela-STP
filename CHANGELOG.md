# Changelog

Todas as alterações notáveis neste projeto serão documentadas neste arquivo.

## [0.2.2-beta] - 2026-02-25

### Adicionado
- **Mapa Interativo (painel.html)**:
  - **Categorização Visual**: Marcadores agora têm cores distintas para cada tipo de evento:
    - 🔴 **Ruído Crítico (>=85dB)**: Vermelho
    - 🟠 **Quebra de Veículo**: Laranja
    - 🟣 **Atraso Crítico**: Roxo
    - 🟡 **Lotação Excessiva**: Amarelo
    - 🔵 **Normal/Outros**: Azul
  - **Estilo Balão de HQ**: Relatos de usuários (comentários sem incidentes técnicos críticos) são exibidos como balões de fala saindo de um ícone de ônibus, destacando a voz do cidadão no mapa.

## [0.2.1-beta] - 2026-02-25

### Alterado
- **Layout Index**: Área central dividida (aprox. 55/45) entre Medidor de Ruído e Área de Relato.
- **Relato de Usuário**: Restaurado campo de texto para comentários e botão dedicado "Enviar Relato" na tela principal.
- **Medidor**: Ajustado tamanho da fonte e botão de ação para acomodar o novo layout dividido.

## [0.2.0-beta] - 2026-02-25

### Adicionado
- **Interface Otimizada (index.html)**: Redesenho completo para caber em uma única tela (100dvh), eliminando a necessidade de rolagem durante o uso.
- **Controle de Permissões**: Modal informativo obrigatório no primeiro acesso solicitando ativação de GPS e Microfone para funcionamento correto.
- **Filtros no Feed**: Adicionada funcionalidade de filtrar postagens por Zona (Norte, Sul, Leste, Oeste, Centro) e Linha de ônibus.
- **Ordenação**: Feed agora exibe postagens em ordem cronológica inversa (mais recentes primeiro).

### Alterado
- **Botão Principal**: Renomeado de "Iniciar Fiscalização" para "MEDIR RUÍDO" e movido para destaque central junto ao medidor de decibéis.
- **Layout de Identificação**: Seleção de linha, prefixo e zona compactada para economizar espaço.
- **Sintomas e Eventos**: Botões reorganizados para acesso rápido sem ocupar muito espaço vertical.

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
