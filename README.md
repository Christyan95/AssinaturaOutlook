# 📧 Gerador de Assinaturas Corporativo (Outlook Signature Hub)

> **Versão 1.0.0** | Desenvolvido por **Christyan Silva**

Bem-vindo ao **Outlook Signature Hub**, uma plataforma multi-tenant moderna e sofisticada desenvolvida para padronizar e gerar assinaturas de e-mail compatíveis com o Microsoft Outlook para múltiplas empresas.

O projeto foi construído com foco em **design premium**, **experiência do usuário (UX)** fluida e **compatibilidade técnica** rigorosa com clientes de e-mail.

---

## 🚀 Sobre o Projeto

Este aplicativo web substitui geradores de assinatura antigos e manuais por uma interface centralizada e elegante. Ele atua como um "Hub" onde o colaborador seleciona sua empresa e é direcionado para um formulário específico da marca.

### Principais Funcionalidades:

*   **🏢 Arquitetura Multi-Tenant:** Suporte nativo para múltiplas empresas (atualmente **HortSoy** e **Tivor**) com identidades visuais completamente distintas.
*   **🎨 Design Premium & Responsivo:** Interface construída com **Tailwind CSS v4** e animações suaves via **Framer Motion**.
*   **⚡ Preview em Tempo Real:** Visualize sua assinatura enquanto digita.
*   **📋 Cópia Compatível com Outlook:** O botão "Copiar Assinatura" gera um HTML rico específico (tabelas, styles inline) que garante que a assinatura não quebre ao ser colada no Outlook.
*   **🎭 Temas Dinâmicos:**
    *   **HortSoy:** Tema Agronegócio (Verde `#075000` + Folha).
    *   **Tivor:** Tema Contabilidade/Tech (Azul `#065ECD` + Calculadora).
*   **📱 Mascaramento de Dados:** Formatação automática para campos como telefone/celular.

---

## 🛠️ Tecnologias Utilizadas

O projeto utiliza a stack mais moderna do ecossistema React:

*   **[Next.js 16](https://nextjs.org/)** (App Router) - Framework React de alta performance.
*   **[React 19](https://react.dev/)** - Biblioteca para construção de interfaces.
*   **[Tailwind CSS v4](https://tailwindcss.com/)** - Estilização utilitária e moderna.
*   **[Framer Motion](https://www.framer.com/motion/)** - Biblioteca de animações complexas e gestos.
*   **[Lucide React](https://lucide.dev/)** - Ícones vetoriais leves e consistentes.
*   **[Clsx & Tailwind-Merge](https://github.com/dcastil/tailwind-merge)** - Utiliários para classes condicionais.
*   **TypeScript** - Tipagem estática para maior robustez do código.

---

## 📦 Instalação e Execução

### Pré-requisitos
*   **Node.js** (versão 18 ou superior recomendada)
*   **npm** ou **yarn**

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/assinatura-outlook.git
    cd assinatura-outlook
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

4.  **Acesse no navegador:**
    Abra [http://localhost:3000](http://localhost:3000) para ver o Hub de Seleção.

---

## 📂 Estrutura do Projeto

A estrutura de pastas segue o padrão do **Next.js App Router**:

```
.
├── public/                 # Arquivos estáticos (imagens, logos, fundos)
│   └── assets/             # Assets organizados por empresa
├── src/
│   ├── app/                # Rotas da aplicação
│   │   ├── layout.tsx      # Layout global (fontes, metadados)
│   │   ├── page.tsx        # Página Inicial (Hub de Seleção)
│   │   ├── globals.css     # Estilos globais e diretivas do Tailwind
│   │   ├── hortsoy/        # Rota da empresa HortSoy
│   │   │   └── page.tsx    # Gerador específico HortSoy
│   │   └── tivor/          # Rota da empresa Tivor
│   │       └── page.tsx    # Gerador específico Tivor
│   └── components/         # Componentes Reutilizáveis
│       └── CompanyCard.tsx # Card animado da página inicial
├── message.txt             # Histórico ou anotações (se houver)
├── next.config.ts          # Configurações do Next.js
├── package.json            # Dependências e scripts
└── README.md               # Documentação do projeto
```

---

## 🎨 Como Adicionar Nova Empresa

Para adicionar uma nova empresa ao Hub, siga estes passos:

1.  **Adicione os Assets:** Coloque o logo e o fundo da nova empresa na pasta `public/assets`.
2.  **Crie a Rota:** Crie uma nova pasta em `src/app/nova-empresa` e adicione um arquivo `page.tsx`.
    *   Dica: Copie o conteúdo de `src/app/tivor/page.tsx` e ajuste as cores, textos e logos.
3.  **Atualize o Hub:** No arquivo `src/app/page.tsx`, adicione a nova empresa ao array `companies`:
    ```typescript
    {
      name: "Nova Empresa",
      slug: "nova-empresa",
      description: "Descrição impactante da empresa.",
      themeColor: "#COR_HEX",
      logo: ( ...código do logo... ),
    }
    ```

---

## 📝 Licença e Direitos

Este projeto é de uso privado e corporativo.
Copyright © 2026 **Christyan Silva**. Todos os direitos reservados.

---

Developed with ❤️ by Christyan Silva
