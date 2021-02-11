import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Filme } from '../filme.model';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-filme-delete',
  templateUrl: './filme-delete.component.html',
  styleUrls: ['./filme-delete.component.css']
})
export class FilmeDeleteComponent implements OnInit {

  filme: Filme;

  constructor(
    private filmeService: FilmeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.filmeService.readById(id).subscribe(filme => {
      this.filme = filme;
    });
  }

  deleteFilme(): void {
    this.filmeService.deleteById(this.filme).subscribe(() => {
      this.filmeService.showMessage('Filme deletado com sucesso!');
      this.router.navigate(['/filme']);
    });
  }

  avisoMsg(): void {
    Swal.fire({
      title: 'Tem certeza de que deseja remover esse filme?',
      text: 'Você não poderá recuperá-lo.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteFilme();
      } else if (result.isDismissed) {
        this.cancel()
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/filme']);
  }

}
