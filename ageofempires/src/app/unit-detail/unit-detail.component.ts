import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Units } from '../model/units';
import { UnitsState } from '../state/units.state';

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.scss']
})
export class UnitDetailComponent implements OnInit {
  tempUnit: Units;
  @Select(UnitsState.getUnit) unit: Observable<Units>;
  constructor(private store: Store) { }

  ngOnInit() {
    this.unit.subscribe(unit => {
      this.tempUnit = unit;
    });
  }
}
