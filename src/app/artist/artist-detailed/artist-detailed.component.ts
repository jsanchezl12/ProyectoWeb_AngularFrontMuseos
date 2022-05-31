import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Artist } from '../../models/artist';
import { Movement } from '../../models/movement';
import { Artwork } from  '../../models/artwork';
import { Image } from '../../models/image';
import { ArtistService } from '../artist.service';


@Component({
  selector: 'app-artist-detailed',
  templateUrl: './artist-detailed.component.html',
  styleUrls: ['./artist-detailed.component.css']
})
export class ArtistDetailedComponent implements OnInit {

  mainArtist: Artist = {} as Artist;
  movements:Array<Movement> = [];
  artworks:Array<Artwork> = [];
  images:Array<Image> = [];

  constructor(private route: ActivatedRoute, private artistService: ArtistService) { }

  getArtist(idArtist:number): void{
    this.artistService.getArtist(idArtist)
    .subscribe((artista) => {
      this.mainArtist = artista;
    });
  }

  getMovements(idArtist:number): void{
    this.artistService.getMovements(idArtist)
    .subscribe((movements) => {
      this.movements = movements;
    });
  }

  getArtworks(idArtist:number): void{
    this.artistService.getArtworks(idArtist)
    .subscribe((artworks) => {
      this.artworks = artworks;
      this.artworks.forEach(artwork => {
        artwork.images = [];
        this.getImages(idArtist, artwork.id, artwork);
        console.log(artwork.images);
      });
    });

  }

  getImages(idArtist:number, idArtWork:number, mainArtWork:Artwork):void{
    this.artistService.getImages(idArtist, idArtWork)
    .subscribe((images) => {
      mainArtWork.images = images;
    });
  }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    console.log(id);
    this.getArtist(id);
    this.getMovements(id);
    this.getArtworks(id);

  }

}
