import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Filme } from '../filme.model';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-filme-create',
  templateUrl: './filme-create.component.html',
  styleUrls: ['./filme-create.component.css']
})
export class FilmeCreateComponent implements OnInit {

  generos: string[] = [
    "Ação",
    "Aventura",
    "Drama",
    "Ficção científica",
    "Fantasia"
  ];

  filme: Filme = {
    ano: null,
    titulo: '',
    diretores: [],
    atores: [],
    genero: [],
    sinopse: '',
  }

  constructor(
    private filmeService: FilmeService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  createFilmeForm: FormGroup = this.formBuilder.group({
    ano: [, {
      validators: [
        Validators.pattern("^(19[0-9][0-9]|20[01][0-9]|2020)$"), Validators.required
      ],
      updateOn: "change"
    }],
    titulo: [, {
      validators: [
        Validators.required, Validators.minLength(2), Validators.maxLength(30)
      ], updateOn: "change"
    }],
    diretores: [, {
      validators: [
        Validators.required
      ], updateOn: "change"
    }],
    atores: [, {
      validators: [
        Validators.required
      ], updateOn: "change"
    }],
    sinopse: [, {
      validators: [
        Validators.required, Validators.minLength(5), Validators.maxLength(500)
      ], updateOn: "change"
    }],
    noValidation: [, { updateOn: "change" }]
  });

  createFilme(): void {
    // console.log("antes: ", this.filme.genero);
    this.convertGenero();
    this.filmeService.create(this.filme).subscribe(() => {
      this.filmeService.showMessage('Filme criado com sucesso!');
      this.router.navigate(['/filme']);
    });
  }

  cancel(): void {
    this.router.navigate(['/filme']);
  }

  convertGenero(): void {
    console.log(this.filme);
    for (let i = 0; i < this.filme.genero.length; i++) {
      if (!this.filme.genero[i]) {
        this.filme.genero[i] = null;
      } else {
        this.filme.genero[i] = this.generos[i];
      }
    }
  }
}
