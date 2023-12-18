import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { User } from "src/users/users.entity";
import { UserService } from "src/users/users.service";
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly userservice:UserService){
        super()
    }
    validate(username:string,password:string):User{
        const user=this.userservice.getUserByUsername(username)
        if(!user){
            throw new UnauthorizedException()
        }
        if(user && password===user.password){
            return user;
        }
        else{
            throw new UnauthorizedException()
        }
    }
}