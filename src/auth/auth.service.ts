import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/users.entity";
@Injectable()
export class AuthService{
    constructor(private readonly jwtservice:JwtService){

    }

    generateToken(payload:User){
        return this.jwtservice.sign(payload)
    }
}