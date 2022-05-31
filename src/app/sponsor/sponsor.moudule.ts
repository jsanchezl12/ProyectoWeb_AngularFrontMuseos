import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateSponsorComponent } from './create-sponsor/create-sponsor.component';
import { SponsorListComponent } from './sponsor-list/sponsor-list.component';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [CreateSponsorComponent,SponsorListComponent],
    exports: [CreateSponsorComponent,SponsorListComponent]
})
export class SponsorModule { }
