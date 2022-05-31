import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Sponsor } from 'src/app/models/sponsor';
import { SponsorService } from '../sponsor.service';

@Component({
  selector: 'app-sponsor-create',
  templateUrl: './create-sponsor.component.html',
  styleUrls: ['./create-sponsor.component.css']
})
export class CreateSponsorComponent implements OnInit {

  SponsorForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private sponsorsService: SponsorService
  ) { }

  createSponsor(sponsorToCreate: Sponsor) {
    this.sponsorsService.createSponsor(sponsorToCreate)
    .subscribe(sponsor=>{
        console.info("The Sponsor was created: ", sponsor)
        this.toastr.success("Confirmation", "Sponsor created")
        this.SponsorForm.reset();
  })
}

cancelCreation(){
  this.SponsorForm.reset();
}

ngOnInit() {
  this.SponsorForm = this.formBuilder.group({
    name: ["", [Validators.required, Validators.minLength(2)]],
    description: ["", [Validators.required, Validators.minLength(4)]],
    website: ["", Validators.required]
    //exhibition: ["", Validators.required]
  });
}
}
