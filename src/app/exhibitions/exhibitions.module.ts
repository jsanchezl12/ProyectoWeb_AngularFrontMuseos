import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ExhibitionsListComponent } from './exhibitions-list/exhibitions-list.component';
import { ExhibitionDetailedComponent } from './exhibition-detailed/exhibition-detailed.component';
import { ExhibitionCreateComponent } from './exhibition-create/exhibition-create.component';
//import {ArtistDetailedComponent} from './artist-detailed/artist-detailed.component';
import{AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule,ReactiveFormsModule
  ],
  declarations: [ExhibitionsListComponent,ExhibitionDetailedComponent,ExhibitionCreateComponent],
  exports: [ExhibitionsListComponent,ExhibitionDetailedComponent,ExhibitionCreateComponent]
})
export class ExhibitionModule { }
