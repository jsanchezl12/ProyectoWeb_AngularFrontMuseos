import { Component, OnInit } from '@angular/core';
import { Exhibition } from 'src/app/models/exhibition';
import { ExhibitionsService } from '../exhibitions.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-exhibitions-list',
  templateUrl: './exhibitions-list.component.html',
  styleUrls: ['./exhibitions-list.component.css']
})
export class ExhibitionsListComponent implements OnInit {

  exhibiciones: Array<Exhibition> = [];

  constructor(private route: ActivatedRoute, 
    private exhibitionsService: ExhibitionsService) { }

  getExhibitions(): void{
    this.exhibitionsService.getExhibitions('100').subscribe((exhibicion) => {
      this.exhibiciones =  exhibicion;
    });
  }

  getExhibitionsID(id:string): void{
    this.exhibitionsService.getExhibitions(id)
    .subscribe((exhibicion) => {
      this.exhibiciones =  exhibicion;
    });
  }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    if (id != null) {
      this.getExhibitionsID(id);  
    }
    else{
      this.getExhibitions();
    }
    
  }

}
