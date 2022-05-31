/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Museum } from 'src/app/models/museum';
import { HttpClientModule } from '@angular/common/http';
import{AppRoutingModule} from '../../app-routing.module';
import { MuseumListComponent } from './museum-list.component';

describe('MuseumListComponent', () => {
  let component: MuseumListComponent;
  let fixture: ComponentFixture<MuseumListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseumListComponent ],
      imports: [HttpClientModule,AppRoutingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumListComponent);
    component = fixture.componentInstance;
    const mainMuseum: Museum = {id:faker.datatype.number(), name:faker.music.genre(), address:faker.address.streetAddress(), city:faker.address.city(), image:faker.image.imageUrl()} as Museum;
    component.museos.push(mainMuseum);
    fixture.detectChanges();
    debug = fixture.debugElement;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show museums title', () => {
    const htmlComponent = fixture.debugElement.nativeElement.textContent.trim();
    expect(htmlComponent).toContain('Museums');
  });

  it('should have a museum name', () => {
    //console.log(fixture.debugElement.nativeElement.textContent.trim());
    const htmlComponent = fixture.debugElement.nativeElement.textContent.trim();
    expect(htmlComponent).toContain(component.museos[0].name);
  });
});
