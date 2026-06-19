import {
  Component,
  OnInit
}
from '@angular/core';

import {
  ControleLivrosService
}
from '../controle-livros.service';

import { Livro }
from '../livro';

@Component({

  selector:
    'app-livro-lista',

  templateUrl:
    './livro-lista.component.html'

})
export class LivroListaComponent
implements OnInit {

  livros: Livro[] = [];

  constructor(

    private controle:
      ControleLivrosService

  ) {}

  ngOnInit(): void {

    this.controle
      .obterLivros()
      .then(resultado => {

        this.livros =
          resultado;

      });

  }

  excluir(
    codigo: string
  ): void {

    this.controle
      .excluir(codigo)
      .then(() => {

        this.controle
          .obterLivros()
          .then(resultado => {

            this.livros =
              resultado;

          });

      });

  }

}