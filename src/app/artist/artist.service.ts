import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Artist } from '../models/artist';
import {Movement} from '../models/movement';
import {Artwork} from '../models/artwork';
import {Image} from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private apiUrl: string = "";
  constructor(private http: HttpClient) { }
  
  getArtists(): Observable<Artist[]> {
    this.apiUrl = environment.baseUrl + 'artists';
    return this.http.get<Artist[]>(this.apiUrl);
  }
  getArtist(idArtist:number): Observable<Artist>{
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
  createArtist(artist: Artist): Observable<Artist> {

    this.apiUrl = environment.baseUrl + 'artists';
    console.log(artist);
    console.log(this.apiUrl);
    return this.http.post<Artist>(this.apiUrl, artist);
  }
  createArtWork(artwork: Artwork, id: number): Observable<Artwork> {
    this.apiUrl = environment.baseUrl + 'artists/' + id + '/artworks';
    console.log(artwork);
    console.log(this.apiUrl);
    return this.http.post<Artwork>(this.apiUrl, artwork);
  }

}
