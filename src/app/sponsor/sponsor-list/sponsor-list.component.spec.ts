/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Sponsor } from 'src/app/models/sponsor';
import { HttpClientModule } from '@angular/common/http';

import { SponsorListComponent } from './sponsor-list.component';

//npm install @faker-js/faker --save-dev.
describe('SponsorListComponent', () => {
  let component: SponsorListComponent;
  let fixture: ComponentFixture<SponsorListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorListComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorListComponent);
    component = fixture.componentInstance;
    const mainSponsor: Sponsor = {id:faker.datatype.number(), name:faker.music.genre(), description:faker.lorem.sentence(), website:faker.internet.url(), exhibition: {id:0}} as Sponsor;
    component.sponsors.push(mainSponsor);
    //console.log("------------------>" + mainSponsor.name);
    //component.getSponsors();

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show sponsors title', () => {
    const htmlComponent = fixture.debugElement.nativeElement.textContent.trim();
    expect(htmlComponent).toContain('Sponsors');
  });

  it('should have a sponsor name', () => {
    //console.log(fixture.debugElement.nativeElement.textContent.trim());
    const htmlComponent = fixture.debugElement.nativeElement.textContent.trim();
    expect(htmlComponent).toContain(component.sponsors[0].name);
  });
});
