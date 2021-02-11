import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-filme-crud',
  templateUrl: './filme-crud.component.html',
  styleUrls: ['./filme-crud.component.css']
})
export class FilmeCrudComponent implements OnInit {

  constructor(
    private router: Router, 
    private headerService: HeaderService,
    private elRef: ElementRef
  ) {
    headerService.headerData = {
      title: "Filmes",
      icon: "movie",
      routeUrl: "/filme"
    }
  }

  ngOnInit(): void {
    this.domTeste();
  }

  irParaFilmeCreate(): void {
    this.router.navigate(['/filme/create']);
  }

  domTeste() {
    let elsTag = this.elRef.nativeElement.getElementsByTagName("td");
  }

}
