const express = require("express");

const router =
  express.Router();

const {
  obterLivros,
  incluir,
  excluir
} = require("../modelo/livro-dao");

router.get(
  "/",
  async (req, res, next) => {

    try {

      const livros =
        await obterLivros();

      res.json(livros);

    } catch (erro) {

      next(erro);

    }
  }
);

router.post(
  "/",
  async (req, res, next) => {

    try {

      await incluir(req.body);

      res.status(201).json({

        sucesso: true,

        mensagem:
          "Livro cadastrado"

      });

    } catch (erro) {

      next(erro);

    }
  }
);

router.delete(
  "/:codigo",
  async (req, res, next) => {

    try {

      await excluir(
        req.params.codigo
      );

      res.json({

        sucesso: true,

        mensagem:
          "Livro removido"

      });

    } catch (erro) {

      next(erro);

    }
  }
);

module.exports = router;