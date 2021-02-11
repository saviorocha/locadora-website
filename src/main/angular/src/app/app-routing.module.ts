import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { FilmeCrudComponent  } from './views/filme-crud/filme-crud.component';
import { FilmeCreateComponent } from './components/filme/filme-create/filme-create.component';
import { FilmeUpdateComponent } from './components/filme/filme-update/filme-update.component';
import { FilmeDeleteComponent } from './components/filme/filme-delete/filme-delete.component';
import { FilmeDescComponent } from './components/filme/filme-desc/filme-desc.component';
import { InstanciaFilmeCrudComponent } from './views/instancia-filme-crud/instancia-filme-crud.component';
import { InstanciaFilmeCreateComponent } from './components/instancia-filme/instancia-filme-create/instancia-filme-create.component';
import { InstanciaFilmeUpdateComponent } from './components/instancia-filme/instancia-filme-update/instancia-filme-update.component';
import { InstanciaFilmeDeleteComponent } from './components/instancia-filme/instancia-filme-delete/instancia-filme-delete.component';
import { InstanciaFilmeReadDetailComponent } from './components/instancia-filme/instancia-filme-read-detail/instancia-filme-read-detail.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "filme",
    component: FilmeCrudComponent
  },
  {
    path: "filme/create",
    component: FilmeCreateComponent
  },
  {
    path: "filme/update/:id",
    component: FilmeUpdateComponent
  },
  {
    path: "filme/delete/:id",
    component: FilmeDeleteComponent
  },
  {
    path: "filme/read/:id",
    component: FilmeDescComponent
  },
  {
    path: "instancia",
    component: InstanciaFilmeCrudComponent
  },
  {
    path: "instancia/create",
    component: InstanciaFilmeCreateComponent
  },
  {
    path: "instancia/update/:id",
    component: InstanciaFilmeUpdateComponent
  },
  {
    path: "instancia/delete/:id",
    component: InstanciaFilmeDeleteComponent
  },
  {
    path: "instancia/read/:id",
    component: InstanciaFilmeReadDetailComponent
  }
  
]

@NgModule({
  imports:  [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
