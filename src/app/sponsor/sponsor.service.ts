import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sponsor } from '../models/sponsor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {

  private apiUrl: string = "";
  constructor(private http: HttpClient) { }

  getSponsors(): Observable<Sponsor[]>{
    this.apiUrl = environment.baseUrl + 'sponsors/';
    return this.http.get<Sponsor[]>(this.apiUrl);
  }

  createSponsor(sponsor: Sponsor): Observable<Sponsor> {
    this.apiUrl = environment.baseUrl + 'sponsors';
    console.log(sponsor);
    console.log(this.apiUrl);
    return this.http.post<Sponsor>(this.apiUrl, sponsor);
  }
}
