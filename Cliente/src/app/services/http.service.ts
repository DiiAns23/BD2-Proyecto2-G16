import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public url: string

  constructor(private _http: HttpClient) { 
    this.url = `${environment.url}/consultas/consultar`
  }

  public postLectura(database:number,id_consulta:number){
    return this._http.post(this.url,{database,id_consulta});
  }
}
