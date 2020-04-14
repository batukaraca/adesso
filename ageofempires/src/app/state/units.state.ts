import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Units } from '../model/units';
import { GetUnits, SelectedUnit } from '../action/units.action';
import { ApiService } from '../service/api.service';
import { Injectable } from '@angular/core';

export class UnitsStateModel {
    units: Units[];
    selectedUnit: Units;
}

@State<UnitsStateModel>({
    name: 'units',
    defaults: {
        units: [],
        selectedUnit: null,
    }
})

@Injectable()
export class UnitsState {
    constructor(private apiService: ApiService) {
    }

    @Selector()
    static getUnitsList(state: UnitsStateModel) {
        return state.units;
    }

    @Selector()
    static getUnit(state: UnitsStateModel) {
        return state.selectedUnit;
    }

    @Action(GetUnits)
    getUnits({ getState, setState }: StateContext<UnitsStateModel>) {
        return this.apiService.getLists().then((result) => {
            const state = getState();
            setState({
                ...state,
                units: result,
                selectedUnit: result[0],
            });
        });
    }

    @Action(SelectedUnit)
    setSelectedUnit({ getState, setState }: StateContext<UnitsStateModel>, { payload }: SelectedUnit) {
        const state = getState();
        setState({
            ...state,
            selectedUnit: payload
        });
    }
}
