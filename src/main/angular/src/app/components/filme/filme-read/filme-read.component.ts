import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HeaderService } from '../../template/header/header.service';
import { Filme } from '../filme.model';
import { FilmeService } from '../filme.service';

declare let name: any;

@Component({
  selector: 'app-filme-read',
  templateUrl: './filme-read.component.html',
  styleUrls: ['./filme-read.component.css'],
})
export class FilmeReadComponent implements OnInit, AfterViewChecked {

  filmes: Filme[];
  generosRow: ElementRef;

  displayedColumns = ['id', 'titulo', 'generos', 'ano', 'action'];

  i: number = 1;
  cond: boolean = true;
  constructor(
    private filmeService: FilmeService,
    private elRef: ElementRef
  ) { }

  ngAfterViewChecked(): void {
    if (this.cond) {
      this.generosRow = this.elRef.nativeElement.querySelectorAll("td.row-genero");
      // console.log("generosRow: ", this.generosRow);
      this.formatGenero();
      this.i++;
      this.cond = false;
    }
  }

  ngOnInit(): void {
    // this.dom("onInit");
    this.filmeService.read().subscribe(filmes => {
      this.filmes = filmes;
      // console.log("filmes:", this.filmes);
    });
  }

  formatGenero() {
    // this.generosRow.forEach(element => {
    // });
    for (let i = 0; i < this.filmes.length; i++) {
      this.generosRow[i].textContent = this.generosRow[i].textContent.replace(/\,,,,/g, ", ");
      this.generosRow[i].textContent = this.generosRow[i].textContent.replace(/\,,,,/g, "");
      this.generosRow[i].textContent = this.generosRow[i].textContent.replace(/\,,,/g, ", ");
      this.generosRow[i].textContent = this.generosRow[i].textContent.replace(/\,,,/g, "");
      this.generosRow[i].textContent = this.generosRow[i].textContent.replace(/\,,/g, ", ");
      this.generosRow[i].textContent = this.generosRow[i].textContent.replace(/\,,/g, "");
      this.generosRow[i].textContent = this.generosRow[i].textContent.replace(/\,/g, ", ");
      if (this.generosRow[i].textContent[0] === ",") {
        // console.log(this.generosRow[i].textContent);
        this.generosRow[i].textContent = this.generosRow[i].textContent.slice(1, this.generosRow[i].textContent.length);
      }
      if (this.generosRow[i].textContent[this.generosRow[i].textContent.length - 1] === ",") {
        this.generosRow[i].textContent = this.generosRow[i].textContent.slice(0, this.generosRow[i].textContent.length - 1);
      }
    }
  }

  // dom(str: string) {
  //   //querySelector(".mat-cell.cdk-cell.cdk-column-generos.mat-column-generos.ng-star-inserted");
  //   console.log(`filme-read: (${str})`, generosRow);
  // }

}
