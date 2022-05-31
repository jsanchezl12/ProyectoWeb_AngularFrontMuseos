/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Movement } from 'src/app/models/movement';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { MovementsListComponent } from './movements-list.component';


describe('MovementsListComponent', () => {
  let component: MovementsListComponent;
  let fixture: ComponentFixture<MovementsListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovementsListComponent ],
      imports: [HttpClientModule,AppRoutingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementsListComponent);
    component = fixture.componentInstance;
    const mainMovement: Movement = {id:faker.datatype.number(), name:faker.music.genre(),
      description:faker.lorem.sentence(), countryOfOrigin:faker.address.country(), activeYears:faker.date.past().getFullYear().toString()} as Movement;
    component.movements.push(mainMovement);
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show movements title', () => {
    const htmlComponent = fixture.debugElement.nativeElement.textContent.trim();
    expect(htmlComponent).toContain('Movements');
  });

  it('should have a movement name', () => {
    //console.log(fixture.debugElement.nativeElement.textContent.trim());
    const htmlComponent = fixture.debugElement.nativeElement.textContent.trim();
    expect(htmlComponent).toContain(component.movements[0].name);
  });

});
