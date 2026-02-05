# 🌿 HortSoy | Gerador de Assinatura Corporativa (v7.1)

![License](https://img.shields.io/badge/license-Proprietary-red)
![Version](https://img.shields.io/badge/version-7.1-green)
![Status](https://img.shields.io/badge/status-Stable-blue)

Este projeto é uma ferramenta web moderna e intuitiva desenvolvida para padronizar as assinaturas de e-mail dos colaboradores da **HortSoy**. Utilizando um design visual atraente com efeito **Glassmorphism**, a aplicação permite que os usuários gerem e copiem suas assinaturas formatadas especificamente para compatibilidade com o Microsoft Outlook.

## 📋 Funcionalidades

-   **Visualização em Tempo Real**: A assinatura é montada instantaneamente enquanto o usuário digita seus dados.
-   **Compatibilidade com Outlook**: A saída HTML da assinatura é rigorosamente otimizada (Table-Based Layout) para garantir que a formatação (cores, logos e alinhamentos) seja preservada ao ser colada no Outlook.
-   **Design Premium (Glassmorphism)**: Interface moderna com fundos translúcidos, desfoque (blur) e sombras suaves.
-   **Cópia Inteligente**: Botão "Copiar Assinatura" que seleciona e copia apenas o conteúdo renderizado necessário, evitando estilos residuais.
-   **Acesso Rápido às Configurações**: Link direto para a página de configuração de assinaturas do Outlook Web.
-   **Mascaramento Automático**: Formatação automática para campos de telefone/celular.
-   **Feedback Visual**: Notificações (Toast) para confirmar ações como a cópia bem-sucedida.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído seguindo princípios de **Clean Code** e separação de responsabilidades:

-   **HTML5**: Estrutura semântica para a interface e estrutura de tabelas legadas para compatibilidade de e-mail.
-   **CSS3**:
    -   Variáveis CSS (`:root`) para fácil manutenção de temas.
    -   efeitos de `backdrop-filter` para o vidro fosco.
    -   Layout responsivo com `CSS Grid` e `Flexbox`.
-   **JavaScript (Vanilla)**:
    -   Manipulação do DOM para atualizações em tempo real.
    -   Lógica de cópia para a área de transferência (`Clipboard API` / `execCommand`).
    -   Máscaras de input com Regex.

## 📂 Estrutura do Projeto

```text
AssinaturaOutlook/
│
├── assets/             # Recursos estáticos
│   ├── icone.svg       # Favicon
│   └── Soja.png        # Imagem de fundo de alta resolução
│
├── css/                # Folhas de estilo
│   └── style.css       # Estilos globais e tema Glassmorphism
│
├── js/                 # Lógica da aplicação
│   └── script.js       # Scripts de atualização e cópia
│
└── index.html          # Ponto de entrada da aplicação
```

## 🚀 Como Usar

1.  **Acesse a Ferramenta**: Abra o arquivo `index.html` em seu navegador.
2.  **Preencha seus Dados**:
    -   Escolha a **Saudação Inicial** (ex: Atenciosamente).
    -   Insira seu **Nome Completo**.
    -   Digite seu **Cargo / Função**.
    -   Selecione sua **Unidade Operacional**.
    -   Informe seu **Celular/WhatsApp** (a formatação é automática).
3.  **Verifique a Assinatura**: Confira o resultado na janela de visualização à direita (ou abaixo, em mobile).
4.  **Copie**: Clique no botão verde **"📋 COPIAR ASSINATURA"**.
5.  **Configure no Outlook**:
    -   Clique no botão **"⚙️ CONFIGURAR ASSINATURA"** para abrir o Outlook Web.
    -   Ou vá manualmente nas configurações do seu Outlook Desktop.
    -   Cole (Ctrl+V) a assinatura na caixa de edição.

## 🎨 Detalhes de Design

O projeto adota uma estética natural ligada ao agronegócio:
-   **Paleta de Cores**: Tons de Verde (#2ecc71, #0d8c00) e Branco.
-   **Tipografia**: Fonte *Inter* para a interface e *Arial/Segoe UI* para a assinatura (segurança de fonte de e-mail).
-   **Background**: Imagem temática de plantação de soja.

## 🔧 Instalação e Desenvolvimento

Para rodar o projeto localmente para desenvolvimento:

1.  Clone o repositório ou baixe a pasta.
2.  Certifique-se de que a estrutura de pastas (`assets`, `css`, `js`) esteja correta.
3.  Abra o `index.html` diretamente no navegador ou use uma extensão como *Live Server* no VS Code.

---

**Desenvolvido por Christyan Silva** - *2026*
