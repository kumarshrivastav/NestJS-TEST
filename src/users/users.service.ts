import { Constraint } from "src/constraint";
import { User } from "./users.entity";
import {Injectable} from "@nestjs/common"
@Injectable()
export class UserService{
    public users:User[]=[
        {
            username:"user1",
            password:"admin1",
            email:"user1@gmail.com",
            age:22,
            role:Constraint.ROLES.ANDROID_DEVELOPER
        },
        {
            username:"user2",
            password:"admin2",
            email:"user2@gmail.com",
            age:21,
            role:Constraint.ROLES.WEB_DEVELOPER
        },
        {
            username:"user3",
            password:"admin3",
            email:"user3@gmail.com",
            age:20,
            role:Constraint.ROLES.ANDROID_DEVELOPER
        }
    ]
    getUserByUsername(username:string):User{
        return this.users.find((user)=>user.username===username)
    }
}