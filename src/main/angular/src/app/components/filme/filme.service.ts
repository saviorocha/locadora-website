import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Filme } from './filme.model';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  baseUrl = 'http://localhost:8080/filmes';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  create(filme: Filme): Observable<Filme> {
    return this.http.post<Filme>(this.baseUrl, filme).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(): Observable<Filme[]> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<Filme> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Filme>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(filme: Filme): Observable<Filme> {
    const url = `${this.baseUrl}/${filme.id}`;
    return this.http.put<Filme>(url, filme).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  deleteById(filme: Filme): Observable<Filme> {
    const url = `${this.baseUrl}/${filme.id}`;
    return this.http.delete<Filme>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  showMessage(msg: string, isError = false): void {
    
    this.snackBar.open(msg, "Fechar", {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  errorHandler(e: any): Observable<any> {
    console.log(e);
    this.showMessage('Algo deu errado :\\', true);
    return EMPTY;
  }
}
