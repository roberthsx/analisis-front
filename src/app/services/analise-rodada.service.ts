import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of ,throwError } from 'rxjs';
import { AnaliseRodada } from '../models/analise-rodada';
import { retry, catchError } from 'rxjs/operators';

const apiUrl = 'https://localhost:5001/api/confrontos/analiseconfrontos';

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



export class AnaliseRodadaService {
  headers = new Headers()
  
  constructor(private http: HttpClient) { }


  getAnalise(id: number,dataInicio:string,dataFim:string): Observable<AnaliseRodada[]> {
    
    console.log(dataInicio)
    console.log(dataFim)
    return this.http.get<AnaliseRodada[]>( apiUrl + '/' + id + '?dataInicio='+ dataInicio+'&dataFim='+dataFim,httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  //// Obtem todos os carros
  //getCars(): Observable<Car[]> {
  //  return this.httpClient.get<Car[]>(this.url)
  //    .pipe(
  //      retry(2),
  //      catchError(this.handleError))
  //}
//
  //// Obtem um carro pelo id
  //getCarById(id: number): Observable<Car> {
  //  return this.httpClient.get<Car>(this.url + '/' + id)
  //    .pipe(
  //      retry(2),
  //      catchError(this.handleError)
  //    )
  //}
//
  //// salva um carro
  //saveCar(car: Car): Observable<Car> {
  //  return this.httpClient.post<Car>(this.url, JSON.stringify(car), this.httpOptions)
  //    .pipe(
  //      retry(2),
  //      catchError(this.handleError)
  //    )
  //}
//
  //// utualiza um carro
  //updateCar(car: Car): Observable<Car> {
  //  return this.httpClient.put<Car>(this.url + '/' + car.id, JSON.stringify(car), this.httpOptions)
  //    .pipe(
  //      retry(1),
  //      catchError(this.handleError)
  //    )
  //}
//
  //// deleta um carro
  //deleteCar(car: Car) {
  //  return this.httpClient.delete<Car>(this.url + '/' + car.id, this.httpOptions)
  //    .pipe(
  //      retry(1),
  //      catchError(this.handleError)
  //    )
  //}
  
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
