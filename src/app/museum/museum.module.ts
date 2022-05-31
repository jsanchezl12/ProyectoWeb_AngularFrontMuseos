import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuseumListComponent } from './museum-list/museum-list.component';
import { MuseumDetailedComponent } from './museum-detailed/museum-detailed.component';
import { MuseumCreateComponent } from './museum-create/museum-create.component';
import{AppRoutingModule} from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule, ReactiveFormsModule
  ],
  exports: [MuseumListComponent,MuseumDetailedComponent,MuseumCreateComponent],
  declarations: [MuseumListComponent,MuseumDetailedComponent,MuseumCreateComponent]
})
export class MuseumModule { }
