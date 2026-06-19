import { Injectable }
from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  editoras = [

    {
      codEditora: 1,
      nome: 'Pearson'
    },

    {
      codEditora: 2,
      nome: 'Novatec'
    },

    {
      codEditora: 3,
      nome: 'Alta Books'
    }

  ];

  getEditoras() {

    return this.editoras;

  }

  getNomeEditora(
    codEditora: number
  ): string {

    return this.editoras
      .filter(
        editora =>
          editora.codEditora ===
          codEditora
      )[0].nome;
  }
}