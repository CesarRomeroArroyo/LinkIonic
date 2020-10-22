import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiberarPage } from './liberar.page';

describe('LiberarPage', () => {
  let component: LiberarPage;
  let fixture: ComponentFixture<LiberarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiberarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiberarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
