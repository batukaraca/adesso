import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Units } from '../model/units';
import { UnitsState } from '../state/units.state';
import { SelectedUnit } from '../action/units.action';
import { Router } from '@angular/router';


@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
  tempUnits: Units[];
  age = '';
  minfoodValue = -1;
  maxfoodValue = 201;
  foodCheck = false;

  minwoodValue = -1;
  maxwoodValue = 201;
  woodCheck = false;

  mingoldValue = -1;
  maxgoldValue = 201;
  goldCheck = false;

  public gold: { min: number, max: number } = {
    min: 0,
    max: 200
  };

  @Select(UnitsState.getUnitsList) units: Observable<Units[]>;
  constructor(private store: Store, private router: Router) { }

  ngOnInit() {
    this.units.subscribe(units => {
      this.tempUnits = units;
    });
  }

  UnitFilter() {
    this.units.subscribe(units => {
      this.tempUnits = units;
    });
    if (this.age !== '') {
      this.tempUnits = this.tempUnits.filter(x => x.age === this.age);
    }
    if (this.minfoodValue >= 0 && this.maxfoodValue <= 200) {
      this.tempUnits = this.tempUnits.filter(x => this.minfoodValue <= x.cost?.Food && x.cost?.Food <= this.maxfoodValue);
    }
    if (this.minwoodValue >= 0 && this.maxwoodValue <= 200) {
      this.tempUnits = this.tempUnits.filter(x => this.minwoodValue <= x.cost?.Wood && x.cost?.Wood <= this.maxwoodValue);
    }
    if (this.mingoldValue >= 0 && this.maxgoldValue <= 200) {
      this.tempUnits = this.tempUnits.filter(x => this.mingoldValue <= x.cost?.Gold && x.cost?.Gold <= this.maxgoldValue);
    }
    return this.tempUnits;
  }

  UnitDetail(payload: Units) {
    this.router.navigate(['unit-detail']);
    this.store.dispatch(new SelectedUnit(payload));
  }

  changeAge(value: string) {
    this.age = value;
  }

  ChangeMinCost(value: number, valueType: string) {
    switch (valueType) {
      case 'Food':
        this.minfoodValue = value;
        break;
      case 'Wood':
        this.minwoodValue = value;
        break;
      case 'Gold':
        this.mingoldValue = value;
        break;
    }
  }
  ChangeMaxCost(value: number, valueType: string) {
    switch (valueType) {
      case 'Food':
        this.maxfoodValue = value;
        break;
      case 'Wood':
        this.maxwoodValue = value;
        break;
      case 'Gold':
        this.maxgoldValue = value;
        break;
    }
  }

  changeStatus(value: boolean, valueName: string) {
    switch (valueName) {
      case 'Food':
        this.foodCheck = value;
        if (this.foodCheck === false) {
          this.minfoodValue = -1;
          this.maxfoodValue = 201;
        }
        else {
          this.minfoodValue = 0;
          this.maxfoodValue = 200;
        }
        break;
      case 'Wood':
        this.woodCheck = value;
        if (this.woodCheck === false) {
          this.minwoodValue = -1;
          this.maxwoodValue = 201;
        }
        else {
          this.minwoodValue = 0;
          this.maxwoodValue = 200;
        }
        break;
      case 'Gold':
        this.goldCheck = value;
        if (this.goldCheck === false) {
          this.mingoldValue = -1;
          this.maxgoldValue = 201;
        }
        else {
          this.mingoldValue = 0;
          this.maxgoldValue = 200;
        }
        break;
    }
  }
}
