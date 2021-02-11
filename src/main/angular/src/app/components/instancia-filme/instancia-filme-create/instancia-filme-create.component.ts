import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Filme } from '../../filme/filme.model';
import { FilmeService } from '../../filme/filme.service';
import { Instancia } from '../instancia-filme.model';
import { InstanciaFilmeService } from '../instancia-filme.service';

@Component({
  selector: 'app-instancia-filme-create',
  templateUrl: './instancia-filme-create.component.html',
  styleUrls: ['./instancia-filme-create.component.css']
})
export class InstanciaFilmeCreateComponent implements OnInit {

  filmes: Filme[];
  selectedFilme: Filme;
  instancia: Instancia = {
    // id: 101,
    // data_entrega: new Date(2020, 10, 17)
    data_entrega: null,
    filme: null
  };

  constructor(
    private instanciaService: InstanciaFilmeService,
    private filmeService: FilmeService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.filmeService.read().subscribe(filmes => {
      this.filmes = filmes;
      // console.log("create - filme: ", this.filmes);
    });
  }

  createInstanciaFilmeForm: FormGroup = this.formBuilder.group({
    data_entrega: [, {
      validators: [
        Validators.required
      ],
      updateOn: "change"
    }],
    filme_select: [, {
      validators: [
        Validators.required
      ],
      updateOn: "change"
    }],
  });
  //  = this.formBuilder.group({
  //   name: '',
  //   entregaRange: this.formBuilder.group({
  //     startDate: '',
  //     endDate: ''
  //   })
  // });

  createInstancia(): void {
    this.instancia.filme = this.selectedFilme;
    this.instanciaService.create(this.instancia).subscribe(() => {
      // console.log("create - instancia: ", this.instancia);
      this.instanciaService.showMessage("Instância criada");
      this.router.navigate(['/instancia']);
    });
  }

  cancel(): void {
    this.router.navigate(['/instancia']);
  }

}
