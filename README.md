# Estoque de Prompts (amostra)

Site de biblioteca de prompts para criativos com IA: o visitante navega por categoria, copia o prompt pronto e baixa vídeos de referência. Existe um painel de administração para cadastrar e editar o conteúdo.

> Esta é uma **versão de demonstração** do projeto. O banco real de prompts, as chaves e o histórico ficam em repositório privado. Aqui há só 3 prompts de exemplo.

## Recursos
- Filtro por categoria (UGC, POV, vídeos com copy, motion control, criação de modelo)
- Cópia do prompt com um clique e dicas de uso por item
- Vídeos de referência com download (Supabase Storage)
- Painel admin com login por e-mail e senha (Supabase Auth); cadastros comuns não têm acesso de admin

## Tecnologias
HTML, CSS e JavaScript puros · Supabase (banco, autenticação e arquivos) · Vercel (hospedagem)

## Estrutura
| Arquivo | Função |
|---|---|
| `index.html` | Vitrine pública |
| `admin.html` | Painel de administração |
| `config.example.js` | Modelo da conexão com o Supabase (`config.js` traz só valores de exemplo) |
| `prompts.js` | Exemplos locais de prompts |
| `vercel.json` | Configuração de hospedagem |

## Como rodar
1. Crie um projeto no Supabase com a tabela `prompts` e o bucket público `midia`.
2. Coloque a URL e a chave *publishable* em `config.js`.
3. Abra `index.html` ou publique a pasta na Vercel.

## Segurança
Só a chave publishable (pública por desenho) é usada no navegador. O acesso de escrita é controlado por regras de linha (RLS) no Supabase.
