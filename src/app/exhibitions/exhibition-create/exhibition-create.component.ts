import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // se agrega para el formulario
import { ToastrService } from 'ngx-toastr';

import { Exhibition } from 'src/app/models/exhibition';
import { ExhibitionsService } from '../exhibitions.service';

import { Sponsor } from 'src/app/models/sponsor';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-exhibition-create',
  templateUrl: './exhibition-create.component.html',
  styleUrls: ['./exhibition-create.component.css']
})
export class ExhibitionCreateComponent implements OnInit {
  idMuseo!: string;
  exhibitionForm!: FormGroup;
  mainSponsor: Sponsor = {} as Sponsor;
  //sponsorForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private exhibitionsService: ExhibitionsService
  ) { }

  createExhibition(exhibition: Exhibition) {
    //Se creo asi ya que no se encontro otra forma de poder anidar el id de sponsor a la exhibicion
    var randNumber = Math.floor(Math.random() * 100) + 1;
    this.mainSponsor.name = `Sponsor #${randNumber}`;
    this.mainSponsor.description = `${this.mainSponsor.name} has a long and distinguished tradition of supporting the arts, working with leading cultural institutions to encourage innovative projects and wider access to theatre, music, and the visual arts.`;
    this.mainSponsor.website = `https://www.credit-suisse.com`;
    this.exhibitionsService.createSponsorForExh(this.mainSponsor).subscribe(sponsor=>{
      console.info("The sponsor was created: ", sponsor)
      let values = Object.keys(sponsor).map(key => sponsor['id']);
      console.log(values);
      exhibition.sponsor = {id:0} as Sponsor;
      exhibition.sponsor.id = values[0];

      this.exhibitionsService.createExhibition(this.idMuseo,exhibition).subscribe(exhibition=>{
        console.info("The exhibition was created: ", exhibition)
        this.toastr.success("Confirmation", "Exhibition created")
        this.exhibitionForm.reset();
        //this.sponsorForm.reset();
      })
    })
  }

  cancelCreation(){
    this.exhibitionForm.reset();
    //this.sponsorForm.reset();
  }

  ngOnInit() {
    this.idMuseo =  this.route.snapshot.params.id.toString();
    this.exhibitionForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required, Validators.minLength(4)]],
    });
    /*this.sponsorForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required, Validators.minLength(4)]],
      website: ["", Validators.required]
    });*/
  }

}
