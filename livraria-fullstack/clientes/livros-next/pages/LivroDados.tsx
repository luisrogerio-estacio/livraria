import {
    useState
}
from "react";

import { useRouter }
from "next/router";

import {
    Livro
}
from "../model/Livro";

import {
    ControleLivros
}
from "../controle/ControleLivros";

export default function LivroDados() {

    const router =
        useRouter();

    const controleLivros =
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

                    "Resumo",

                    ["Autor"]

                );

            controleLivros
                .incluir(livro)
                .then(() => {

                    router.push(
                        "/LivroLista"
                    );

                });

        };

    return (

        <div>

            <h1>
                Novo Livro
            </h1>

            <input

                value={titulo}

                onChange={
                    (e) =>
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