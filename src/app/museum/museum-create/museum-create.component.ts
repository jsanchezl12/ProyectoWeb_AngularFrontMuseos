import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // se agrega para el formulario
import { ToastrService } from 'ngx-toastr';

import {Museum} from '../../models/museum';
import { MuseumService } from '../museum.service';

@Component({
  selector: 'app-museum-create',
  templateUrl: './museum-create.component.html',
  styleUrls: ['./museum-create.component.css']
})
export class MuseumCreateComponent implements OnInit {

  museumForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private museumService: MuseumService
  ) { }

  createMuseum(museum: Museum) {
    this.museumService.createMuseum(museum).subscribe(museum=>{
      console.info("The museum was created: ", museum)
      this.toastr.success("Confirmation", "Museum created")
      this.museumForm.reset();
    })
  }

  cancelCreation(){
    this.museumForm.reset();
  }

  ngOnInit() {
    this.museumForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required, Validators.minLength(4)]],
      address: ["", Validators.required],
      city: ["", Validators.required],
      image: ["", Validators.required]
    });
  }

}
