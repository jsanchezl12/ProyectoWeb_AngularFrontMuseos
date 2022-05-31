import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MovementsComponentCreate } from './movements-create/movements-create.component';
import { MovementsListComponent } from './movements-list/movements-list.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MovementsComponentCreate,MovementsListComponent],
  exports: [MovementsComponentCreate,MovementsListComponent]
})
export class MovementModule { }
