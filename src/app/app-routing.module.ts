import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MuseumListComponent} from './museum/museum-list/museum-list.component';
import {MuseumDetailedComponent} from './museum/museum-detailed/museum-detailed.component';
import {MuseumCreateComponent} from './museum/museum-create/museum-create.component';
import {ArtistListComponent} from './artist/artist-list/artist-list.component';
import {ArtistDetailedComponent} from './artist/artist-detailed/artist-detailed.component';
import {ExhibitionsListComponent} from './exhibitions/exhibitions-list/exhibitions-list.component';
import {ExhibitionDetailedComponent} from './exhibitions/exhibition-detailed/exhibition-detailed.component';
import { ExhibitionCreateComponent } from './exhibitions/exhibition-create/exhibition-create.component';
import { ArtistCreateComponent } from './artist/artist-create/artist-create.component';
import {ArtistArtworkCreateComponent} from './artist/artist-artwork-create/artist-artwork-create.component';
import { CreateSponsorComponent } from './sponsor/create-sponsor/create-sponsor.component';
import { SponsorListComponent } from './sponsor/sponsor-list/sponsor-list.component';
import { MovementsComponentCreate } from './movements/movements-create/movements-create.component';
import { MovementsListComponent } from './movements/movements-list/movements-list.component';


const routes: Routes = [
  //{ path: 'app-museum-list', component: MuseumListComponent },
  //{ path: 'app-artist-list', component: ArtistListComponent },
  {
    path: 'museums',
    children: [
      {
        path: 'create',
        component: MuseumCreateComponent
      },
      {
        path: 'list',
        component: MuseumListComponent //nueva ruta para el modulo
      }
    ]
  },
  {
    path: 'artists',
    children: [
      {
        path: 'create',
        component: ArtistCreateComponent
      },
      {
        path: 'list',
        component: ArtistListComponent //nueva ruta para el modulo
      }
    ]
  },
  {
    path: 'sponsors',
    children: [
      {
        path: 'create',
        component: CreateSponsorComponent
      },
      {
        path: 'list',
        component: SponsorListComponent //nueva ruta para el modulo
      }
    ]
  },
  {
    path: 'movements',
    children: [
      {
        path: 'create',
        component: MovementsComponentCreate
      },
      {
        path: 'list',
        component: MovementsListComponent //nueva ruta para el modulo
      }
    ]
  },
  { path: 'app-exhibitions-list', component: ExhibitionsListComponent },
  { path: 'app-exhibitions-list/:id', component: ExhibitionsListComponent },
  //{ path: 'app-exhibitions-list', component: ExhibitionsListComponent },
  { path: 'app-exhibition-detailed/:id', component: ExhibitionDetailedComponent },
  { path: 'app-exhibition-create-new/:id', component: ExhibitionCreateComponent },
  { path: 'app-artist-detailed/:id', component: ArtistDetailedComponent },
  { path: 'app-museum-detailed/:id', component: MuseumDetailedComponent },
  { path: 'app-artist-artwork-new/:id', component: ArtistArtworkCreateComponent },
  //{ path:'', redirectTo:'/app-museum-list',pathMatch:'full'},
  { path:'', redirectTo:'/museums/list',pathMatch:'full'},
  { path: 'app-movements-create', component: MovementsComponentCreate },
  //{ path: 'app-sponsor-create', component: CreateSponsorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
