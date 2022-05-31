import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Museum } from '../models/museum';
import { Exhibition } from '../models/exhibition';
import { Artwork } from '../models/artwork';



@Injectable({
  providedIn: 'root'
})
export class MuseumService {

  private apiUrl: string = "";

  constructor(private http: HttpClient) { }

  getMuseums(): Observable<Museum[]> {
    this.apiUrl = environment.baseUrl + 'museums';
    return this.http.get<Museum[]>(this.apiUrl);
  }

  getMuseum(idMuseum: number): Observable<Museum> {
    this.apiUrl = environment.baseUrl + 'museums/' + idMuseum;
    return this.http.get<Museum>(this.apiUrl);
  }

  getExhibitions(idMuseum: number): Observable<Exhibition[]> {
    this.apiUrl = environment.baseUrl + 'museums/' + idMuseum + '/exhibitions';
    return this.http.get<Exhibition[]>(this.apiUrl);
  }

  getArtworks(idMuseum: number): Observable<Artwork[]> {
    this.apiUrl = environment.baseUrl + 'museums/' + idMuseum + '/artworks';
    return this.http.get<Artwork[]>(this.apiUrl);
  }

  createMuseum(museum: Museum): Observable<Museum> {
    this.apiUrl = environment.baseUrl + 'museums';
    console.log(museum);
    console.log(this.apiUrl);
    return this.http.post<Museum>(this.apiUrl, museum);
  }

}
