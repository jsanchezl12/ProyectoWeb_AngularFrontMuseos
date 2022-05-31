import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovementsComponentCreate } from './movements-create.component';

describe('MovementsCreateComponent', () => {
  let component: MovementsComponentCreate;
  let fixture: ComponentFixture<MovementsComponentCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovementsComponentCreate ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementsComponentCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /*it('should create', () => {
    //expect(component).toBeTruthy();
  });*/
});
