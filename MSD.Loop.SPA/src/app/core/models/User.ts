import { IUser } from "../interfaces/IUser";

export class User implements IUser{
    id?: string;
    firstName: string;
    lastName: string;
    address: string;
    userRole: string;
    
    constructor(init?:Partial<User>){
        Object.assign(this, init);
    }
}