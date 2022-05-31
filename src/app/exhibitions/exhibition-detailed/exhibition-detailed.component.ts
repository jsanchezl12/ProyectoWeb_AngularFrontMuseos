import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Exhibition } from 'src/app/models/exhibition';
import { ExhibitionsService } from '../exhibitions.service';
import { Artwork } from 'src/app/models/artwork';

@Component({
  selector: 'app-exhibition-detailed',
  templateUrl: './exhibition-detailed.component.html',
  styleUrls: ['./exhibition-detailed.component.css']
})
export class ExhibitionDetailedComponent implements OnInit {
  mainExi: Exhibition = {} as Exhibition;
  artworks: Array<Artwork> = [];

  constructor(private route: ActivatedRoute, private exibitionService: ExhibitionsService) { }

  getExibicion(idMuseum:string, idExi:string): void{
    this.exibitionService.getExhibition(idMuseum,idExi).subscribe((exi) => {
      this.mainExi = exi;
      //console.log(this.mainExi.name);
    });
  }

  getArtworks(idExi:string):void{
    this.exibitionService.getExhibitionArtWorks(idExi)
    .subscribe((artworks) => {
      this.artworks = artworks;
      console.log(this.artworks)
    });
  }


  ngOnInit() {
    let idCompuesto = this.route.snapshot.params.id;
    //console.log(idCompuesto);
    var IDs = idCompuesto.split("-");
    var idExi = IDs[0];
    var idMuseo = IDs[1];
    //console.log(idExi);
    //console.log(idMuseo);
    this.getExibicion(idMuseo,idExi);
    this.getArtworks(idExi);
  }

}
