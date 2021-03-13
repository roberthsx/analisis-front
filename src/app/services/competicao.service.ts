import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of ,throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Competicao } from '../models/competicao';
import { MediaCompeticao } from '../models/media-competicao';
import { MediaCompeticaoCanto } from '../models/media-competicao-canto';
import { Time } from '../models/time';


const apiUrl = 'http://localhost:5000/api/competicao';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Method': 'DELETE, POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class CompeticaoService {

  constructor(private http: HttpClient) { }


  getCompeticoes(): Observable<Competicao[]> {
    console.log(httpOptions)
    return this.http.get<Competicao[]>(apiUrl,httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }
  getCompeticoesMedias(idCompeticao:number): Observable<MediaCompeticao> {
    console.log(httpOptions)
    return this.http.get<MediaCompeticao>(apiUrl+"/"+idCompeticao+"/media",httpOptions)
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
