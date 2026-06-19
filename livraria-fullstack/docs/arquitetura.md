# Arquitetura do Sistema

## Visão Geral

O sistema foi dividido em quatro aplicações:

1. API REST Express
2. Cliente React
3. Cliente Next.js
4. Cliente Angular

Todos os clientes compartilham a mesma fonte de dados através da API.

## Camadas

### Apresentação

* React
* Next.js
* Angular

### Negócio

* ControleLivros
* ControleEditora

### Persistência

* Mongoose
* MongoDB

## Fluxo

Usuário

↓

Frontend

↓

Express

↓

Mongoose

↓

MongoDB

