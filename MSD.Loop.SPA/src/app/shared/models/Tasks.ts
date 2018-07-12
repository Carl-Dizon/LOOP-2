import { ITasks } from '../interfaces/tasks/ITasks';

export class Tasks implements ITasks {
    areaName: string;
    projectID?: string | number;
    asignee: string;
    task: number;
    taskID?: string | number;
    dueDate: string;
    hourEstimate: string;
    profPic: string;

    constructor(init?: Partial<Tasks>) {
        Object.assign(this, init);
    }
}
