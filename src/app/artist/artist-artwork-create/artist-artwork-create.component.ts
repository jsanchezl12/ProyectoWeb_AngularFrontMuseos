import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'; // se agrega para el formulario
import { ToastrService } from 'ngx-toastr';



import { Artwork, ArtworkType  } from  '../../models/artwork';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-artist-artwork-create',
  templateUrl: './artist-artwork-create.component.html',
  styleUrls: ['./artist-artwork-create.component.css']
})
export class ArtistArtworkCreateComponent implements OnInit {

  artworkForm!: FormGroup;
  idArtist:number = 0;
  artTypes: Array<string> = [];

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private artistService: ArtistService) { }

    createArtwork(artwork: Artwork, id: number) {
      this.artistService.createArtWork(artwork,id).subscribe(artwork=>{
        console.info("The artwork was created: ", artwork)
        this.toastr.success("Confirmation", "Artwork created")
        this.artworkForm.reset();
      })
    }

    cancelCreation(){
      this.artworkForm.reset();
    }

    getArtTypes(){
      //this.artTypes = Object.keys(ArtworkType);
      for(let artType of Object.keys(ArtworkType)){
        var ArtT = artType.charAt(0).toUpperCase() + artType.slice(1).toLowerCase();
        console.log(ArtT);
        this.artTypes.push(ArtT);
        //console.log(artType.toLowerCase());
        //artType = artType.toLowerCase();
      }
    }


  ngOnInit() {
    this.getArtTypes();
    let id = this.route.snapshot.params.id;
    this.idArtist = id;
    console.log(id);
    this.artworkForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required, Validators.minLength(4)]],
      year: ["", Validators.required],
      type: [""]
    });
  }

}
