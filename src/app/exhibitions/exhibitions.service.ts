import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Artist } from '../models/artist';
import { Artwork } from '../models/artwork';
import { Exhibition } from '../models/exhibition';
import { Sponsor } from '../models/sponsor';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionsService {

  private apiUrl: string = "";
  constructor(private http: HttpClient) { }

  getExhibitions(id:string): Observable<Exhibition[]> {
    this.apiUrl = environment.baseUrl + 'museums/' + id + '/exhibitions' ;
    return this.http.get<Exhibition[]>(this.apiUrl);
  }
  getExhibition(idMuseum:string, idExi:string): Observable<Exhibition> {
    this.apiUrl = environment.baseUrl + 'museums/' + idMuseum + '/exhibitions/' + idExi;
    return this.http.get<Exhibition>(this.apiUrl);
  }

  getExhibitionArtWorks(idExhibition:string): Observable<Artwork[]> {
    this.apiUrl = environment.baseUrl + 'exhibitions/' + idExhibition + '/artworks/';
    return this.http.get<Artwork[]>(this.apiUrl);
  }

  createSponsorForExh(sponsor: Sponsor): Observable<Sponsor> {
    this.apiUrl = environment.baseUrl + 'sponsors';
    return this.http.post<Sponsor>(this.apiUrl, sponsor);
  }

  createExhibition(idMuseum:string, exhibition:Exhibition): Observable<Exhibition> {
    this.apiUrl = environment.baseUrl + 'museums/' + idMuseum + '/exhibitions';
      return this.http.post<Exhibition>(this.apiUrl, exhibition);
  }
/* getArtist(idArtist:number): Observable<Artist>{
    this.apiUrl = environment.baseUrl + 'artists/' + idArtist;
    return this.http.get<Artist>(this.apiUrl);
  }
  getMovements(idArtist:number): Observable<Movement[]>{
    this.apiUrl = environment.baseUrl + 'artists/' + idArtist + '/movements';
    return this.http.get<Movement[]>(this.apiUrl);
  }
  getArtworks(idArtist:number): Observable<Artwork[]>{
    this.apiUrl = environment.baseUrl + 'artists/' + idArtist + '/artworks';
    return this.http.get<Artwork[]>(this.apiUrl);
  }
  getImages(idArtist:number, idArtWork:number): Observable<Image[]>{
    this.apiUrl = environment.baseUrl + 'artists/' + idArtist + '/artworks/' + idArtWork + '/images';
    return this.http.get<Image[]>(this.apiUrl);
  }
  */

}
