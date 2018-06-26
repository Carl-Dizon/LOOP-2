import { IRole } from "./IRole";
import { ICompany } from "./ICompany";

export interface IUser{
  firstName: string;
  lastName: string;
  role: IRole;
  company: ICompany;
}
