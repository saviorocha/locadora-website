import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';

import { FilmeCrudComponent } from './views/filme-crud/filme-crud.component';
import { FilmeCreateComponent } from './components/filme/filme-create/filme-create.component';
import { FilmeReadComponent } from './components/filme/filme-read/filme-read.component';
import { FilmeUpdateComponent } from './components/filme/filme-update/filme-update.component';
import { FilmeDeleteComponent } from './components/filme/filme-delete/filme-delete.component';
import { FilmeDescComponent } from './components/filme/filme-desc/filme-desc.component';

import { InstanciaFilmeCrudComponent } from './views/instancia-filme-crud/instancia-filme-crud.component';
import { InstanciaFilmeReadComponent } from './components/instancia-filme/instancia-filme-read/instancia-filme-read.component';
import { InstanciaFilmeCreateComponent } from './components/instancia-filme/instancia-filme-create/instancia-filme-create.component';
import { InstanciaFilmeUpdateComponent } from './components/instancia-filme/instancia-filme-update/instancia-filme-update.component';
import { InstanciaFilmeDeleteComponent } from './components/instancia-filme/instancia-filme-delete/instancia-filme-delete.component';
import { InstanciaFilmeReadDetailComponent } from './components/instancia-filme/instancia-filme-read-detail/instancia-filme-read-detail.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    FilmeCrudComponent,
    FilmeCreateComponent,
    FilmeReadComponent,
    FilmeUpdateComponent,
    FilmeDeleteComponent,
    FilmeDescComponent,
    InstanciaFilmeCrudComponent,
    InstanciaFilmeReadComponent,
    InstanciaFilmeCreateComponent,
    InstanciaFilmeUpdateComponent,
    InstanciaFilmeDeleteComponent,
    InstanciaFilmeReadDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule, 
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
