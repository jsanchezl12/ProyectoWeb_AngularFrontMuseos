import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // se agrega para el formulario
import { ToastrService } from 'ngx-toastr';
import { Movement } from '../../models/movement';
import { MovementsService } from '../movements.service';

@Component({
  selector: 'app-movements-create',
  templateUrl: './movements-create.component.html',
  styleUrls: ['./movements-create.component.css']
})
export class MovementsComponentCreate implements OnInit {

  movementForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private movementsService: MovementsService
  ) { }

  createMovements(movementToCreate: Movement) {
      this.movementsService.createMovements(movementToCreate)
      .subscribe(movement=>{
          console.info("The movement was created: ", movement)
          this.toastr.success("Confirmation", "movement created")
          this.movementForm.reset();
    })
  }

  cancelCreation(){
    this.movementForm.reset();
  }

  ngOnInit() {
    this.movementForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required, Validators.minLength(4)]],
      countryOfOrigin: ["", Validators.required],
      activeYears: ["", Validators.required]
    });
  }

}
