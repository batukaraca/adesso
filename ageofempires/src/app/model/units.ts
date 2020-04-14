export interface Units {
    id: number;
    name: string;
    description: string;
    expansion: string;
    age: string;
    cost: Costs;
    rebuild_time: number;
    reload_time: number;
    attack_delay: number;
    movement_rate: number;
    line_of_sight: number;
    hit_points: number;
    range: number;
    attack: number;
    armor: string;
    accuracy: string;
}

export interface Costs{
    Wood: number;
    Gold: number;
    Food: number;
}
