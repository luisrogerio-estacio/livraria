# API REST

Base URL

http://localhost:3030/livros

## Listar Livros

GET /

Resposta:

[
{
"_id": "665432...",
"titulo": "Clean Code",
"codEditora": 1,
"resumo": "Boas práticas",
"autores": ["Robert Martin"]
}
]

## Inserir Livro

POST /

Body:

{
"titulo": "Clean Code",
"codEditora": 1,
"resumo": "Boas práticas",
"autores": ["Robert Martin"]
}

Resposta:

{
"sucesso": true,
"mensagem": "Livro cadastrado"
}

## Excluir Livro

DELETE /:codigo

Exemplo:

DELETE

/livros/665432abc

Resposta:

{
"sucesso": true,
"mensagem": "Livro removido"
}
