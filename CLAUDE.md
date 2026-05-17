# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Visão Geral do Projeto

Manna Delivery é uma aplicação web multi-tenant de delivery/pedidos para restaurantes brasileiros. Cada tenant (restaurante) é acessado pela rota dinâmica `/<tenant-slug>`. O código usa nomes de variáveis, comentários e textos de UI em português.

## Comandos

- `npm run dev` — Iniciar servidor de desenvolvimento
- `npm run build` — Build de produção
- `npm run lint` — ESLint
- Não há framework de testes configurado.

## Arquitetura

**Framework:** Next.js 14 (Pages Router) com TypeScript.

**Estrutura de rotas:**
- `pages/index.tsx` — Página inicial de seleção de tenant (lista todos os restaurantes)
- `pages/[tenant]/` — Todas as páginas com escopo de tenant (carrinho, checkout, login, cadastro, pedidos, endereços, detalhes do produto)
- `pages/[tenant]/product/[id].tsx` — Detalhe do produto
- `pages/[tenant]/order/[orderid].tsx` — Detalhe do pedido
- `pages/[tenant]/address/[addressid].tsx` — Edição de endereço

**Gerenciamento de estado:** Zustand store (`src/store/TenantStore.ts`) armazena o tenant atual, usuário, token, endereço de entrega, preço do frete e comanda.

**Busca de dados:** React Query com hooks customizados em `src/services/hooks/` (useTenant, useProduto, useGrupo, useOrders, useAddress, useToken). O query client está configurado em `src/services/queryClient.ts`.

**API:** Instância única do Axios (`src/services/api.ts`) apontando para `NEXT_PUBLIC_URL_API_DEVELOPMENT` ou `NEXT_PUBLIC_URL_API_PRODUCTION` dependendo do `NEXT_PUBLIC_AMBIENTE`.

**Estilização:** CSS Modules (`styles/*.module.css`) + componentes MUI v5. SVGs são importados como componentes React via `@svgr/webpack`.

**Utilitários:** `libs/` contém hooks para formatação (moeda BRL, datas), toasts e utils gerais.

## Variáveis de Ambiente

Definidas em `src/types/environment.d.ts`:
- `NEXT_PUBLIC_AMBIENTE` — `"development"` ou `"production"` (controla URL da API e recursos de debug)
- `NEXT_PUBLIC_URL_API_DEVELOPMENT` / `NEXT_PUBLIC_URL_API_PRODUCTION` — URLs base da API backend
- `NEXT_PUBLIC_GOOGLE_ANALYTICS` — ID de rastreamento do GA (ativo apenas em produção)

## Padrões Importantes

- Prettier configurado no `package.json` com `printWidth: 130`.
- Imagens do Next.js configuradas para domínios remotos `mannatech.com.br`.
- Em modo development, slugs de teste (`manna_glauberth`, `teste`) aparecem na home, mas ficam ocultos em produção.
- Mudanças de estado do Zustand são logadas no console apenas em modo development.
