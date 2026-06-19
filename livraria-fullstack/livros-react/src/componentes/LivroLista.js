import {
  useState,
  useEffect
} from "react";

import LinhaLivro
from "./LinhaLivro";

import {
  ControleLivros
}
from "../controle/ControleLivros";

function LivroLista() {

  const controle =
    new ControleLivros();

  const [
    livros,
    setLivros
  ] = useState([]);

  const [
    carregado,
    setCarregado
  ] = useState(false);

  useEffect(() => {

    controle
      .obterLivros()
      .then((resultado) => {

        setLivros(
          resultado
        );

        setCarregado(
          true
        );

      });

  }, [carregado]);

  const excluir =
    (codigo) => {

      controle
        .excluir(codigo)
        .then(() => {

          setCarregado(
            false
          );

        });

    };

  return (

    <div>

      <h2>
        Lista de Livros
      </h2>

      <table>

        <tbody>

          {
            livros.map(
              (
                livro,
                index
              ) => (

                <LinhaLivro
                  key={index}
                  livro={livro}
                  excluir={
                    excluir
                  }
                />

              )
            )
          }

        </tbody>

      </table>

    </div>
  );
}

export default LivroLista;