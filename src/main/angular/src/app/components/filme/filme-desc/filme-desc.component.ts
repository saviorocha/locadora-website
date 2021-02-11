import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filme } from '../filme.model';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-filme-desc',
  templateUrl: './filme-desc.component.html',
  styleUrls: ['./filme-desc.component.css']
})
export class FilmeDescComponent implements OnInit {

  filme: Filme;

  constructor(
    private filmeService: FilmeService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.dom("onInit");
    const id = this.route.snapshot.paramMap.get('id');
    this.filmeService.readById(id).subscribe(filme => {
      this.filme = filme;
    });
  }
}
