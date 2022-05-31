/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Artist } from 'src/app/models/artist';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { ArtistListComponent } from './artist-list.component';

describe('ArtistListComponent', () => {
  let component: ArtistListComponent;
  let fixture: ComponentFixture<ArtistListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistListComponent ],
      imports: [HttpClientModule,AppRoutingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistListComponent);
    component = fixture.componentInstance;
    const mainArtist: Artist = {id:faker.datatype.number(), name:faker.music.genre(), birthplace:faker.address.city(), birthdate:"2022-05-05", image:faker.image.imageUrl(),
    movements:[],artworks:[]} as Artist;
    component.artistas.push(mainArtist);
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show artists title', () => {
    const htmlComponent = fixture.debugElement.nativeElement.textContent.trim();
    expect(htmlComponent).toContain('Artists');
  });

  it('should have a artist name', () => {
    //console.log(fixture.debugElement.nativeElement.textContent.trim());
    const htmlComponent = fixture.debugElement.nativeElement.textContent.trim();
    expect(htmlComponent).toContain(component.artistas[0].name);
  });
});
