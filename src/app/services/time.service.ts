import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of ,throwError } from 'rxjs';
import { AnaliseRodada } from '../models/analise-rodada';
import { retry, catchError } from 'rxjs/operators';
import { Time } from '../models/time';


const apiUrl = 'https://localhost:5001/api/AnaliseRodada/competicao/5';

@Injectable({
  providedIn: 'root'
})

export class TimeService {

  

  constructor(private http: HttpClient) { }


  getTimes(): Observable<Time[]> {
    return this.http.get<Time[]>(apiUrl)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
