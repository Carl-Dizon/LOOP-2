import { IMaterials } from '../interfaces/materials/IMaterials';

export class Materials implements IMaterials {
    projectID: string;
    taskID?: string | number;
    areaName: number;
    materialName: string;
    materialsUsed: number;

    constructor(init?: Partial<Materials>) {
        Object.assign(this, init);
    }
}
