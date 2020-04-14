import { Component, OnInit } from '@angular/core';
import { GetUnits } from './action/units.action';
import { Select, Store } from '@ngxs/store';
import { UnitsState } from './state/units.state';
import { Observable } from 'rxjs';
import { Units } from './model/units';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ageofempires';
  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new GetUnits());
  }
}
