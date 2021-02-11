import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-instancia-filme-crud',
  templateUrl: './instancia-filme-crud.component.html',
  styleUrls: ['./instancia-filme-crud.component.css']
})
export class InstanciaFilmeCrudComponent implements OnInit {

  constructor(
    private headerService: HeaderService,
  ) { 
    headerService.headerData = {
      title: "Alugar",
      icon: "local_movies",
      routeUrl: "/instancia"
    }
  }

  ngOnInit(): void {
  }

}
