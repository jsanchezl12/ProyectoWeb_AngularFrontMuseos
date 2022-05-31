import { Component, OnInit } from '@angular/core';
import { Artist } from '../../models/artist';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  artistas: Array<Artist> = [];
  constructor(private artistService: ArtistService) { }

  getArtists(): void{
    this.artistService.getArtists()
    .subscribe((artistas) => {
      this.artistas = artistas;
    });
  }
  ngOnInit() {
    this.getArtists();
  }

}
