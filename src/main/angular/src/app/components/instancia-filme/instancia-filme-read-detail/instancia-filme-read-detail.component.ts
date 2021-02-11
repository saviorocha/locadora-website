import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Instancia } from '../instancia-filme.model';
import { InstanciaFilmeService } from '../instancia-filme.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/pt';

@Component({
  selector: 'app-instancia-filme-read-detail',
  templateUrl: './instancia-filme-read-detail.component.html',
  styleUrls: ['./instancia-filme-read-detail.component.css']
})
export class InstanciaFilmeReadDetailComponent implements OnInit {

  instancia: Instancia;

  constructor(
    private instanciaService: InstanciaFilmeService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    registerLocaleData(localeFr, 'br');
    const id = this.route.snapshot.paramMap.get('id');
    this.instanciaService.readById(id).subscribe(instancia => {
      this.instancia = instancia;
    });
  }

}
