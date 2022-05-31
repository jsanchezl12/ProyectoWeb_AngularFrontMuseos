/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Exhibition } from 'src/app/models/exhibition';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { ExhibitionsListComponent } from './exhibitions-list.component';

describe('ExhibitionListComponent', () => {
  let component: ExhibitionsListComponent;
  let fixture: ComponentFixture<ExhibitionsListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitionsListComponent ],
      imports: [HttpClientModule,AppRoutingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionsListComponent);
    component = fixture.componentInstance;
    const mainExhibition: Exhibition = {id:faker.datatype.number(), name:faker.music.genre(), description:faker.lorem.sentence(), sponsor:{id:0}} as Exhibition;
    component.exhibiciones.push(mainExhibition);
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show exhibitions title', () => {
    const htmlComponent = fixture.debugElement.nativeElement.textContent.trim();
    expect(htmlComponent).toContain('Exhibitions');
  });

  it('should have a exhibition name', () => {
    //console.log(fixture.debugElement.nativeElement.textContent.trim());
    const htmlComponent = fixture.debugElement.nativeElement.textContent.trim();
    expect(htmlComponent).toContain(component.exhibiciones[0].name);
  });
});
