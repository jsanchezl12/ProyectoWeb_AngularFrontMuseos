import { Component, OnInit } from '@angular/core';
import { Sponsor } from 'src/app/models/sponsor';
import { SponsorService } from '../sponsor.service';
import {Exhibition} from '../../models/exhibition';

@Component({
  selector: 'app-sponsor-list',
  templateUrl: './sponsor-list.component.html',
  styleUrls: ['./sponsor-list.component.css']
})
export class SponsorListComponent implements OnInit {
  sponsors: Array<Sponsor> = [];
  constructor(private sponsorService: SponsorService) { }

  getSponsors(): void{
    this.sponsorService.getSponsors()
    .subscribe((sponsors) => {
      this.sponsors = sponsors;
      console.log(this.sponsors);
      sponsors.forEach(element => {
        if(element.exhibition == null){
          element.exhibition = {id:0, name:"", description:"", sponsor: {id:0}} as Exhibition;
          element.exhibition.name = "NO TIENE EXHIBICION";
        }
      });
    });
  }

  ngOnInit() {
    this.getSponsors();
  }

}
