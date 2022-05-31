import { Component, OnInit } from '@angular/core';
import  {Museum} from '../../models/museum';
import { MuseumService } from '../museum.service';

@Component({
  selector: 'app-museum-list',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.css']
})
export class MuseumListComponent implements OnInit {

  museos: Array<Museum> = [];

  constructor(private museumService: MuseumService) { }

  getMuseums(): void{
    this.museumService.getMuseums()
    .subscribe((museos) => {
      this.museos = museos;
    });
  }
  ngOnInit() {
    this.getMuseums();
  }

}
