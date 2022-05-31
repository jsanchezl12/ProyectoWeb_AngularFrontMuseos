import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistListComponent } from './artist-list/artist-list.component';
import {ArtistDetailedComponent} from './artist-detailed/artist-detailed.component';
import {AppRoutingModule} from '../app-routing.module';
import { ArtistCreateComponent } from './artist-create/artist-create.component';
import {ArtistArtworkCreateComponent} from './artist-artwork-create/artist-artwork-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule, ReactiveFormsModule
  ],
  declarations: [ArtistListComponent, ArtistDetailedComponent, ArtistCreateComponent,ArtistArtworkCreateComponent],
  exports: [ArtistListComponent, ArtistDetailedComponent]
})
export class ArtistModule { }
