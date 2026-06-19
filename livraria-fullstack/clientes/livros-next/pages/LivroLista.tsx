import {
    useEffect,
    useState
}
from "react";

import LinhaLivro
from "../componentes/LinhaLivro";

import {
    ControleLivros
}
from "../controle/ControleLivros";

export default function LivroLista() {

    const controleLivros =
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

        controleLivros
            .obterLivros()
            .then(
                resultado => {

                    setLivros(
                        resultado
                    );

                    setCarregado(
                        true
                    );

                }
            );

    }, [carregado]);

    const excluir =
        (codigo: string) => {

            controleLivros
                .excluir(codigo)
                .then(() => {

                    setCarregado(
                        false
                    );

                });

        };

    return (

        <div>

            <h1>
                Lista de Livros
            </h1>

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

                                    livro={
                                        livro
                                    }

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