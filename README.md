# Clínica Serena — Landing Page

Landing page institucional da **Clínica Serena**, com foco em apresentação de serviços, equipe, depoimentos e agendamento de consultas.

**Site publicado:** [https://clinicaserena.netlify.app](https://clinicaserena.netlify.app)

> **Repositório público.** Projeto de portfólio / demonstração: textos, nomes, CRMs, telefones, endereços e e-mails são fictícios e não representam uma clínica real. A marca visual foi criada para fins de estudo e apresentação de UI.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) + [Base UI](https://base-ui.com/)
- [Lucide React](https://lucide.dev/) (ícones)
- [Vercel Analytics](https://vercel.com/analytics) (apenas em produção)

Tipografia: **Inter** (texto) e **Fraunces** (títulos), via `next/font`.

## Pré-requisitos

- Node.js 20+
- [Yarn 4](https://yarnpkg.com/) (gerenciador definido no projeto)

## Como rodar

```bash
# Instalar dependências
yarn install

# Servidor de desenvolvimento (http://localhost:3000)
yarn dev

# Build de produção
yarn build

# Servir build localmente
yarn start
```

## Estrutura do projeto

```
app/
  layout.tsx      # Layout global, metadados e fontes
  page.tsx        # Página única (landing)
  globals.css     # Tokens de cor e estilos base
components/
  site-header.tsx # Navegação sticky + menu mobile
  hero.tsx
  specialties.tsx
  about.tsx
  team.tsx
  testimonials.tsx
  booking.tsx
  faq.tsx
  site-footer.tsx
  logo.tsx
  ui/             # Componentes shadcn (ex.: Button)
public/
  images/         # Fotos, logo e assets estáticos
lib/
  utils.ts        # Utilitários (ex.: cn)
```

## Seções da página

| Seção            | Âncora           |
| ---------------- | ---------------- |
| Especialidades   | `#especialidades` |
| A clínica        | `#sobre`         |
| Equipe           | `#equipe`        |
| Depoimentos      | `#depoimentos`   |
| Agendamento      | `#agendar`       |
| Dúvidas (FAQ)    | `#duvidas`       |

## Logo

A marca usa duas variantes em `public/images/`:

- `logo-serena-dark.png` — header (fundo claro)
- `logo-serena-light.png` — footer (fundo escuro)

O componente `components/logo.tsx` recebe `variant="dark"` ou `variant="light"`.

### Favicon e app icon

| Arquivo | Uso |
| ------- | --- |
| `icon-light-32x32.png` | Favicon em tema claro |
| `icon-dark-32x32.png` | Favicon em tema escuro |
| `icon.svg` | Favicon vetorial (180×180, baseado na versão light) |
| `apple-icon.png` | Ícone Apple (180×180, versão light) |
| `icon-light-180.png` / `icon-dark-180.png` | Masters em 180×180 |

## Deploy

Produção: [https://clinicaserena.netlify.app](https://clinicaserena.netlify.app) ([Netlify](https://www.netlify.com/)).

O projeto também é compatível com [Vercel](https://vercel.com/) e outras plataformas que suportam Next.js. Após o deploy, o analytics é carregado automaticamente quando `NODE_ENV === 'production'`.

## Licença

Código aberto sob [MIT](LICENSE).

O campo `"private": true` no `package.json` apenas evita publicação acidental no npm; o repositório Git é **público**.

Imagens em `public/images/` (fotos, logos) são parte do material de demonstração — reutilize o código, mas substitua os assets se for um projeto comercial.
