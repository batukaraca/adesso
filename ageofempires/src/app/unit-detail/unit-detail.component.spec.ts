import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UnitDetailComponent } from './unit-detail.component';
import { NgxsModule } from '@ngxs/store';
import { UnitsState } from '../state/units.state';
import { HttpClientModule } from '@angular/common/http';

describe('UnitDetailComponent', () => {
  let component: UnitDetailComponent;
  let fixture: ComponentFixture<UnitDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        NgxsModule.forRoot([
          UnitsState
        ]),
      ],
      declarations: [ UnitDetailComponent ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
