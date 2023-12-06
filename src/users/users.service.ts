import {Injectable} from "@nestjs/common"
import { UserEntity } from "./user.entity"
@Injectable()
export class UserService{
public users:UserEntity[]=[
    {
        username:"user1",
        password:"admin",
        email:"user1@gmail.com"
    },
    {
        username:"user2",
        password:"admin",
        email:"user2@gmail.com"
    }
    ,{
        username:"user3",
        password:"admin",
        email:"user3@gmail.com"
    }
]

getUserByUsername(username:string):UserEntity{
    return this.users.find((user:UserEntity)=>user.username===username)
}
}