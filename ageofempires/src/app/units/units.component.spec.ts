import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsComponent } from './units.component';
import { Store, NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';
import { UnitsState } from '../state/units.state';
import { AppRoutingModule } from '../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

describe('UnitsComponent', () => {
  let component: UnitsComponent;
  let fixture: ComponentFixture<UnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        NgxsModule.forRoot([
          UnitsState
        ]),
        AppRoutingModule,
      ],
      declarations: [UnitsComponent],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Food range set to disabled when foodCheck false', () => {
    component.foodCheck = false;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.slider_food').disabled).toBeTruthy();
  });

  it('Food range set to enabled when foodCheck true', () => {
    component.foodCheck = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.slider_food').disabled).toBeFalsy();
  });
  it('Wood range set to disabled when woodCheck false', () => {
    component.woodCheck = false;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.slider_wood').disabled).toBeTruthy();
  });

  it('Wood range set to enabled when woodCheck true', () => {
    component.woodCheck = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.slider_wood').disabled).toBeFalsy();
  });
  it('Gold range set to disabled when goldCheck false', () => {
    component.goldCheck = false;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.slider_gold').disabled).toBeTruthy();
  });

  it('Gold range set to enabled when goldCheck true', () => {
    component.goldCheck = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.slider_gold').disabled).toBeFalsy();
  });

  it('should unchecked when started', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#food_checkbox').checked).toBeFalsy();
  });
  it('should age equal = "" when started', () => {
    expect(component.age).toEqual('');
  });
});
