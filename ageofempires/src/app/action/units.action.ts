import {Units} from '../model/units';


export class GetUnits {
    static readonly type = '[Units] Get';
}

export class SelectedUnit {
    static readonly type = '[Units] Filter';

    constructor(public payload: Units) {
    }
}
