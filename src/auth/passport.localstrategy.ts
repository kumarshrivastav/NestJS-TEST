import { Injectable ,UnauthorizedException} from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { Strategy } from "passport-local"
import { UserEntity } from "src/users/user.entity"
import { UserService } from "src/users/users.service"
@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly userServie:UserService){
        super()
    }

    validate(username:string,password:string):UserEntity{
        const user=this.userServie.getUserByUsername(username)
        if(user===undefined)throw new UnauthorizedException()
        if(user.password===password)return user
    }
}