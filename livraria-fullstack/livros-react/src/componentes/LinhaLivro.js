function LinhaLivro({
  livro,
  excluir
}) {

  return (

    <tr>

      <td>
        {livro.titulo}
      </td>

      <td>
        {livro.autores.join(", ")}
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

export default LinhaLivro;