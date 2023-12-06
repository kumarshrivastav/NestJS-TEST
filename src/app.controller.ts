import {Post,Controller,Request,UseGuards} from "@nestjs/common"
import {AuthGuard} from "@nestjs/passport"
@Controller("app")
export class AppController{
    @Post("/hello")
    @UseGuards(AuthGuard('local'))
    helloWorld(@Request() req):any{
        return req.user
    }

}