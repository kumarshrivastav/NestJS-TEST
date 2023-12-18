import {Post,Controller,Get, UseGuards, Request} from "@nestjs/common"
import {AuthGuard} from "@nestjs/passport"
import { AuthService } from "./auth/auth.service"
import { CustomGuard } from "./role.guard"
import { Constraint } from "./constraint"
@Controller("app")
export class AppController{
constructor(private readonly authservice:AuthService){}
    @Get("/login")
    @UseGuards(AuthGuard("local"))
    login(@Request() req):string{
        return this.authservice.generateToken(req.user)
    }

    @Get("/android-developer")
    @UseGuards(AuthGuard("jwt"),new CustomGuard(Constraint.ROLES.ANDROID_DEVELOPER))
    androidDeveloper(@Request() req):string{
        return "private data for android developer" + JSON.stringify(req.user)
    }

    @Get("/web-developer")
    @UseGuards(AuthGuard("jwt"),new CustomGuard(Constraint.ROLES.WEB_DEVELOPER))
    webDeveloper(@Request() req):string{
        return "private data for web developer" + JSON.stringify(req.user)
    }

}