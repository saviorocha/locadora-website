import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Instancia } from '../instancia-filme.model';
import { InstanciaFilmeService } from '../instancia-filme.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/pt';
import { Filme } from '../../filme/filme.model';
import { FilmeService } from '../../filme/filme.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-instancia-filme-update',
  templateUrl: './instancia-filme-update.component.html',
  styleUrls: ['./instancia-filme-update.component.css']
})
export class InstanciaFilmeUpdateComponent implements OnInit {

  filme_update: Filme;
  filmes: Filme[];
  instancia: Instancia;
  startDate = new Date();

  constructor(
    private filmeService: FilmeService,
    private instanciaService: InstanciaFilmeService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    registerLocaleData(localeFr, 'br');
    const id = this.route.snapshot.paramMap.get('id');

    this.filmeService.read().subscribe(filmes => {
      this.filmes = filmes;
    });

    this.instanciaService.readById(id).subscribe(instancia => {
      this.instancia = instancia;
      this.filme_update = this.instancia.filme;
      this.instancia.data_entrega = this.instanciaService.stringToDate(String(this.instancia.data_entrega));

      // console.log("update: ", this.filme_update);
      // console.log("date: ", this.instancia.data_entrega);
      // console.log('update: ', this.instancia); 
      // console.log(typeof(this.instancia.data_entrega));
      // console.log(typeof(this.instanciaService.stringToDate(String(this.instancia.data_entrega))));
    });

  }

  updateInstanciaFilmeForm: FormGroup = this.formBuilder.group({
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

  updateInstancia() {
    // console.log("final_date", this.instancia.data_entrega);
    this.instancia.filme = this.filme_update;
    this.instanciaService.update(this.instancia).subscribe(() => {
      this.instanciaService.showMessage('Instância alterada com sucesso!');
      this.router.navigate(['/instancia']);
    });
  }
 
  cancel(): void {
    this.router.navigate(['/instancia']);
  }

}
