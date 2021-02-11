import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmeService } from '../filme.service';
import { Filme } from '../filme.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filme-update',
  templateUrl: './filme-update.component.html',
  styleUrls: ['./filme-update.component.css']
})
export class FilmeUpdateComponent implements OnInit {

  filme: Filme;

  generos: string[] = [
    "Ação",
    "Aventura",
    "Drama",
    "Fantasia",
    "Ficção científica"
  ];

  constructor(
    private filmeService: FilmeService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.filmeService.readById(id).subscribe(filme => {
      this.filme = filme;
      // console.log('update: ', this.filme);
      //this.markCheckBox();
    });
  }

  updateFilme(): void {
    this.convertGenero();
    this.filmeService.update(this.filme).subscribe(() => {
      this.filmeService.showMessage('Filme alterado com sucesso!');
      this.router.navigate(['/filme']);
    });
  }

  convertGenero(): void {
    for (let i = 0; i < this.filme.genero.length; i++) {
      if (!this.filme.genero[i]) {
        this.filme.genero[i] = null;
      } else {
        this.filme.genero[i] = this.generos[i];
      }
    }
  }

  cancel(): void {
    this.router.navigate(['/filme'])
  }

}
