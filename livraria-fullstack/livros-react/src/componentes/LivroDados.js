import {
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  ControleLivros
}
from "../controle/ControleLivros";

import {
  Livro
}
from "../model/Livro";

function LivroDados() {

  const navigate =
    useNavigate();

  const controle =
    new ControleLivros();

  const [
    titulo,
    setTitulo
  ] = useState("");

  const incluir =
    () => {

      const livro =
        new Livro(
          "",
          1,
          titulo,
          "Resumo exemplo",
          [
            "Autor Exemplo"
          ]
        );

      controle
        .incluir(livro)
        .then(() => {

          navigate("/");

        });

    };

  return (

    <div>

      <h2>
        Novo Livro
      </h2>

      <input
        value={titulo}
        onChange={(e) =>
          setTitulo(
            e.target.value
          )
        }
      />

      <button
        onClick={incluir}
      >
        Salvar
      </button>

    </div>
  );
}

export default LivroDados;