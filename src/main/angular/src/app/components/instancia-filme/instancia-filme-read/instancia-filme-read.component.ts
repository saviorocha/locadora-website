import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/pt';
import { Instancia } from '../instancia-filme.model';
import { InstanciaFilmeService } from '../instancia-filme.service';
import { FilmeCrudComponent } from 'src/app/views/filme-crud/filme-crud.component';
import { Filme } from '../../filme/filme.model';
import { FilmeService } from '../../filme/filme.service';

@Component({
  selector: 'app-instancia-filme-read',
  templateUrl: './instancia-filme-read.component.html',
  styleUrls: ['./instancia-filme-read.component.css']
})
export class InstanciaFilmeReadComponent implements OnInit {

  instancias: Instancia[];
  // filme: Filme;
  displayedColumns = ['id', 'data_entrega', 'filme', 'action'];

  constructor(
    private instanciaService: InstanciaFilmeService
  ) { }

  ngOnInit(): void {
    registerLocaleData(localeFr, 'br'); 
    this.instanciaService.read().subscribe(instancias => {
      this.instancias = instancias;
      // console.log("instancias: ", this.instancias);
      // this.formatDate();
    })
  }

}
