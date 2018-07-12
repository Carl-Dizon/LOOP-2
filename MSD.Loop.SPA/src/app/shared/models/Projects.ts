import { IProjects } from '../interfaces/projects/IProjects';

export class Projects implements IProjects {
    projectID?: string | number;
    projectName: string;
    image: string;
    hourEstimate: number;

    constructor(init?: Partial<Projects>) {
        Object.assign(this, init);
    }
}
