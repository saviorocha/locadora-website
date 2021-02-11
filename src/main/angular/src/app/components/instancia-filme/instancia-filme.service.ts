import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { type } from 'os';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Instancia } from './instancia-filme.model';

@Injectable({
  providedIn: 'root'
})
export class  InstanciaFilmeService {

  baseUrl = "http://localhost:8080/instancias";

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string, isError = false): void {
    
    this.snackBar.open(msg, "Fechar", {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }

  create(instancia: Instancia): Observable<Instancia> {
    return this.http.post<Instancia> (this.baseUrl, instancia).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(): Observable<Instancia[]> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<Instancia> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Instancia>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(instancia: Instancia): Observable<Instancia> {
    const url = `${this.baseUrl}/${instancia.id}`;
    return this.http.put<Instancia>(url, instancia).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  deleteById(instancia: Instancia): Observable<Instancia> {
    const url = `${this.baseUrl}/${instancia.id}`;
    return this.http.delete<Instancia>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }


  errorHandler(e: any): Observable<any> {
    console.log(e);
    this.showMessage('Algo deu errado :\\', true);
    return EMPTY;
  }

  stringToDate(dateStr: string): Date {
    dateStr = dateStr.slice(0,10);
    let year = dateStr.split("-")[0],
        month = dateStr.split("-")[1],
        day = dateStr.split("-")[2];
    let date: Date = new Date(Number(year), Number(month), Number(day)); 
    return date;
  }
}
