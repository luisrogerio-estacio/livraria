import { Livro }
from "../model/Livro";

type Props = {

    livro: Livro;

    excluir:
        (codigo: string)
            => void;
};

export default function LinhaLivro({

    livro,

    excluir

}: Props) {

    return (

        <tr>

            <td>
                {livro.titulo}
            </td>

            <td>
                {
                    livro.autores.join(
                        ", "
                    )
                }
            </td>

            <td>

                <button

                    onClick={() =>
                        excluir(
                            livro.codigo
                        )
                    }

                >

                    Excluir

                </button>

            </td>

        </tr>

    );
}