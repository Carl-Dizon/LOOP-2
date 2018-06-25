import { Injectable } from "@angular/core";
import { IUser } from "../../interfaces/IUser";
import { User } from "../../models/User";


@Injectable()
export class UserService{

        getUsers():User[]{

            return [{
                "id" : "1",
                "firstName" : "Fredrick",
                "lastName" : "Palmisano",
                "address" : "Siquijor",
                "userRole" : "Superadmin",
            },{
                "id" : "2",
                "firstName" : "vince",
                "lastName" : "pacarat",
                "address" : "Lazi",
                "userRole" : "Admin",
            },{
                "id" : "3",
                "firstName" : "Kalyn",
                "lastName" : "Kugler",
                "address" : "Maria",
                "userRole" : "User",
            }];
        }
}