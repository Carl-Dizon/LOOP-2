import { ILogHours } from '../interfaces/loghours/ILogHours';

export class LogHours implements ILogHours {
    id: number;
    userId: number;
    projectId:  number;
    areaId: number;
    areaName: string;
    taskId?: string | number;
    hoursLogged: number;
    timeStamp: Date;

    constructor(init?: Partial<LogHours>) {
        Object.assign(this, init);
    }
}
