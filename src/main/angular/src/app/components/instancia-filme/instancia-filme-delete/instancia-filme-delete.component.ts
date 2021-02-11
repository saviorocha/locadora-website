import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Instancia } from '../instancia-filme.model';
import { InstanciaFilmeService } from '../instancia-filme.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/pt';

@Component({
  selector: 'app-instancia-filme-delete',
  templateUrl: './instancia-filme-delete.component.html',
  styleUrls: ['./instancia-filme-delete.component.css']
})
export class InstanciaFilmeDeleteComponent implements OnInit {

  instancia: Instancia;

  constructor(
    private instanciaService: InstanciaFilmeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    registerLocaleData(localeFr, 'br');
    const id = this.route.snapshot.paramMap.get('id');
    this.instanciaService.readById(id).subscribe(instancia => {
      this.instancia = instancia;
      // console.log("delete: ", this.instancia)
    });
  }

  deleteInstancia(): void {
    this.instanciaService.deleteById(this.instancia).subscribe(() => {
      this.instanciaService.showMessage('Instância deletada com sucesso!');
      this.router.navigate(['/instancia']);
    });
  }

  avisoMsg(): void {
    Swal.fire({
      title: 'Tem certeza de que deseja remover esta instância?',
      text: 'Você não poderá recuperá-la.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteInstancia();
      } else if (result.isDismissed) {
        this.cancel()
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/instancia']);
  }

}
