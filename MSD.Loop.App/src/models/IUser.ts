import { IRole } from "./IRole";
import { ICompany } from "./ICompany";

export interface IUser{
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  role: IRole;
  company: ICompany;
}
