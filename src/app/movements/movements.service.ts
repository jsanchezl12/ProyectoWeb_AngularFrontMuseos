import { Injectable } from '@angular/core';
import { Movement } from '../models/movement';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovementsService {

  private apiUrl: string = "";
  constructor(private http: HttpClient) { }

  getMovements(): Observable<Movement[]>{
    this.apiUrl = environment.baseUrl + 'movements/';
    return this.http.get<Movement[]>(this.apiUrl);
  }

  createMovements(movement: Movement): Observable<Movement> {
    this.apiUrl = environment.baseUrl + 'movements';
    console.log(movement);
    console.log(this.apiUrl);
    return this.http.post<Movement>(this.apiUrl, movement);
  }

}
