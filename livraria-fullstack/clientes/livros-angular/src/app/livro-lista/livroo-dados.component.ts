import {
  Component
}
from '@angular/core';

import {
  Router
}
from '@angular/router';

import {
  ControleLivrosService
}
from '../controle-livros.service';

import {
  Livro
}
from '../livro';

@Component({

  selector:
    'app-livro-dados',

  templateUrl:
    './livro-dados.component.html'

})
export class LivroDadosComponent {

  titulo =
    '';

  constructor(

    private controle:
      ControleLivrosService,

    private router:
      Router

  ) {}

  incluir(): void {

    const livro =
      new Livro(

        '',

        1,

        this.titulo,

        'Resumo padrão',

        ['Autor Exemplo']

      );

    this.controle
      .incluir(livro)
      .then(() => {

        this.router
          .navigateByUrl(
            '/lista'
          );

      });

  }
}