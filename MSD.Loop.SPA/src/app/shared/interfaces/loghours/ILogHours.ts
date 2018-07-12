export interface ILogHours {
    id: number;
    userId: number;
    projectId:  number;
    areaId: number;
    areaName: string;
    taskId?: string | number;
    hoursLogged: number;
    timeStamp: Date;
}
