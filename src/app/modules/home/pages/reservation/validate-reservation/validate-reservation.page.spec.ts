import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValidateReservationPage } from './validate-reservation.page';

describe('ValidateReservationPage', () => {
  let component: ValidateReservationPage;
  let fixture: ComponentFixture<ValidateReservationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateReservationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidateReservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
