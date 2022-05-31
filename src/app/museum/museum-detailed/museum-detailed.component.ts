import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import {Museum} from '../../models/museum';
import {Exhibition} from '../../models/exhibition';
import {Artwork} from  '../../models/artwork';

import { MuseumService } from '../museum.service';


@Component({
  selector: 'app-museum-detailed',
  templateUrl: './museum-detailed.component.html',
  styleUrls: ['./museum-detailed.component.css']
})
export class MuseumDetailedComponent implements OnInit {
  mainMuseum: Museum = {} as Museum;
  exhibiciones: Array<Exhibition> = [];;
  artworks: Array<Artwork> = [];


  constructor(private route: ActivatedRoute, private museumService: MuseumService) { }

  getMuseum(idMuseum:number): void{
    this.museumService.getMuseum(idMuseum).subscribe((museum) => {
      this.mainMuseum = museum;
    });
  }

  getExhibitions(idMuseum:number): void{
    this.museumService.getExhibitions(idMuseum).subscribe((exhibitions) => {
      this.exhibiciones = exhibitions;
    });
  }

  getArtworks(idMuseum:number):void{
    this.museumService.getArtworks(idMuseum)
    .subscribe((artworks) => {
      this.artworks = artworks;
    });
  }


  ngOnInit() {
    let id = this.route.snapshot.params.id;
    console.log(id);
    this.getMuseum(id);
    this.getExhibitions(id);
    this.getArtworks(id);

  }

}
