import { IUser } from '../interfaces/user/IUser';

export class User implements IUser {
    id?: string;
    firstName: string;
    lastName: string;
    address: string;
    role: string;

    constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
}
