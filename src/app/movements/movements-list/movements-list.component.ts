import { Component, OnInit } from '@angular/core';
import { Movement } from 'src/app/models/movement';
import { MovementsService } from '../movements.service';

@Component({
  selector: 'app-movements-list',
  templateUrl: './movements-list.component.html',
  styleUrls: ['./movements-list.component.css']
})
export class MovementsListComponent implements OnInit {

  movements: Array<Movement> = [];
  constructor(private movementService: MovementsService) { }

  getMovements(): void{
    this.movementService.getMovements()
    .subscribe((movements) => {
      this.movements = movements;
    });
  }

  ngOnInit() {
    this.getMovements();
  }

}
