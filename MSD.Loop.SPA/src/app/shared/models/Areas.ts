import { IAreas } from '../interfaces/areas/IAreas';

export class Areas implements IAreas {
    areaID: number;
    areaName: string;
    areaHourEstimate: number;

    constructor(init?: Partial<Areas>) {
        Object.assign(this, init);
    }
}
