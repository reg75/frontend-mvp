# Edify

## Overview

Edify is an educational app aimed at schools. In the UK, schools have *pastoral time*, which is intended to develop students’ emotional and social skills. Finding good resources for pastoral time can be time-consuming. Edify offers schools a full year of downloadable pastoral content, organised around a coherent set of **12 virtues**.

The project presented here is a **frontend-only MVP**, with **dummy authorisation** and a **simulated backend using local JSON**.

---

## Features

- Browse curated pastoral resources  
- Filter resources by virtue  
- Download weekly resource bundles (dummy)  
- Dummy login to access protected pages  
- Edit account details (frontend-only)

---

## Tech stack

- React (Vite)  
- React Router  
- CSS  
- JSON  

---

## Project structure

- `pages/` – route-level components  
- `components/` – reusable UI elements  
- `services/` – fake API layer (JSON and simulated loading delay)  
- `data/` – static JSON payloads  

---

## Routing and navigation

- Features public and protected routes. Attempts to access protected routes while logged out will redirect to the login page.  
- Parameterised routes to enable category filtering  
- 404 fallback route for invalid URLs  
- Navigation hooks used:
  - `useNavigate`
  - `useParams`
  - `useLocation`

---

## Simulated backend & dummy authentication

- Data is loaded from local JSON  
- Artificial delay is used to demonstrate loading states  
- Authentication is simulated  
- Account edits are stored in local state only  

---

## Responsiveness & usability

- Responsive layout for mobile and tablet devices  
- Wrapping header and navigation on small screens  
- User feedback components (e.g. alerts, loaders)

---

# Edify (Português – Brasil)

## Visão geral

Edify é um aplicativo educacional voltado para escolas. No Reino Unido, as escolas possuem o chamado *tempo pastoral*, cujo objetivo é desenvolver as habilidades emocionais e sociais dos alunos. Encontrar bons recursos para esse momento pode ser demorado. O Edify oferece às escolas um ano completo de conteúdo pastoral para download, organizado em torno de um conjunto coerente de **12 virtudes**.

O projeto apresentado aqui é um **MVP apenas de front-end**, com **autenticação fictícia** e um **backend simulado utilizando arquivos JSON locais**.

---

## Funcionalidades

- Navegação por recursos pastorais selecionados  
- Filtro de recursos por virtude  
- Download de pacotes semanais de recursos (fictício)  
- Login simulado para acesso a páginas protegidas  
- Edição de dados da conta (apenas front-end)

---

## Tecnologias utilizadas

- React (Vite)  
- React Router  
- CSS  
- JSON  

---

## Estrutura do projeto

- `pages/` – componentes de nível de rota  
- `components/` – elementos reutilizáveis da interface  
- `services/` – camada de API simulada (JSON com atraso artificial)  
- `data/` – arquivos JSON estáticos  

---

## Roteamento e navegação

- Possui rotas públicas e protegidas. Tentativas de acessar rotas protegidas sem login redirecionam o usuário para a página de login.  
- Rotas parametrizadas para permitir filtragem por categoria  
- Rota de fallback 404 para URLs inválidas  
- Hooks de navegação utilizados:
  - `useNavigate`
  - `useParams`
  - `useLocation`

---

## Backend simulado e autenticação fictícia

- Os dados são carregados a partir de arquivos JSON locais  
- Um atraso artificial é utilizado para demonstrar estados de carregamento  
- A autenticação é simulada  
- Alterações na conta são armazenadas apenas no estado local  

---

## Responsividade e usabilidade

- Layout responsivo para dispositivos móveis e tablets  
- Cabeçalho e navegação com quebra de linha em telas pequenas  
- Componentes de feedback ao usuário (ex.: alertas, loaders)
