import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Store, StateStream, NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';
import { UnitsState } from './state/units.state';

describe('AppComponent', () => {
 // let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        NgxsModule.forRoot([
          UnitsState
        ]),
      ],
      declarations: [
        AppComponent
      ],
      providers: []
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ageofempires'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ageofempires');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Home');
  });

  /*it('it toggles feed', () => {
   // store.dispatch(new GetUnits());
    const feed = store.selectSnapshot(state => state.units);
    expect(feed).toBe(true);
  });*/
});
