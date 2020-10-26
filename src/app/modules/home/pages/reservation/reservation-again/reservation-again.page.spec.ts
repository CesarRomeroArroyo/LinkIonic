import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReservationAgainPage } from './reservation-again.page';

describe('ReservationAgainPage', () => {
  let component: ReservationAgainPage;
  let fixture: ComponentFixture<ReservationAgainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationAgainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservationAgainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
